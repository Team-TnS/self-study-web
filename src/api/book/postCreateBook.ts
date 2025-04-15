import { axiosInstance } from "@/api/axiosInstance"

export interface PostCreateBookRequestType {
  name: string
  bookcaseId: string
}

export const postCreateBook = async (request: PostCreateBookRequestType) => {
  const { data } = await axiosInstance.post("/sels/api/u/book", request)
  return data
}
