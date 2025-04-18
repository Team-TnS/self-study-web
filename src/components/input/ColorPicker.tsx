import {
  ColorCircle,
  ColorPickerWrapper,
} from "@/components/input/ColorPickerStyle"

interface Props {
  value: string
  onSelect: (value: string) => void
}

export default function ColorPicker({ onSelect, value }: Props) {
  const colors = [
    "#E86C6C",
    "#E8A56C",
    "#E8C76C",
    "#6CE886",
    "#6CC7E8",
    "#6C86E8",
    "#C76CE8",
    "#8A3F3F",
    "#8A5E3F",
    "#8A7A3F",
    "#3F8A47",
    "#3F7A8A",
    "#3F478A",
    "#7A3F8A",
  ]
  return (
    <ColorPickerWrapper>
      {colors.map((color) => (
        <ColorCircle
          key={color}
          color={color}
          selected={color === value}
          onClick={() => onSelect(color)}
        />
      ))}
    </ColorPickerWrapper>
  )
}
