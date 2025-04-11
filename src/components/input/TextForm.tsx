import { useState, FormEvent } from "react"
import InputField from "./InputField"
import SubmitButton from "./SubmitButton"
import styles from "./TextForm.module.css"
import { useRouter } from "next/navigation"

interface TextFormProps {
  placeholder?: string
  maxLength?: number
  buttonText?: string
  onSubmit: (value: string) => void
}

export default function TextForm({
  placeholder = "내용을 입력해주세요.",
  maxLength = 24,
  buttonText = "책장 만들기",
  onSubmit,
}: TextFormProps) {
  const [text, setText] = useState<string>("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(text)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        value={text}
        onChange={(value) => setText(value)}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <SubmitButton text={buttonText} />
    </form>
  )
}
