"use client"

import { useRouter } from "next/navigation"
import CardGrid, { CardDto } from "@/components/display/CardGrid"
import SubHeader from "@/components/display/SubHeader"
import React from "react"
import { PageWrapper } from "@/components/display/PageWrapper"

const bookcases: CardDto[] = [
  { name: "영어", progress: 14, count: 16 },
  { name: "국어", progress: 24, count: 30 },
  { name: "정보처리기사", progress: 0, count: 2 },
  { name: "한국사", progress: 14, count: 16 },
  { name: "2024 모의고사", progress: 3, count: 6 },
  { name: "토익 기출 정리", progress: 15, count: 17 },
]

export default function Home() {
  const router = useRouter()
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
