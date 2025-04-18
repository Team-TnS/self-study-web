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
  id: string
  color: string
}

interface CardGridProps {
  cardDtos: CardDto[]
  handleOnClick: (cardDto: CardDto, index: string) => void
}

export default function CardGrid({ cardDtos, handleOnClick }: CardGridProps) {
  return (
    <CardGridWrapper>
      {cardDtos.map((cardDto, index) => {
        return (
          <Card
            key={index}
            color={cardDto.color}
            onClick={() => handleOnClick(cardDto, cardDto.id)}
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
