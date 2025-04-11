import { axiosInstance } from "@/api/axiosInstance"
import { CardDto } from "@/components/display/CardGrid"

export interface PostBookcaseRequestType {
  name: string
}

export interface GetBookcaseResponseType {
  bookcaseList: CardDto[]
  page: number
  totalElement: number
}
export const postBookcase = async (params: PostBookcaseRequestType) => {
  const { data } = await axiosInstance.post("/sels/api/u/bookcase", params)

  return data
}

export const getBookcaseList = async (): Promise<GetBookcaseResponseType> => {
  const { data } = await axiosInstance.get("/sels/api/u/bookcase")

  return data
}
