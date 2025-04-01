import styles from "./BasicButton.module.css"

interface BasicButtonProps {
  text: string
  onPress: () => void
}

export default function BasicButton({ text, onPress }: BasicButtonProps) {
  return (
    <button className={styles.button} onClick={onPress}>
      {text}
    </button>
  )
}
