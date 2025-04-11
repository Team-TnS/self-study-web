"use client"

import styled from "styled-components"
import React from "react"
import {
  ActionButton,
  SubHeaderTitle,
  SubHeaderWrapper,
} from "@/components/display/SubHeaderStyle"

interface HeaderWithActionProps {
  title: string
  onClick: () => void
  icon: React.ReactNode
}

export default function SubHeader({
  title,
  onClick,
  icon,
}: HeaderWithActionProps) {
  return (
    <SubHeaderWrapper>
      <SubHeaderTitle>{title}</SubHeaderTitle>
      <ActionButton onClick={onClick}>{icon}</ActionButton>
    </SubHeaderWrapper>
  )
}
