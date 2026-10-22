import { Icon } from '../../LandingPage/shared'
import StarRating from '../StarRating'
import type { ReviewSummary } from '../types'

interface ReviewSummaryPanelProps {
  summary: ReviewSummary
  /** Highlights the bar matching the active star filter. */
  activeStars?: number
  onSelectStars: (stars: number) => void
  onWriteReview?: () => void
}

export function ReviewSummaryPanel({
  summary,
  activeStars,
  onSelectStars,
  onWriteReview,
}: ReviewSummaryPanelProps) {
  return (
    <div className="grid grid-cols-1 gap-space-lg rounded-xl border border-outline-variant/60 bg-surface-container-lowest p-space-md md:p-space-lg lg:grid-cols-12">
      <div className="flex flex-col items-start gap-space-xs lg:col-span-4 lg:border-r lg:border-outline-variant/60 lg:pr-space-lg">
        <span className="flex items-baseline gap-1">
          <span className="font-display-hero-mobile text-display-hero-mobile text-on-surface">
            {summary.average.toFixed(1)}
          </span>
          <span className="font-body-md text-body-md text-on-surface-variant">/ 5</span>
        </span>

        <StarRating value={summary.average} size="text-[20px]" />

        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Based on {summary.verifiedTotal} verified athlete reviews
        </p>

        <span className="rounded-sm bg-tertiary-container/10 px-2 py-1 font-label-technical text-label-technical uppercase tracking-wider text-tertiary-container">
          {summary.recommendPercent}% would recommend
        </span>

        {/* placeholder: opens the review composer once submissions are wired. */}
        <button
          type="button"
          onClick={onWriteReview}
          className="mt-space-xs w-full rounded-lg bg-primary px-space-md py-3 font-label-lg text-label-lg uppercase tracking-wider text-on-primary transition-colors hover:bg-primary-container"
        >
          Write a review
        </button>
      </div>

      <div className="flex flex-col gap-space-xs lg:col-span-8">
        <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant">
          Rating breakdown
        </span>

        {summary.bars.map((bar) => {
          const percent = summary.total === 0 ? 0 : Math.round((bar.count / summary.total) * 100)
          const isActive = activeStars === bar.stars
          return (
            <button
              key={bar.stars}
              type="button"
              aria-pressed={isActive}
              aria-label={`Show ${bar.stars} star reviews (${bar.count})`}
              onClick={() => onSelectStars(bar.stars)}
              className="group flex items-center gap-space-sm"
            >
              <span className="flex w-8 shrink-0 items-center gap-0.5 font-label-technical text-label-technical text-on-surface-variant">
                {bar.stars}
                <Icon name="star" filled className="text-[12px] text-amber-400" />
              </span>
              <span className="h-2 flex-1 overflow-hidden rounded-full bg-tertiary-container/12">
                <span
                  style={{ width: `${percent}%` }}
                  className={`block h-full rounded-full transition-colors ${
                    isActive ? 'bg-primary' : 'bg-tertiary-container group-hover:bg-tertiary'
                  }`}
                />
              </span>
              <span className="w-8 shrink-0 text-right font-label-technical text-label-technical text-on-surface-variant">
                {bar.count}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
