import { Button } from "@/components/input/BottomButtonStyle"

interface BottomButtonProps {
  text: string
  onPress: () => void
}

export default function BottomButton({ text, onPress }: BottomButtonProps) {
  return <Button onClick={onPress}>{text}</Button>
}
