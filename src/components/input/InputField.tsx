import { ChangeEvent } from "react"
import {
  Counter,
  InputWrapper,
  StyledInput,
} from "@/components/input/InputFieldStyle"

interface InputFieldProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  maxLength?: number
  id?: string
}

export default function InputField({
  value,
  onChange,
  placeholder = "내용을 입력해주세요.",
  maxLength = 24,
  id = "textInput",
}: InputFieldProps) {
  return (
    <InputWrapper>
      <StyledInput
        type="text"
        id={id}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <Counter>
        {value.length}/{maxLength}
      </Counter>
    </InputWrapper>
  )
}
