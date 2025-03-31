"use client"

import { useRouter } from "next/navigation"
import styled from "styled-components"

interface HeaderProps {
  title: string
  showBackButton?: boolean
}

export default function Header({ title, showBackButton = false }: HeaderProps) {
  const router = useRouter()

  const leftIcons = []

  if (showBackButton) {
    leftIcons.push(
      <IconButton key="back" onClick={() => router.back()}>
        {BackButtonSvg}
      </IconButton>,
    )
  }

  return (
    <Nav>
      <HeaderWrapper>
        <LeftIconsWrapper>{leftIcons}</LeftIconsWrapper>
        <Title>{title}</Title>
      </HeaderWrapper>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  position: relative;
  height: 48px;
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`

const LeftIconsWrapper = styled.div`
  position: absolute;
  left: 21px;
  display: flex;
  gap: 8px;
  align-items: center;
`

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const Title = styled.span`
  font-weight: bold;
  font-size: 20px;
`

const BackButtonSvg = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 24L12 16L20 8"
      stroke="#1E1E1E"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
