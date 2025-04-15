"use client"

import styles from "./page.module.css"
import React, { useEffect, use } from "react"
import BasicButton from "@/components/input/BasicButton"
import BasicText from "@/components/display/BasicText"
import { usePageHeader } from "@/layout/PageHeaderProvider"
import { useRouter } from "next/navigation"
import useBookcaseDetail from "@/hooks/book/useBookcaseDetail"
import TitleHeader from "@/components/display/TitleHeader"
import CardGrid from "@/components/display/CardGrid"

export default function BookcasePage({
  params,
}: {
  params: Promise<{ Id: string }>
}) {
  const router = useRouter()
  const { Id } = use(params)
  const { setTitle } = usePageHeader()

  useEffect(() => {
    setTitle("")
  }, [])

  const { name, books } = useBookcaseDetail(Id)

  return (
    <div className={styles.page}>
      <TitleHeader
        title={name}
        onClick={() => router.push("/book/register")}
        icon="/plus.svg"
      />
      {books.length === 0 ? (
        <>
          <BasicText text={"공부할 수 있는 책이 없어요"} />
          <BasicButton
            text={"책 만들기"}
            onPress={() => router.push("/book/register")}
            variant="basic"
          />
          <BasicButton
            text={"책 가져오기"}
            onPress={() => console.log("책 가져오기 링크~")}
            variant={"primary"}
          />
        </>
      ) : (
        <div>
          <TitleHeader
            title={name}
            onClick={() => router.push("/book/register")}
            icon="/plus.svg"
          />
          <CardGrid
            cardDtos={books}
            handleOnClick={(id) => router.push(`/book/${id}`)}
          />
        </div>
      )}
    </div>
  )
}
