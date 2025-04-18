import styled from "styled-components"

export const ColorPickerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`

export const ColorCircle = styled.div<{ color: string; selected: boolean }>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  cursor: pointer;
  border: ${(props) => (props.selected ? "3px solid #000" : "1px solid #ccc")};
`
