"use client"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import {
  PostCreateBookRequestType,
  postCreateBook,
} from "@/api/book/postCreateBook"

export default function useBookRegister(onSuccessCallback?: () => void) {
  const [requestState, setRequestState] = useState<PostCreateBookRequestType>({
    name: "",
    color: "",
    bookcaseId: "",
  })

  const { mutate } = useMutation({
    mutationFn: () => postCreateBook(requestState),
    onSuccess: () => {
      onSuccessCallback?.()
    },
  })

  const handleNameChange = (value: string) => {
    setRequestState((prev) => ({
      ...prev,
      name: value,
    }))
  }

  const handleColorSelect = (value: string) => {
    setRequestState((prev) => ({
      ...prev,
      color: value,
    }))
  }

  return {
    requestState,
    handleNameChange,
    handleColorSelect,
    handleSubmit: mutate,
  }
}
