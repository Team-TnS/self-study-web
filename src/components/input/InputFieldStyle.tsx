import styled from "styled-components"

export const InputWrapper = styled.div<{ visible?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 0;
  font-size: 1rem;
  outline: none;
  width: 100%;
  height: 100%;

  &:focus {
    border-bottom: 1px solid #333;
  }
`

export const Counter = styled.span`
  position: absolute;
  right: 0;
  font-size: 0.9rem;
  color: #666;
  padding: 0.5rem 0;
`
