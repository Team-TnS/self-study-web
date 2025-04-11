"use client"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { useMutation } from "@tanstack/react-query"
import { postAuthenticate } from "@/api/member/postAuthenticate"
import { postJoinAndLogin } from "@/api/member/postJoinAndLogin"
import { useRouter } from "next/navigation"
import InputField from "@/components/input/InputField"
import { getAuthToken } from "@/api/axiosInstance"
import BottomButton from "@/components/input/BottomButton"
import VerticalContainer from "@/layout/VerticalContainer"

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
    <VerticalContainer>
      <InputContainer>
        <InputField
          disabled={state.isSend}
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
          visible={state.isSend}
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
      </InputContainer>
      {state.isSend ? (
        <BottomButton text={"회원가입"} onPress={() => loginMutate()} />
      ) : (
        <BottomButton
          text={"인증번호 전송"}
          onPress={() => authenticationMutate()}
        />
      )}
    </VerticalContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 0 20px;
  justify-content: center;
  gap: 10px;
`
