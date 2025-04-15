"use client"

import styles from "./page.module.css"
import { usePageHeader } from "@/layout/PageHeaderProvider"
import InputField from "@/components/input/InputField"
import BasicButton from "@/components/input/BasicButton"
import useBookcaseRegister from "@/hooks/bookcase/useBookcaseRegister"
import { useEffect } from "react"

export default function BookcaseRegisterPage() {
  const { setTitle } = usePageHeader()
  const { requestState, handleNameChange, handleSubmit } = useBookcaseRegister()

  useEffect(() => {
    setTitle("책장 만들기")
  }, [])

  return (
    <div className={styles.page}>
      <InputField value={requestState.name} onChange={handleNameChange} />
      <BasicButton
        text={"저장"}
        onPress={() => handleSubmit()}
        variant={"primary"}
      />
    </div>
  )
}
