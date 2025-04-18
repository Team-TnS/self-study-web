"use client"
import Image from "next/image"
import React from "react"
import {
  ActionButton,
  SubHeaderTitle,
  SubHeaderWrapper,
} from "@/components/display/TitleHeaderStyle"

interface HeaderWithActionProps {
  title?: string
  onClick?: () => void
  icon?: string
}

export default function TitleHeader({
  title = "",
  onClick,
  icon,
}: HeaderWithActionProps) {
  return (
    <SubHeaderWrapper>
      <ActionButton></ActionButton>
      <SubHeaderTitle>{title}</SubHeaderTitle>
      <ActionButton onClick={onClick}>
        {icon ? <Image src={icon} alt="Icon" width={32} height={32} /> : <></>}
      </ActionButton>
    </SubHeaderWrapper>
  )
}
