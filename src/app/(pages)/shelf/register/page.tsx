"use client"

import styles from "./page.module.css"
import { useEffect } from "react"
import { usePageHeader } from "@/layout/PageHeaderProvider"
import TextForm from "@/components/input/TextForm"
export default function ShelfRegisterPage() {
  const { setTitle } = usePageHeader()

  useEffect(() => {
    setTitle("책장 만들기")
  }, [])

  return (
    <div className={styles.page}>
      <TextForm
        maxLength={24}
        placeholder={"책장 이름을 입력해주세요."}
        buttonText={"책장 만들기"}
      />
    </div>
  )
}
