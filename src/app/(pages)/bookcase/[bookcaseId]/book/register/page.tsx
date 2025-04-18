"use client"

import { use, useEffect } from "react"
import { usePageHeader } from "@/layout/PageHeaderProvider"
import InputField from "@/components/input/InputField"
import BasicButton from "@/components/input/BasicButton"
import useBookRegister from "@/hooks/book/useBookRegister"
import VerticalContainer from "@/layout/VerticalContainer"
import InputContainer from "@/layout/InputContainer"
import TitleHeader from "@/components/display/TitleHeader"
import useBookcaseDetail from "@/hooks/book/useBookcaseDetail"
import ColorPicker from "@/components/input/ColorPicker"

export default function BookRegisterPage({
  params,
}: {
  params: Promise<{ bookcaseId: string }>
}) {
  const { setTitle } = usePageHeader()
  const { bookcaseId } = use(params)
  const { requestState, handleNameChange, handleColorSelect, handleSubmit } =
    useBookRegister()
  requestState.bookcaseId = bookcaseId
  const { name } = useBookcaseDetail(bookcaseId)

  useEffect(() => {
    setTitle("책 만들기")
  }, [])

  return (
    <VerticalContainer>
      <TitleHeader title={name}></TitleHeader>
      <InputContainer>
        <InputField
          value={requestState.name}
          onChange={handleNameChange}
          placeholder={"책 이름을 입력해주세요."}
        />
        <ColorPicker value={requestState.color} onSelect={handleColorSelect} />
      </InputContainer>

      <BasicButton
        text={"책 만들기"}
        onPress={() => handleSubmit()}
        variant={"primary"}
      />
    </VerticalContainer>
  )
}
