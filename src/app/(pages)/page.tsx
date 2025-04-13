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
        icon={PlusSvg}
      />
      <CardGrid
        cardDtos={bookcases}
        handleOnClick={(bookcase, index) =>
          router.push(`/bookcase/${index + 1}`)
        }
      />
    </PageWrapper>
  )
}

const PlusSvg = // TODO : 나중에 공통으로 빼기
  (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 6.66663V25.3333M6.66669 16H25.3334"
        stroke="#1E1E1E"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
