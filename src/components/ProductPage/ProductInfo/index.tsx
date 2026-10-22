import { Icon, StatusDot } from '../../LandingPage/shared'
import StarRating from '../StarRating'
import { discountPercent, formatPrice } from '../format'
import type { ProductSelection } from '../hooks/useProductSelection'
import type { ProductDetail } from '../types'
import { ColorPicker } from './ColorPicker'
import { QuantityStepper } from './QuantityStepper'
import { SizePicker } from './SizePicker'
import { SpecAccordion } from './SpecAccordion'

interface ProductInfoProps {
  product: ProductDetail
  selection: ProductSelection
  /** Scrolls to the reviews section. */
  reviewsHref?: string
}

const ASSURANCES = [
  { icon: 'local_shipping', label: 'Free express shipping over ₱100' },
  { icon: 'published_with_changes', label: '30-day field trial guarantee' },
  { icon: 'verified_user', label: 'Two-year seam warranty' },
]

export function ProductInfo({ product, selection, reviewsHref = '#athlete-reviews' }: ProductInfoProps) {
  const save = discountPercent(product.price, product.compareAtPrice)
  const total = product.price * selection.quantity

  return (
    <div className="lg:col-span-5">
      <div className="flex flex-col gap-space-md rounded-xl border border-outline-variant/60 bg-surface-container-lowest p-space-md shadow-sm md:p-space-lg">
        <div className="flex items-start justify-between gap-space-sm">
          <span className="font-label-technical text-label-technical uppercase tracking-widest text-tertiary-container">
            {product.collection}
          </span>
          <span className="flex shrink-0 items-center gap-1.5 font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
            <StatusDot className={product.inStock ? 'bg-tertiary-container' : 'bg-error'} />
            {product.inStock ? 'In stock' : 'Sold out'}
          </span>
        </div>

        <div className="space-y-space-xs">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg">
            {product.name}
          </h1>
          <a href={reviewsHref} className="flex w-fit items-center gap-space-xs transition-opacity hover:opacity-80">
            <StarRating value={product.rating} />
            <span className="font-label-lg text-label-lg text-on-surface">{product.rating.toFixed(1)}</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant underline underline-offset-2">
              {product.reviewCount} athlete reviews
            </span>
          </a>
        </div>

        <div className="flex flex-wrap items-baseline gap-space-sm">
          <span className="font-headline-md text-headline-md font-bold text-on-surface">
            {formatPrice(product.price, true)}
          </span>
          {product.compareAtPrice !== undefined && (
            <span className="font-body-md text-body-md text-on-surface-variant line-through">
              {formatPrice(product.compareAtPrice, true)}
            </span>
          )}
          {save !== undefined && (
            <span className="rounded-sm bg-tertiary-container px-2 py-0.5 font-label-technical text-label-technical uppercase tracking-wider text-on-tertiary">
              Save {save}%
            </span>
          )}
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant">{product.summary}</p>

        <ColorPicker colors={product.colors} selected={selection.colorId} onChange={selection.setColor} />

        <SizePicker
          sizes={product.sizes}
          selected={selection.size}
          selectedOption={selection.sizeOption}
          error={selection.sizeError}
          onChange={selection.setSize}
        />

        <div className="flex flex-wrap items-center justify-between gap-space-sm">
          <QuantityStepper value={selection.quantity} onChange={selection.setQuantity} />
          <span className="flex items-center gap-1 font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
            <Icon name="schedule" className="text-[16px]" />
            {product.shipsIn}
          </span>
        </div>

        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <button
              type="button"
              onClick={selection.addToBag}
              className={`flex flex-1 items-center justify-center gap-space-xs rounded-lg py-4 font-label-lg text-label-lg uppercase tracking-wider shadow-lg transition-all active:scale-[0.99] ${
                selection.added ? 'bg-tertiary-container text-on-tertiary' : 'bg-primary text-on-primary hover:bg-primary-container'
              }`}
            >
              <Icon name={selection.added ? 'check_circle' : 'shopping_bag'} className="text-[20px]" />
              {selection.added ? 'Added to bag' : `Add to bag — ${formatPrice(total, true)}`}
            </button>
            <button
              type="button"
              aria-pressed={selection.liked}
              aria-label={selection.liked ? 'Remove from wishlist' : 'Save to wishlist'}
              onClick={selection.toggleLiked}
              className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant transition-colors hover:border-primary hover:text-on-surface"
            >
              <Icon
                name="favorite"
                filled={selection.liked}
                className={selection.liked ? 'text-tertiary-container' : ''}
              />
            </button>
          </div>

          <button
            type="button"
            onClick={selection.buyNow}
            className="rounded-lg border border-primary py-3.5 font-label-lg text-label-lg uppercase tracking-wider text-on-surface transition-colors hover:bg-surface-container"
          >
            Buy it now
          </button>
        </div>

        <ul className="flex flex-col gap-space-xs">
          {ASSURANCES.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant"
            >
              <Icon name={item.icon} className="text-[18px] text-tertiary-container" />
              {item.label}
            </li>
          ))}
        </ul>

        <SpecAccordion groups={product.specGroups} defaultOpenId={product.specGroups[0]?.id} />
      </div>
    </div>
  )
}
