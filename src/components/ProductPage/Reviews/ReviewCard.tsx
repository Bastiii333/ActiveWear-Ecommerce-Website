import { useState } from 'react'
import { Icon } from '../../LandingPage/shared'
import StarRating from '../StarRating'
import { FIT_LABELS } from '../data'
import { formatReviewDate } from '../format'
import type { Review } from '../types'

interface ReviewCardProps {
  review: Review
  /** Fires once per card; the container turns it into a helpful vote. */
  onHelpful?: (reviewId: string) => void
}

function AuthorAvatar({ review }: { review: Review }) {
  if (review.author.avatar) {
    return (
      <img
        data-element="review-author-avatar"
        src={review.author.avatar}
        alt=""
        className="h-10 w-10 rounded-full object-cover"
      />
    )
  }
  return (
    <span
      data-element="review-author-avatar"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high font-label-md text-label-md text-on-surface"
    >
      {review.author.initials}
    </span>
  )
}

export function ReviewCard({ review, onHelpful }: ReviewCardProps) {
  const [voted, setVoted] = useState(false)

  const vote = () => {
    if (voted) return
    setVoted(true)
    onHelpful?.(review.id)
  }

  return (
    <article
      data-component="ReviewCard"
      className="grid grid-cols-1 gap-space-md border-b border-outline-variant py-space-lg lg:grid-cols-[220px_minmax(0,1fr)]"
    >
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-sm">
          <AuthorAvatar review={review} />
          <div className="min-w-0">
            <p data-element="review-author-name" className="truncate font-label-lg text-label-lg text-on-surface">
              {review.author.name}
            </p>
            <p data-element="review-author-location" className="truncate font-body-sm text-body-sm text-on-surface-variant">
              {review.author.location}
            </p>
          </div>
        </div>

        {review.author.verified && (
          <span
            data-element="review-verified-badge"
            className="flex w-fit items-center gap-1 rounded-sm bg-tertiary-container/10 px-2 py-1 font-label-technical text-label-technical uppercase tracking-wider text-tertiary-container"
          >
            <Icon name="verified" filled className="text-[14px]" />
            Verified buyer
          </span>
        )}

        <dl
          data-element="review-meta"
          className="flex flex-col gap-0.5 font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant"
        >
          <div className="flex gap-1">
            <dt>Training:</dt>
            <dd className="text-on-surface">{review.author.activity}</dd>
          </div>
          <div className="flex gap-1">
            <dt>Size:</dt>
            <dd className="text-on-surface">{review.size}</dd>
          </div>
          <div className="flex gap-1">
            <dt>Colour:</dt>
            <dd className="text-on-surface">{review.color}</dd>
          </div>
          <div className="flex gap-1">
            <dt>Fit:</dt>
            <dd className="text-on-surface">{FIT_LABELS[review.fit]}</dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-col gap-space-sm">
        <div className="flex flex-wrap items-center justify-between gap-space-sm">
          <StarRating value={review.rating} />
          <time dateTime={review.createdAt} className="font-body-sm text-body-sm text-on-surface-variant">
            {formatReviewDate(review.createdAt)}
          </time>
        </div>

        <h3 data-element="review-title" className="font-headline-sm text-headline-sm text-on-surface">
          {review.title}
        </h3>
        <p data-element="review-body" className="font-body-md text-body-md text-on-surface-variant">
          {review.body}
        </p>

        {review.photos.length > 0 && (
          <div data-element="review-photo-list" className="flex gap-space-xs">
            {review.photos.map((photo) => (
              <button
                key={photo.id}
                data-element="review-photo"
                type="button"
                aria-label={photo.alt}
                className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-surface-container-low transition-opacity hover:opacity-80"
              >
                <img src={photo.url} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {review.response && (
          <div
            data-element="review-brand-response"
            className="rounded-lg border-l-4 border-tertiary-container bg-surface-container-low p-space-sm"
          >
            <p className="font-label-technical text-label-technical uppercase tracking-wider text-tertiary-container">
              {review.response.author} · {review.response.role}
            </p>
            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">{review.response.body}</p>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
          <button
            data-element="review-helpful-button"
            type="button"
            onClick={vote}
            disabled={voted}
            className={`flex items-center gap-1 rounded-lg border px-space-sm py-2 font-label-technical text-label-technical uppercase tracking-wider transition-colors ${
              voted
                ? 'border-tertiary-container text-tertiary-container'
                : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-on-surface'
            }`}
          >
            <Icon name="thumb_up" filled={voted} className="text-[16px]" />
            Helpful ({review.helpfulCount + (voted ? 1 : 0)})
          </button>

          {review.recommends && (
            <span className="flex items-center gap-1 font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
              <Icon name="check_circle" className="text-[16px] text-tertiary-container" />
              Recommends this product
            </span>
          )}

          {/* placeholder: posts to the moderation queue. */}
          <button
            data-element="review-report-button"
            type="button"
            className="ml-auto font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant underline underline-offset-2 transition-colors hover:text-on-surface"
          >
            Report
          </button>
        </div>
      </div>
    </article>
  )
}
