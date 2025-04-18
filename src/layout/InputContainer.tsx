import styled from "styled-components"
import { ReactNode } from "react"

export default function InputContainer({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5 0 auto;
  justify-content: center;
  gap: 10px;
`
