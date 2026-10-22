import { Container, Icon } from '../../LandingPage/shared'
import { discountPercent, formatPrice } from '../format'
import type { BundleOffer, KitItem } from '../types'
import { KitCard } from './KitCard'

interface TrainingKitProps {
  items: KitItem[]
  bundle?: BundleOffer
  onAddItem?: (itemId: string) => void
  onAddBundle?: (bundleId: string) => void
}

export function TrainingKit({ items, bundle, onAddItem, onAddBundle }: TrainingKitProps) {
  if (items.length === 0) return null

  const bundleSave = bundle ? discountPercent(bundle.bundlePrice, bundle.originalPrice) : undefined

  return (
    <section id="training-kit" className="w-full bg-surface-container-low py-margin-md">
      <Container className="flex flex-col gap-space-lg">
        <div className="flex flex-wrap items-end justify-between gap-space-sm">
          <div>
            <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant">
              Built to pair
            </span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg">
              Complete your training kit
            </h2>
          </div>
          <a
            href="#/shop"
            className="flex items-center gap-1 font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant transition-colors hover:text-on-surface"
          >
            Browse the full series
            <Icon name="arrow_forward" className="text-[16px]" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <KitCard key={item.id} item={item} onAdd={onAddItem} />
          ))}
        </div>

        {bundle && (
          <div className="flex flex-col gap-space-md rounded-xl bg-primary-container p-space-md text-on-primary md:flex-row md:items-center md:justify-between md:p-space-lg">
            <div className="flex items-start gap-space-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tertiary-container text-on-tertiary">
                <Icon name={bundle.icon} className="text-[20px]" />
              </span>
              <div>
                <h3 className="font-label-lg text-label-lg uppercase tracking-wider text-on-primary">
                  {bundle.title} · {bundle.itemCount} items
                </h3>
                <p className="font-body-sm text-body-sm text-on-primary-container">{bundle.description}</p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-space-md">
              <span className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-bold text-on-primary">
                  {formatPrice(bundle.bundlePrice, true)}
                </span>
                <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-primary-container">
                  <span className="line-through">{formatPrice(bundle.originalPrice, true)}</span>
                  {bundleSave !== undefined && ` · save ${bundleSave}%`}
                </span>
              </span>

              <button
                type="button"
                onClick={() => onAddBundle?.(bundle.id)}
                className="rounded-lg bg-surface-container-lowest px-space-md py-3 font-label-lg text-label-lg uppercase tracking-wider text-primary transition-colors hover:bg-surface-bright"
              >
                Add bundle
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
