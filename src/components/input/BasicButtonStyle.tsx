import styled from "styled-components"

export const Button = styled.button<{ variant?: string }>`
  ${(props) =>
    props.variant == "basic" &&
    `
      background-color: #ffffff;
      color: #000000;
      border: 1px #000000 solid;
      &:hover {
        background-color: #e3e3e3;
      }
    `}
  ${(props) =>
    props.variant == "primary" &&
    `
      background-color: #007bff;
      color: #ffffff;
      border: none;
    `}
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  height: 56px;
`
