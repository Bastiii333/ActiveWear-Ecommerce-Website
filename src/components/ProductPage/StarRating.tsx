import { Icon } from '../LandingPage/shared'

interface StarRatingProps {
  value: number
  /** Tailwind text size for the glyphs, e.g. "text-[16px]". */
  size?: string
  className?: string
}

/** Five Material stars, half-steps rounded down to the nearest filled star. */
export default function StarRating({ value, size = 'text-[16px]', className = '' }: StarRatingProps) {
  return (
    <span className={`flex items-center gap-0.5 ${className}`} role="img" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = value >= star - 0.25
        const half = !filled && value >= star - 0.75
        return (
          <Icon
            key={star}
            name={half ? 'star_half' : 'star'}
            filled={filled || half}
            className={`${size} ${filled || half ? 'text-amber-400' : 'text-outline-variant'}`}
          />
        )
      })}
    </span>
  )
}
