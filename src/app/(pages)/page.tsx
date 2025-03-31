"use client"

import styles from "./page.module.css"
import BasicButton from "@/components/input/BasicButton"
import BasicText from "@/components/display/BasicText"
import { useRouter } from "next/navigation"
export default function Home() {
  const router = useRouter()

  const selves = [
    { name: "수학", progress: 12, count: 25 },
    { name: "토익 기출 정리", progress: 2, count: 4 },
    { name: "2024 모의 고사", progress: 6, count: 7 },
  ]
  return (
    <div className={styles.page}>
      {!selves ? (
        <>
          <BasicText text={"나만의 책장을 만들어 공부해보세요."} />
          <BasicButton
            text={"책장 만들기"}
            onPress={() => router.push("/shelf/register")}
          />
        </>
      ) : (
        <div>
          {selves.map((shelf) => (
            <div key={shelf.name} className={styles.shelfItem}>
              <BasicText text={shelf.name} />
              <BasicText text={`진행도: ${shelf.progress}/${shelf.count}`} />
            </div>
          ))}
          <BasicButton
            text={"책장 만들기"}
            onPress={() => router.push("/shelf/register")}
          />
        </div>
      )}
    </div>
  )
}
