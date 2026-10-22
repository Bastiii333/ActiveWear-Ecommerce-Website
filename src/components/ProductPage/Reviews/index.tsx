import { Container, Icon } from '../../LandingPage/shared'
import { useReviewFilters } from '../hooks/useReviewFilters'
import type { Review, ReviewFilterKey, ReviewSummary } from '../types'
import { ReviewCard } from './ReviewCard'
import { ReviewSummaryPanel } from './ReviewSummaryPanel'
import { ReviewToolbar } from './ReviewToolbar'

interface ReviewsProps {
  reviews: Review[]
  summary: ReviewSummary
  isLoading?: boolean
  onHelpful?: (reviewId: string) => void
  onWriteReview?: () => void
}

/** Star filter keys are the stringified rating, so the histogram can set them. */
function starsFilterKey(stars: number): ReviewFilterKey {
  return String(stars) as ReviewFilterKey
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="flex flex-col items-center gap-space-sm py-margin-md text-center">
      <Icon name="rate_review" className="text-[32px] text-on-surface-variant/40" />
      <p className="font-body-md text-body-md text-on-surface-variant">No reviews match this filter yet.</p>
      <button
        type="button"
        onClick={onClear}
        className="font-label-technical text-label-technical uppercase tracking-wider text-tertiary-container underline underline-offset-2"
      >
        Show all reviews
      </button>
    </div>
  )
}

function LoadingRows() {
  return (
    <div className="flex flex-col gap-space-lg py-space-lg" aria-busy="true" aria-live="polite">
      {[0, 1, 2].map((row) => (
        <div key={row} className="h-32 animate-pulse rounded-lg bg-surface-container-low" />
      ))}
    </div>
  )
}

export function Reviews({ reviews, summary, isLoading = false, onHelpful, onWriteReview }: ReviewsProps) {
  const controller = useReviewFilters(reviews)
  const activeStars = /^[1-5]$/.test(controller.filter) ? Number(controller.filter) : undefined

  const toggleStars = (stars: number) =>
    controller.setFilter(activeStars === stars ? 'all' : starsFilterKey(stars))

  return (
    <section id="athlete-reviews" className="w-full bg-surface py-margin-md">
      <Container className="flex flex-col gap-space-lg">
        <div className="flex flex-wrap items-end justify-between gap-space-md">
          <div>
            <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant">
              Field tested
            </span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg">
              Verified athlete reviews
            </h2>
          </div>
          <p className="max-w-sm font-body-sm text-body-sm text-on-surface-variant">
            Every review below comes from a confirmed order. Ratings are collected 30 days after delivery, once the
            kit has seen real training volume.
          </p>
        </div>

        <ReviewSummaryPanel
          summary={summary}
          activeStars={activeStars}
          onSelectStars={toggleStars}
          onWriteReview={onWriteReview}
        />

        <div className="flex flex-col">
          <ReviewToolbar
            filter={controller.filter}
            sort={controller.sort}
            matchedCount={controller.matchedCount}
            onFilterChange={controller.setFilter}
            onSortChange={controller.setSort}
          />

          {isLoading ? (
            <LoadingRows />
          ) : controller.visible.length === 0 ? (
            <EmptyState onClear={() => controller.setFilter('all')} />
          ) : (
            controller.visible.map((review) => (
              <ReviewCard key={review.id} review={review} onHelpful={onHelpful} />
            ))
          )}

          {!isLoading && controller.hasMore && (
            <button
              type="button"
              onClick={controller.loadMore}
              className="mx-auto mt-space-lg flex items-center gap-space-xs rounded-lg border border-primary px-space-lg py-3 font-label-lg text-label-lg uppercase tracking-wider text-on-surface transition-colors hover:bg-surface-container"
            >
              Load more reviews
              <Icon name="expand_more" className="text-[18px]" />
            </button>
          )}
        </div>
      </Container>
    </section>
  )
}
