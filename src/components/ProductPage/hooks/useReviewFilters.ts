import { useMemo, useState } from 'react'
import { REVIEWS_PER_PAGE } from '../data'
import type { Review, ReviewFilterKey, ReviewSortKey } from '../types'

export interface ReviewController {
  filter: ReviewFilterKey
  sort: ReviewSortKey
  /** The slice currently rendered. */
  visible: Review[]
  /** Everything matching the filter, before the "load more" cut. */
  matchedCount: number
  hasMore: boolean
  setFilter: (filter: ReviewFilterKey) => void
  setSort: (sort: ReviewSortKey) => void
  loadMore: () => void
}

function matchesFilter(review: Review, filter: ReviewFilterKey): boolean {
  switch (filter) {
    case 'all':
      return true
    case 'with-photos':
      return review.photos.length > 0
    case 'running':
    case 'training':
    case 'trail-hiking':
      return review.discipline === filter
    default:
      return review.rating === Number(filter)
  }
}

const SORTERS: Record<ReviewSortKey, (a: Review, b: Review) => number> = {
  helpful: (a, b) => b.helpfulCount - a.helpfulCount,
  recent: (a, b) => b.createdAt.localeCompare(a.createdAt),
  'rating-desc': (a, b) => b.rating - a.rating,
  'rating-asc': (a, b) => a.rating - b.rating,
}

/**
 * Client-side filtering over the rows already in memory. When the reviews
 * endpoint lands, swap the `useMemo` for the query it returns — the filter and
 * sort keys are already the query-string values the API will take.
 */
export function useReviewFilters(reviews: Review[]): ReviewController {
  const [filter, setFilterState] = useState<ReviewFilterKey>('all')
  const [sort, setSortState] = useState<ReviewSortKey>('helpful')
  const [limit, setLimit] = useState(REVIEWS_PER_PAGE)

  const matched = useMemo(
    () => reviews.filter((review) => matchesFilter(review, filter)).sort(SORTERS[sort]),
    [reviews, filter, sort],
  )

  /** Any change to the query restarts paging from the first page. */
  const reset = () => setLimit(REVIEWS_PER_PAGE)

  return {
    filter,
    sort,
    visible: matched.slice(0, limit),
    matchedCount: matched.length,
    hasMore: matched.length > limit,
    setFilter: (next) => {
      setFilterState(next)
      reset()
    },
    setSort: (next) => {
      setSortState(next)
      reset()
    },
    loadMore: () => setLimit((value) => value + REVIEWS_PER_PAGE),
  }
}
