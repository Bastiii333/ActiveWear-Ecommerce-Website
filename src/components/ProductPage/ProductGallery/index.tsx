import { useState } from 'react'
import { Icon } from '../../LandingPage/shared'
import { pad } from '../format'
import type { Highlight, ProductImage } from '../types'

interface ProductGalleryProps {
  images: ProductImage[]
  grade: string
  highlights: Highlight[]
  liked: boolean
  onToggleLiked: () => void
}

const arrowBtn =
  'flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest/85 text-on-surface shadow-sm backdrop-blur transition-colors hover:bg-surface-container-lowest'

export function ProductGallery({ images, grade, highlights, liked, onToggleLiked }: ProductGalleryProps) {
  const [index, setIndex] = useState(0)
  const total = images.length
  const active = images[index]

  const step = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total)

  return (
    <div className="lg:col-span-7">
      <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface-container-low sm:aspect-square">
        <img key={active.id} src={active.url} alt={active.alt} className="h-full w-full object-cover" />

        <span className="absolute left-4 top-4 rounded-full bg-tertiary-container px-3 py-1 font-label-technical text-label-technical font-bold uppercase tracking-widest text-on-tertiary">
          {grade}
        </span>

        <div className="absolute right-4 top-4 flex flex-col gap-space-xs">
          <button
            type="button"
            aria-pressed={liked}
            aria-label={liked ? 'Remove from wishlist' : 'Save to wishlist'}
            onClick={onToggleLiked}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-lowest/85 text-on-surface-variant shadow-sm backdrop-blur transition-colors hover:text-on-surface"
          >
            <Icon name="favorite" filled={liked} className={`text-[18px] ${liked ? 'text-tertiary-container' : ''}`} />
          </button>
          {/* placeholder: opens the zoom viewer once the media service is wired. */}
          <button
            type="button"
            aria-label="Expand image"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-lowest/85 text-on-surface-variant shadow-sm backdrop-blur transition-colors hover:text-on-surface"
          >
            <Icon name="zoom_out_map" className="text-[18px]" />
          </button>
        </div>

        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-space-sm rounded-lg bg-surface/90 px-space-sm py-space-xs backdrop-blur-md">
          {highlights.map((highlight) => (
            <span
              key={highlight.label}
              className="flex items-center gap-1 font-label-technical text-label-technical uppercase tracking-wider text-on-surface"
            >
              <Icon name={highlight.icon} className="text-[16px] text-tertiary-container" />
              {highlight.label}
            </span>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => step(-1)}
            className={`pointer-events-auto ${arrowBtn}`}
          >
            <Icon name="arrow_back" className="text-[20px]" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => step(1)}
            className={`pointer-events-auto ${arrowBtn}`}
          >
            <Icon name="arrow_forward" className="text-[20px]" />
          </button>
        </div>
      </div>

      <div className="mt-space-sm flex items-center justify-between gap-space-sm">
        <div className="flex gap-space-sm overflow-x-auto pb-1">
          {images.map((image, i) => (
            <button
              key={image.id}
              type="button"
              aria-label={image.alt}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-surface-container-low transition-all sm:h-24 sm:w-20 ${
                i === index ? 'ring-2 ring-primary ring-offset-2 ring-offset-surface' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img src={image.url} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>

        <span className="hidden shrink-0 items-center gap-1 font-label-technical text-label-technical text-on-surface-variant sm:flex">
          <span className="font-bold text-on-surface">{pad(index + 1)}</span> / {pad(total)}
        </span>
      </div>
    </div>
  )
}
