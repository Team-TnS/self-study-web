import { axiosInstance } from "@/api/axiosInstance"

export interface GetBookcaseDetailResponse {
  totalElement: number
  page: number
  bookcaseName: string
  bookList: {
    bookcaseId: number
    bookId: string
    bookName: string
    bookColor: string
  }[]
}

export const getBookcaseDetail = async ({
  page,
  size,
  id,
}: {
  page: number
  size: number
  id: string
}): Promise<GetBookcaseDetailResponse> => {
  const { data } = await axiosInstance.get<GetBookcaseDetailResponse>(
    `/sels/api/u/bookcase/${id}`,
  )
  return data
}
