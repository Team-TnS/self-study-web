"use client"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import {
  PostCreateBookcaseRequestType,
  postCreateBookcase,
} from "@/api/bookcase/postCreateBookcase"

export default function useBookcaseRegister(onSuccessCallback?: () => void) {
  const [requestState, setRequestState] =
    useState<PostCreateBookcaseRequestType>({ name: "", color: "" })

  const { mutate } = useMutation({
    mutationFn: () => postCreateBookcase(requestState),
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
