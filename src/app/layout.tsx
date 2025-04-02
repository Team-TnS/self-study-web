"use client"

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Providers from "./providers"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { getAuthToken } from "@/api/axiosInstance"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const token = getAuthToken()

    const isLoginPage = pathname === "/login"

    if (!token && !isLoginPage) {
      router.replace("/login")
    }
  }, [pathname])
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
