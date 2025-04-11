"use client"

import { useRouter } from "next/navigation"
import CardGrid, { CardDto } from "@/components/display/CardGrid"
import SubHeader from "@/components/display/SubHeader"
import React, { useEffect, useState } from "react"
import { PageWrapper } from "@/components/display/PageWrapper"
import { usePageHeader } from "@/layout/PageHeaderProvider"
import { getBookcaseList } from "@/api/bookcase/bookcase"
import BasicButton from "@/components/input/BasicButton"
import BasicText from "@/components/display/BasicText"

// const bookcases: CardDto[] = [
//   { name: "영어", progress: 14, count: 16 },
//   { name: "국어", progress: 24, count: 30 },
//   { name: "정보처리기사", progress: 0, count: 2 },
//   { name: "한국사", progress: 14, count: 16 },
//   { name: "2024 모의고사", progress: 3, count: 6 },
//   { name: "토익 기출 정리", progress: 15, count: 17 },
// ]

export default function Home() {
  const router = useRouter()
  const { setTitle } = usePageHeader()
  const [bookcases, setBookcases] = useState<CardDto[]>([])
  useEffect(() => {
    setTitle("")
  }, [])

  useEffect(() => {
    const fetchBookcaseList = async () => {
      try {
        const data = await getBookcaseList()
        if (data) {
          setBookcases(data.bookcaseList)
        } else {
          console.error("책장 목록을 불러오지 못했습니다.")
        }
      } catch (error) {
        console.error("책장 목록 불러오기 실패:", error)
      }
    }

    fetchBookcaseList()
  }, [])

  return (
    <PageWrapper>
      <SubHeader
        title="내 책장"
        onClick={() => router.push("/bookcase/register")}
        icon={PlusSvg}
      />
      {bookcases.length > 0 ? (
        <CardGrid
          cardDtos={bookcases}
          handleOnClick={(bookcase, index) =>
            router.push(`/bookcase/${bookcase.bookcaseId}`)
          }
        />
      ) : (
        <>
          <BasicText text={"나만의 책장을 만들어 공부해보세요."} />
          <BasicButton
            text={"책장 만들기"}
            onPress={() => router.push("/bookcase/register")}
          />
        </>
      )}
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
