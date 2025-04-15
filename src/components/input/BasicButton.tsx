import { Button } from "@/components/input/BasicButtonStyle"

interface BasicButtonProps {
  text: string
  onPress: () => void
  variant?: "basic" | "primary"
}

export default function BasicButton({
  text,
  onPress,
  variant,
}: BasicButtonProps) {
  return (
    <Button onClick={onPress} variant={variant}>
      {text}
    </Button>
  )
}
