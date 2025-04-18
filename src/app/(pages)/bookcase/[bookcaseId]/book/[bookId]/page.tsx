"use client"

import styles from "./page.module.css"
import { useEffect, use } from "react"
import BasicButton from "@/components/input/BasicButton"
import BasicText from "@/components/display/BasicText"
import { usePageHeader } from "@/layout/PageHeaderProvider"
import { useRouter } from "next/navigation"

export default function BookPage({
  params,
}: {
  params: Promise<{ bookcaseId: string; bookId: string }>
}) {
  const router = useRouter()
  const { bookcaseId, bookId } = use(params)
  const { setTitle } = usePageHeader()

  useEffect(() => {
    setTitle(bookcaseId)
  }, [])

  const questions = [
    { name: "1번 문제", isComplete: true },
    { name: "2번 문제", isComplete: true },
    { name: "3번 문제", isComplete: false },
  ]
  return (
    <div className={styles.page}>
      {questions.length === 0 ? (
        <>
          <BasicText text={"등록된 문제가 없습니다."} />
          <BasicButton
            text={"문제 등록하기"}
            onPress={() =>
              router.push(
                `/bookcase/${bookcaseId}/book/${bookId}/question/register`,
              )
            }
            variant={"basic"}
          />
        </>
      ) : (
        <div>
          {bookId}
          {questions.map((question) => (
            <div key={question.name} className={styles.questionItem}>
              <BasicText text={question.name} />
              <BasicText text={question.isComplete.toString()} />
            </div>
          ))}
          <BasicButton
            text={"문제 등록하기"}
            onPress={() =>
              router.push(
                `/bookcase/${bookcaseId}/book/${bookId}/question/register`,
              )
            }
            variant={"basic"}
          />
        </div>
      )}
    </div>
  )
}
