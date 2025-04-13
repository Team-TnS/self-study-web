import { axiosInstance } from "@/api/axiosInstance"

export interface PostCreateBookcaseRequestType {
  name: string
}

export const postCreateBookcase = async (
  request: PostCreateBookcaseRequestType,
) => {
  const { data } = await axiosInstance.post("/sels/api/u/bookcase", request)
  return data
}
