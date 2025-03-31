"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface PageHeaderContextProps {
  title: string
  setTitle: (title: string) => void
}

const PageHeaderContext = createContext<PageHeaderContextProps | undefined>(
  undefined,
)

export const PageHeaderProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("")

  return (
    <PageHeaderContext.Provider value={{ title, setTitle }}>
      {children}
    </PageHeaderContext.Provider>
  )
}

export const usePageHeader = () => {
  const context = useContext(PageHeaderContext)
  if (!context)
    throw new Error("usePageHeader must be used within PageHeaderProvider")
  return context
}
