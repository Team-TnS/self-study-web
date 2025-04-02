"use client"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { useMutation } from "@tanstack/react-query"
import { postAuthenticate } from "@/api/member/postAuthenticate"
import { postJoinAndLogin } from "@/api/member/postJoinAndLogin"
import { useRouter } from "next/navigation"
import InputField from "@/components/input/InputField"
import { getAuthToken } from "@/api/axiosInstance"

export default function Login() {
  const router = useRouter()
  const [state, setState] = useState({
    phone: "",
    authenticationCode: "",
    isSend: false,
  })

  useEffect(() => {
    if (getAuthToken()) {
      router.replace("/")
    }
  }, [])

  const { mutate: authenticationMutate } = useMutation({
    mutationFn: () => postAuthenticate(state.phone),
    onSuccess: () => {
      setState((prev) => ({
        ...prev,
        isSend: true,
      }))
      alert("문자 전송 성공!")
    },
  })

  const { mutate: loginMutate } = useMutation({
    mutationFn: () =>
      postJoinAndLogin({
        phone: state.phone,
        authenticationCode: state.authenticationCode,
      }),
    onSuccess: (res) => {
      if (res.authToken) {
        document.cookie = `token=${res.authToken}; path=/; max-age=86400`
        router.replace("/")
      }
    },
  })

  return (
    <Container>
      <InputField
        value={state.phone}
        onChange={(value) =>
          setState((prev) => ({
            ...prev,
            phone: value,
          }))
        }
        placeholder="전화번호를 입력해주세요.(-은 제외)"
        maxLength={11}
      />
      <InputField
        value={state.authenticationCode}
        onChange={(value) =>
          setState((prev) => ({
            ...prev,
            authenticationCode: value,
          }))
        }
        placeholder="인증번호를 입력해주세요."
        maxLength={4}
      />
      {state.isSend ? (
        <Button onClick={() => loginMutate()}>회원가입</Button>
      ) : (
        <Button onClick={() => authenticationMutate()}>인증번호 전송</Button>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100dvh;
  gap: 26px;
  padding: 200px 25px;
`

const Button = styled.button`
  margin-top: 66px;
  bottom: 20px;
  padding: 20px;
  font-size: 16px;
  color: white;
  font-weight: 700;
  background-color: #5569e6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
`
