"use client"

import React from "react"
import {
  Card,
  CardTitle,
  CardProgress,
  CardGridWrapper,
} from "@/components/display/CardGridStyle"

export interface CardDto {
  name: string
  progress: number
  count: number
}

interface CardGridProps {
  cardDtos: CardDto[]
  handleOnClick: (cardDto: CardDto, index: number) => void
}

export default function CardGrid({ cardDtos, handleOnClick }: CardGridProps) {
  return (
    <CardGridWrapper>
      {cardDtos.map((cardDto, index) => {
        const gradient = gradients[index % gradients.length] // index 기반 색상 적용

        return (
          <Card
            key={index}
            style={{ background: gradient }}
            onClick={() => handleOnClick(cardDto, index)}
          >
            <CardTitle>{cardDto.name}</CardTitle>
            <CardProgress>
              {cardDto.progress}/{cardDto.count}
            </CardProgress>
          </Card>
        )
      })}
    </CardGridWrapper>
  )
}

const gradients = [
  "linear-gradient(135deg, #d66d75, #e29587)",
  "linear-gradient(135deg, #8e2de2, #4a00e0)",
  "linear-gradient(135deg, #a8e063, #56ab2f)",
  "linear-gradient(135deg, #fdfbfb, #ebedee)",
  "linear-gradient(135deg, #f6d365, #fda085)",
  "linear-gradient(135deg, #f953c6, #b91d73)",
]
