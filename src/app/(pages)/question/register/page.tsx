"use client"

import styled from "styled-components"
import { PageWrapper } from "@/components/display/PageWrapper"
import ChoiceRow from "@/components/display/ChoiceRow"
import useQuestionRegister from "@/app/(pages)/question/register/useQuestionRegister"
import { DefaultLabel } from "@/components/display/LabelStyle"
import { DefaultAddButton } from "@/components/display/AddButtonStyle"
import React from "react"
import { Counter } from "@/components/input/InputFieldStyle"

export default function QuestionRegisterPage() {
  const {
    requestState,
    setRequestState,
    QUESTION_TYPES,
    handleQuestionChange,
    handleChoiceChange,
    handleAddChoice,
    handleAnswerSelect,
  } = useQuestionRegister()

  return (
    <PageWrapper>
      <DefaultLabel>문제</DefaultLabel>
      <QuestionInput
        placeholder="문제를 입력해 주세요."
        value={requestState.question}
        onChange={(e) => handleQuestionChange(e.target.value)}
      />
      <InlineCounter>{requestState.question.length}/12</InlineCounter>

      <DefaultLabel>문제 유형</DefaultLabel>
      <RadioGroup>
        {QUESTION_TYPES.map((type) => (
          <RadioLabel key={type.value}>
            <input
              type="radio"
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

      <DefaultLabel>보기</DefaultLabel>
      {requestState.answers.map((choice, index) => (
        <ChoiceRow
          key={index}
          index={index}
          value={choice}
          onChange={(value) => handleChoiceChange(index, value)}
          selected={requestState.answerIndex === index}
          onSelect={() => handleAnswerSelect(index)}
        />
      ))}

      <DefaultAddButton onClick={handleAddChoice}>＋</DefaultAddButton>
    </PageWrapper>
  )
}

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

const InlineCounter = styled(Counter)`
  position: static;
  display: block;
  width: 100%;
  text-align: right;
  margin-top: 4px;
`

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`

const RadioLabel = styled.label`
  color: #000;
  display: flex;
  align-items: center;
  gap: 4px;
`
