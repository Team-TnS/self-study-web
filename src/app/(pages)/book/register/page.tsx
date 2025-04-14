"use client"

import { useEffect } from "react"
import { usePageHeader } from "@/layout/PageHeaderProvider"
import InputField from "@/components/input/InputField"
import BasicButton from "@/components/input/BasicButton"
import useBookRegister from "@/hooks/book/useBookRegister"
import VerticalContainer from "@/layout/VerticalContainer"

export default function BookRegisterPage() {
  const { setTitle } = usePageHeader()
  const { requestState, handleNameChange, handleSubmit } = useBookRegister()

  useEffect(() => {
    setTitle("책 만들기")
  }, [])

  return (
    <VerticalContainer>
      <InputField value={requestState.name} onChange={handleNameChange} />
      <BasicButton
        text={"책 만들기"}
        onPress={() => handleSubmit()}
        variant={"primary"}
      />
    </VerticalContainer>
  )
}
