"use client"

import { useRouter } from "next/navigation"
import CardGrid from "@/components/display/CardGrid"
import SubHeader from "@/components/display/SubHeader"
import React from "react"
import { PageWrapper } from "@/components/display/PageWrapper"
import useBookcaseList from "@/hooks/bookcase/useBookcaseList"

export default function Home() {
  const router = useRouter()
  const { bookcases, fetchNextPage, hasNextPage } = useBookcaseList()

  return (
    <PageWrapper>
      <SubHeader
        title="내 책장"
        onClick={() => router.push("/bookcase/register")}
        icon="/plus.svg"
      />
      <CardGrid
        cardDtos={bookcases}
        handleOnClick={(bookcase) => router.push(`/bookcase/${bookcase.id}`)}
      />
    </PageWrapper>
  )
}
