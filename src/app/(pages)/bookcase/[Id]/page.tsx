"use client"

import styles from "./page.module.css"
import { useEffect, use } from "react"
import BasicButton from "@/components/input/BasicButton"
import BasicText from "@/components/display/BasicText"
import { usePageHeader } from "@/layout/PageHeaderProvider"
import { useRouter } from "next/navigation"

export default function BookcasePage({
  params,
}: {
  params: Promise<{ Id: string }>
}) {
  const router = useRouter()
  const { Id } = use(params)
  const { setTitle } = usePageHeader()

  useEffect(() => {
    setTitle(Id)
  }, [])

  const books = [
    { name: "1단원", progress: 12, count: 25 },
    { name: "2단원", progress: 2, count: 20 },
    { name: "3단원", progress: 6, count: 23 },
  ]
  return (
    <div className={styles.page}>
      {!books ? (
        <>
          <BasicText text={"공부할 수 있는 책이 없어요"} />
          <BasicButton
            text={"책 만들기"}
            onPress={() => router.push("/book/register")}
          />
          <BasicButton
            text={"책 가져오기"}
            onPress={() => console.log("책 가져오기 링크~")}
          />
        </>
      ) : (
        <div>
          {Id}
          {books.map((book) => (
            <div
              key={book.name}
              className={styles.bookItem}
              onClick={() => router.push("/book/1")}
            >
              <BasicText text={book.name} />
              <BasicText text={`진행도: ${book.progress}/${book.count}`} />
            </div>
          ))}
          <BasicButton
            text={"책 만들기"}
            onPress={() => router.push("/book/register")}
          />
        </div>
      )}
    </div>
  )
}
