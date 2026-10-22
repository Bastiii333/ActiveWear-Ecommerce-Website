import { REVIEW_FILTERS, REVIEW_SORTS } from '../data'
import type { ReviewFilterKey, ReviewSortKey } from '../types'

interface ReviewToolbarProps {
  filter: ReviewFilterKey
  sort: ReviewSortKey
  matchedCount: number
  onFilterChange: (filter: ReviewFilterKey) => void
  onSortChange: (sort: ReviewSortKey) => void
}

export function ReviewToolbar({ filter, sort, matchedCount, onFilterChange, onSortChange }: ReviewToolbarProps) {
  return (
    <div className="flex flex-col gap-space-sm border-b border-outline-variant pb-space-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="flex gap-space-xs overflow-x-auto pb-1" role="tablist" aria-label="Filter reviews">
        {REVIEW_FILTERS.map((option) => (
          <button
            key={option.key}
            role="tab"
            aria-selected={filter === option.key}
            onClick={() => onFilterChange(option.key)}
            className={`shrink-0 rounded-full px-space-sm py-2 font-label-technical text-label-technical uppercase tracking-wider transition-colors ${
              filter === option.key
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="flex shrink-0 items-center gap-space-sm">
        <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
          {matchedCount} shown
        </span>
        <label className="flex items-center gap-space-xs">
          <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
            Sort
          </span>
          <select
            value={sort}
            onChange={(event) => onSortChange(event.target.value as ReviewSortKey)}
            className="rounded-lg border border-outline-variant bg-surface-container-lowest px-space-sm py-2 font-label-md text-label-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {REVIEW_SORTS.map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}
