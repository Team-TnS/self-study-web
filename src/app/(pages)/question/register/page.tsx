"use client"

import { useEffect } from "react"
import { usePageHeader } from "@/layout/PageHeaderProvider"

export default function QuestionRegisterPage() {
  const { setTitle } = usePageHeader()

  useEffect(() => {
    setTitle("문제 등록하기")
  }, [])

  return <div>등록 폼</div>
}
