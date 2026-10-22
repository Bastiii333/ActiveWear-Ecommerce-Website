import { Icon } from '../../LandingPage/shared'
import StarRating from '../StarRating'
import { formatPrice } from '../format'
import type { KitItem } from '../types'

interface KitCardProps {
  item: KitItem
  /** Fires with the item id; the container turns it into a cart write. */
  onAdd?: (itemId: string) => void
}

export function KitCard({ item, onAdd }: KitCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-outline-variant/60 bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-lg">
      <a href={`#/product/${item.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-surface-container-low">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.badge && (
          <span className="absolute left-3 top-3 rounded-sm bg-surface-container-lowest/90 px-2 py-1 font-label-technical text-label-technical uppercase tracking-widest text-on-surface backdrop-blur">
            {item.badge}
          </span>
        )}
      </a>

      <div className="flex flex-1 flex-col gap-1 p-space-sm">
        <span className="font-label-technical text-label-technical uppercase tracking-widest text-outline">
          {item.category}
        </span>

        <h3 className="font-label-lg text-label-lg uppercase leading-tight text-on-surface">
          <a href={`#/product/${item.slug}`} className="transition-opacity hover:opacity-80">
            {item.name}
          </a>
        </h3>

        <div className="flex items-center gap-space-xs">
          <StarRating value={item.rating} size="text-[14px]" />
          <span className="font-label-technical text-label-technical text-on-surface-variant">({item.reviewCount})</span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-space-sm pt-space-xs">
          <span className="flex items-baseline gap-2">
            <span className="font-headline-sm text-headline-sm text-on-surface">{formatPrice(item.price, true)}</span>
            {item.compareAtPrice !== undefined && (
              <span className="font-body-sm text-body-sm text-on-surface-variant line-through">
                {formatPrice(item.compareAtPrice, true)}
              </span>
            )}
          </span>

          <button
            type="button"
            aria-label={`Add ${item.name} to bag`}
            onClick={() => onAdd?.(item.id)}
            className="flex items-center gap-1 rounded-lg border border-outline-variant px-space-sm py-2 font-label-technical text-label-technical uppercase tracking-wider text-on-surface transition-colors hover:border-primary hover:bg-surface-container"
          >
            <Icon name="add" className="text-[16px]" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
