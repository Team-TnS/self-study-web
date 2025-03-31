"use client"

import { useEffect, useState } from "react"
import { usePageHeader } from "@/layout/PageHeaderProvider"
import styled from "styled-components"

export const QUESTION_TYPES = [
  { value: "CHOICE", name: "객관식" },
  { value: "SHORT", name: "단답식" },
] as const

export type QuestionType = (typeof QUESTION_TYPES)[number]["value"]

interface RequestStateType {
  question: string
  questionType: QuestionType
  answers: string[]
  answerIndex: number | null
}

export default function QuestionRegisterPage() {
  const { setTitle } = usePageHeader()

  const [requestState, setRequestState] = useState<RequestStateType>({
    question: "",
    questionType: QUESTION_TYPES[0].value,
    answers: ["", ""],
    answerIndex: null,
  })

  useEffect(() => {
    setTitle("문제 등록하기")
  }, [])

  const handleQuestionChange = (value: string) => {
    setRequestState((prev) => ({
      ...prev,
      question: value,
    }))
  }

  const handleChoiceChange = (index: number, value: string) => {
    const newAnswers = [...requestState.answers]
    newAnswers[index] = value
    setRequestState((prev) => ({
      ...prev,
      answers: newAnswers,
    }))
  }

  const handleAddChoice = () => {
    setRequestState((prev) => ({
      ...prev,
      answers: [...prev.answers, ""],
    }))
  }

  const handleAnswerSelect = (index: number) => {
    setRequestState((prev) => ({
      ...prev,
      answerIndex: index,
    }))
  }

  return (
    <Container>
      <Label>문제</Label>
      <QuestionInput
        placeholder="문제를 입력해 주세요."
        value={requestState.question}
        onChange={(e) => handleQuestionChange(e.target.value)}
      />
      <CharCount>{requestState.question.length}/12</CharCount>

      <Label>문제 유형</Label>
      <RadioGroup>
        {QUESTION_TYPES.map((type) => (
          <RadioLabel key={type.value}>
            <input
              type="radio"
              name="questionType"
              value={type.value}
              checked={requestState.questionType === type.value}
              onChange={() =>
                setRequestState((prev) => ({
                  ...prev,
                  questionType: type.value,
                }))
              }
            />
            {type.name}
          </RadioLabel>
        ))}
      </RadioGroup>

      <Label>보기</Label>
      {requestState.answers.map((choice, index) => (
        <ChoiceRow key={index}>
          <span>{index + 1}</span>
          <ChoiceInput
            placeholder="보기를 작성해 주세요."
            value={choice}
            onChange={(e) => handleChoiceChange(index, e.target.value)}
          />
          <input
            type="radio"
            name="answer"
            checked={requestState.answerIndex === index}
            onChange={() => handleAnswerSelect(index)}
          />
        </ChoiceRow>
      ))}

      <AddButton onClick={handleAddChoice}>＋</AddButton>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
`

const Label = styled.div`
  margin-top: 24px;
  font-weight: 600;
`

const QuestionInput = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 8px;
  padding: 12px;
  border: 1px solid #bbb;
  border-radius: 8px;
  resize: none;
  font-size: 16px;
`

const CharCount = styled.div`
  text-align: right;
  margin-top: 4px;
  font-size: 14px;
  color: #333;
`

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`

const ChoiceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;

  & > span {
    width: 20px;
  }

  & > input[type="radio"] {
    margin-left: auto;
  }
`

const ChoiceInput = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  border-bottom: 1px solid #aaa;
  font-size: 16px;
`

const AddButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background-color: #2979ff;
  color: white;
  border-radius: 50%;
  font-size: 28px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`

const RadioLabel = styled.label`
  color: #000;
  display: flex;
  align-items: center;
  gap: 4px;
`
