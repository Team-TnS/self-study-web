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
  visible?: boolean
  disabled?: boolean
}

export default function InputField({
  value,
  onChange,
  placeholder = "내용을 입력해주세요.",
  maxLength = 24,
  id = "textInput",
  visible = true,
  disabled = false,
}: InputFieldProps) {
  return (
    <InputWrapper visible={visible}>
      <StyledInput
        type="text"
        id={id}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        autoComplete="off"
      />
      <Counter>
        {value.length}/{maxLength}
      </Counter>
    </InputWrapper>
  )
}
