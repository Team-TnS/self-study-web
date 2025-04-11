import styled from "styled-components"

export const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13px;
`

export const Card = styled.div`
  border-radius: 9px;
  padding: 16px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;

  &:hover {
    transform: scale(1.03);
  }
`

export const CardTitle = styled.div`
  font-size: 18px;
`

export const CardProgress = styled.div`
  align-self: flex-end;
  font-size: 14px;
`
