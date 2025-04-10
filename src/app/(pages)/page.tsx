"use client"

import styled from "styled-components"
import { useRouter } from "next/navigation"
import CardGrid, { CardDto } from "@/components/display/CardGrid"

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
      <Header>
        <Title>내 책장</Title>
        <AddButton onClick={() => router.push("/bookcase/register")}>
          {PlusSvg}
        </AddButton>
      </Header>
      <CardGrid
        cardDtos={bookcases}
        handleOnClick={(bookcase, index) =>
          router.push(`/bookcase/${index + 1}`)
        }
      />
    </PageWrapper>
  )
}

export const PageWrapper = styled.div`
  padding: 100px 25px;
  background: #fff;
  min-height: 100vh;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 61px;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`

export const AddButton = styled.button`
  font-size: 28px;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
`

const PlusSvg = (
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
