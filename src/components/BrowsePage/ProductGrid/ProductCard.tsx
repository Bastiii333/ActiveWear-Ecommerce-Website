import { useState } from 'react'
import { Icon } from '../../LandingPage/shared'
import { formatPrice } from '../format'
import type { Product, ProductLayout } from '../types'

export function ProductCard({ product, layout = 'grid' }: { product: Product; layout?: ProductLayout }) {
  const [liked, setLiked] = useState(false)
  const isList = layout === 'list'

  return (
    <article
      className={`group overflow-hidden rounded-lg border border-surface-container-high/60 bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-lg ${
        isList ? 'sm:flex' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden bg-surface-container-low ${
          isList ? 'aspect-[3/4] sm:aspect-square sm:w-52 sm:shrink-0' : 'aspect-[3/4]'
        }`}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Icon name="image" className="text-[32px] text-on-surface-variant/40" />
          </div>
        )}

        {product.featured && (
          <span className="absolute left-3 top-3 rounded-sm bg-tertiary-container px-2 py-1 font-label-technical text-label-technical uppercase tracking-widest text-on-tertiary">
            Featured Tag
          </span>
        )}

        <button
          type="button"
          aria-pressed={liked}
          aria-label={liked ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          onClick={() => setLiked((value) => !value)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-lowest/90 text-on-surface-variant shadow-sm backdrop-blur transition-colors hover:text-on-surface"
        >
          <Icon
            name="favorite"
            filled={liked}
            className={`text-[18px] ${liked ? 'text-tertiary-container' : ''}`}
          />
        </button>
      </div>

      <div className={`flex flex-col gap-1 p-space-sm ${isList ? 'sm:flex-1 sm:justify-center sm:p-space-md' : ''}`}>
        <span className="font-label-technical text-label-technical uppercase tracking-widest text-outline">
          {product.category.replace('-', ' ')}
        </span>

        <div className="flex items-start justify-between gap-space-sm">
          <h3 className="font-label-lg text-label-lg uppercase leading-tight text-on-surface">{product.name}</h3>
          <span className="flex shrink-0 items-center gap-0.5">
            <Icon name="star" filled className="text-[14px] text-amber-400" />
            <span className="font-label-technical text-label-technical text-on-surface">{product.rating.toFixed(1)}</span>
          </span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="font-headline-sm text-headline-sm text-on-surface">{formatPrice(product.price)}</span>
          {product.compareAtPrice !== undefined && (
            <span className="font-body-sm text-body-sm text-on-surface-variant line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-space-sm pt-0.5">
          <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
            {product.sizes.slice(0, 4).join(' / ')}
          </span>
          <span className="flex items-center gap-1">
            {product.colors.slice(0, 4).map((color) => (
              <span
                key={color.id}
                title={color.name}
                style={{ backgroundColor: color.hex }}
                className="h-3.5 w-3.5 rounded-full border border-outline-variant/70"
              />
            ))}
          </span>
        </div>
      </div>
    </article>
  )
}
