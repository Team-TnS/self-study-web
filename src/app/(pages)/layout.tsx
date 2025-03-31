import React from "react"
import ClientLayout from "@/app/(pages)/ClientLayout"
import { PageHeaderProvider } from "@/layout/PageHeaderProvider"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageHeaderProvider>
      <ClientLayout>{children}</ClientLayout>
    </PageHeaderProvider>
  )
}
