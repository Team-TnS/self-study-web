"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { CardDto } from "@/components/display/CardGrid"
import { getBookcaseDetail } from "@/api/bookcase/getBookcaseDetail"

export default function useBookcaseDetail(bookcaseId: string) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["bookcaseDetail"],
      queryFn: ({ pageParam = 0 }) =>
        getBookcaseDetail({ id: bookcaseId, page: pageParam, size: 20 }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => {
        const totalCount = lastPage.totalElement
        const loadedCount = pages.flatMap((p) => p.bookList).length
        return loadedCount < totalCount ? pages.length : undefined
      },
    })

  const firstPage = data?.pages[0]
  const name = firstPage?.bookcaseName

  const books: CardDto[] =
    data?.pages.flatMap((page) =>
      page.bookList.map((item) => ({
        name: item.bookName,
        progress: 0,
        count: 0,
        id: item.bookId,
      })),
    ) ?? []

  return {
    name,
    books,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }
}
