import styled from "styled-components"

export default function VerticalContainer({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 25px;
`
