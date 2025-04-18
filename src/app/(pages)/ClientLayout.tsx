// 그냥 layout.tsx 는 SSR의 server인데 usePageHeader는 클라 훅이라서 따로 분리 해야함
"use client"

import Header from "@/layout/Header"
import Footer from "@/layout/Footer"
import { usePageHeader } from "@/layout/PageHeaderProvider"
import { usePathname } from "next/navigation"
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const noBackButtonPages = ["/"]
  const { title } = usePageHeader()
  const pathname = usePathname()
  return (
    <div className="layout">
      <Header
        title={title}
        showBackButton={!noBackButtonPages.includes(pathname)}
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
