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

  return {
    requestState,
    handleNameChange,
    handleSubmit: mutate,
  }
}
