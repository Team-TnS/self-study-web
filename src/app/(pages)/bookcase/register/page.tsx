"use client"

import { usePageHeader } from "@/layout/PageHeaderProvider"
import InputField from "@/components/input/InputField"
import BasicButton from "@/components/input/BasicButton"
import useBookcaseRegister from "@/hooks/bookcase/useBookcaseRegister"
import { useEffect } from "react"
import VerticalContainer from "@/layout/VerticalContainer"
import InputContainer from "@/layout/InputContainer"
import ColorPicker from "@/components/input/ColorPicker"

export default function BookcaseRegisterPage() {
  const { setTitle } = usePageHeader()
  const { requestState, handleNameChange, handleColorSelect, handleSubmit } =
    useBookcaseRegister()
  useEffect(() => {
    setTitle("책장 만들기")
  }, [])

  return (
    <VerticalContainer>
      <InputContainer>
        <InputField
          value={requestState.name}
          onChange={handleNameChange}
          placeholder={"책장 이름을 입력해주세요."}
        />
        <ColorPicker value={requestState.color} onSelect={handleColorSelect} />
      </InputContainer>

      <BasicButton
        text={"책장 만들기"}
        onPress={() => handleSubmit()}
        variant={"primary"}
      />
    </VerticalContainer>
  )
}
