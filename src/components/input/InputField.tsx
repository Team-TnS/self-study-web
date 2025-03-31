import { ChangeEvent } from "react"
import styles from "./InputField.module.css"

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
    <div className={styles.inputWrapper}>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        className={styles.input}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <span className={styles.counter}>
        {value.length}/{maxLength}
      </span>
    </div>
  )
}
