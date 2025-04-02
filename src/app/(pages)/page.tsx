"use client"

import styles from "./page.module.css"
import BasicButton from "@/components/input/BasicButton"
import BasicText from "@/components/display/BasicText"
import { useRouter } from "next/navigation"
import BookcasePage from "@/app/(pages)/bookcase/[Id]/page"
export default function Home() {
  const router = useRouter()

  const bookcases = [
    { name: "수학", progress: 12, count: 25 },
    { name: "토익 기출 정리", progress: 2, count: 4 },
    { name: "2024 모의고사", progress: 6, count: 7 },
  ]
  return (
    <div className={styles.page}>
      {!bookcases ? (
        <>
          <BasicText text={"나만의 책장을 만들어 공부해보세요."} />
          <BasicButton
            text={"책장 만들기"}
            onPress={() => router.push("/bookcase/register")}
          />
        </>
      ) : (
        <div>
          {bookcases.map((bookcase) => (
            <div
              key={bookcase.name}
              className={styles.bookcaseItem}
              onClick={() => router.push("/bookcase/1")}
            >
              <BasicText text={bookcase.name} />
              <BasicText
                text={`진행도: ${bookcase.progress}/${bookcase.count}`}
              />
            </div>
          ))}
          <BasicButton
            text={"책장 만들기"}
            onPress={() => router.push("/bookcase/register")}
          />
        </div>
      )}
    </div>
  )
}
