"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { getBookcaseList } from "@/api/bookcase/getBookcaseList"
import { CardDto } from "@/components/display/CardGrid"

export default function useBookcaseList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["bookcaseList"],
      queryFn: ({ pageParam = 0 }) =>
        getBookcaseList({ page: pageParam, size: 20 }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => {
        const totalCount = lastPage.totalElement
        const loadedCount = pages.flatMap((p) => p.bookcaseList).length
        return loadedCount < totalCount ? pages.length : undefined
      },
    })

  const bookcases: CardDto[] =
    data?.pages.flatMap((page) =>
      page.bookcaseList.map((item) => ({
        name: item.bookcaseName,
        id: item.bookcaseId,
        progress: 0,
        count: 0,
        color: item.bookcaseColor,
      })),
    ) ?? []

  return {
    bookcases,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }
}
