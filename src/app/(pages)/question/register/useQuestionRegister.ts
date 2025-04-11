"use client"

import { useEffect, useState } from "react"
import { usePageHeader } from "@/layout/PageHeaderProvider"

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

export default function useQuestionRegister() {
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

  return {
    requestState,
    setRequestState,
    QUESTION_TYPES,
    handleQuestionChange,
    handleChoiceChange,
    handleAddChoice,
    handleAnswerSelect,
  }
}
