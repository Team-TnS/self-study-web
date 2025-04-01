import styles from "./BasicText.module.css"

interface BasicTextProps {
  text: string
}

export default function BasicText({ text }: BasicTextProps) {
  return <div className={styles.wrapper}>{text}</div>
}
