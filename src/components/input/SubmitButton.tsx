import styles from "./SubmitButton.module.css"

interface SubmitButtonProps {
  text: string
}

export default function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <button type="submit" className={styles.button}>
      {text}
    </button>
  )
}
