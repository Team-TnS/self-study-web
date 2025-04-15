import { axiosInstance } from "@/api/axiosInstance"

export interface GetBookcaseListResponse {
  totalElement: number
  page: number
  bookcaseList: {
    bookcaseId: string
    bookcaseName: string
  }[]
}

export const getBookcaseList = async ({
  page,
  size,
}: {
  page: number
  size: number
}): Promise<GetBookcaseListResponse> => {
  const { data } = await axiosInstance.get<GetBookcaseListResponse>(
    "/sels/api/u/bookcase",
  )
  return data
}
