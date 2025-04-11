"use client"

import styles from "./page.module.css"
import { useEffect } from "react"
import { usePageHeader } from "@/layout/PageHeaderProvider"
import TextForm from "@/components/input/TextForm"
import { postBookcase } from "@/api/bookcase/bookcase"
import { router } from "next/client"
import { useRouter } from "next/navigation"

export default function BookcaseRegisterPage() {
  const router = useRouter()
  const { setTitle } = usePageHeader()
  useEffect(() => {
    setTitle("책장 만들기")
  }, [])

  const handleSubmit = async (values: string) => {
    await postBookcase({ name: values })
    router.push("/")
  }

  return (
    <div className={styles.page}>
      <TextForm
        maxLength={24}
        placeholder={"책장 이름을 입력해주세요."}
        buttonText={"책장 만들기"}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
