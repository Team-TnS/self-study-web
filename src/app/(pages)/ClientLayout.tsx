// 그냥 layout.tsx 는 SSR의 server인데 usePageHeader는 클라 훅이라서 따로 분리 해야함
"use client"

import Header from "@/layout/Header"
import { usePageHeader } from "@/layout/PageHeaderProvider"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { title } = usePageHeader()

  return (
    <div>
      <Header title={title} showBackButton />
      <main>{children}</main>
    </div>
  )
}
