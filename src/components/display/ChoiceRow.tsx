"use client"

import InputField from "@/components/input/InputField"
import { ChoiceRowWrapper } from "@/components/display/ChoiceRowStyle"

interface ChoiceRowProps {
  index: number
  value: string
  onChange: (value: string) => void
  selected: boolean
  onSelect: () => void
}

export default function ChoiceRow({
  index,
  value,
  onChange,
  selected,
  onSelect,
}: ChoiceRowProps) {
  return (
    <ChoiceRowWrapper>
      <span>{index + 1}</span>
      <div style={{ flex: 1 }}>
        <InputField
          placeholder="보기를 작성해 주세요."
          value={value}
          onChange={onChange}
        />
      </div>
      <input
        type="radio"
        name="answer"
        checked={selected}
        onChange={onSelect}
      />
    </ChoiceRowWrapper>
  )
}
