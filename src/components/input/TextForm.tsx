import { useState, FormEvent } from "react"
import InputField from "./InputField"
import SubmitButton from "./SubmitButton"
import styles from "./TextForm.module.css"

interface TextFormProps {
  placeholder?: string
  maxLength?: number
  buttonText?: string
}

export default function TextForm({
  placeholder = "내용을 입력해주세요.",
  maxLength = 24,
  buttonText = "책장 만들기",
}: TextFormProps) {
  const [text, setText] = useState<string>("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("입력된 텍스트:", text)
    setText("")
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
