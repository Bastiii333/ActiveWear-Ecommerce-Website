import { Icon, Container } from '../shared'
import { useState } from 'react'
import { SPOTLIGHT_TABS, SPOTLIGHTS, SWATCHES, SIZES } from './data'
import type { Spotlight } from './types'

// ProductDetails
function ProductDetails({ product }: { product: Spotlight }) {
  const [swatch, setSwatch] = useState(0)
  const [size, setSize] = useState('S')
  const [added, setAdded] = useState(false)
  const [liked, setLiked] = useState(false)

  const save = Math.round((1 - product.price / product.oldPrice) * 100)

  const addToBag = () => {
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div data-component="ProductDetails" className="lg:col-span-6 space-y-space-md">
      <div>
        <div data-element="product-eyebrow" className="font-label-technical text-label-technical text-on-tertiary-container uppercase tracking-widest">
          AeroLab Series 04 • Men &amp; Women
        </div>
        <h3 id="featured-product-title" className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary uppercase mt-1">
          {product.title}
        </h3>
        <div data-element="product-price-block" className="flex flex-wrap items-center gap-space-sm mt-2">
          <span data-element="product-price" className="font-headline-md text-headline-md font-bold text-on-primary">₱{product.price.toFixed(2)}</span>
          <span data-element="product-old-price" className="font-body-sm text-body-sm text-on-primary-container line-through">₱{product.oldPrice.toFixed(2)}</span>
          <span data-element="product-save-badge" className="bg-tertiary-container text-on-tertiary text-label-technical font-label-technical px-2 py-0.5 rounded uppercase">
            Save {save}%
          </span>
        </div>
      </div>

      <p data-element="product-description" className="font-body-md text-body-md text-on-primary-container">{product.desc}</p>

      <SwatchPicker selected={swatch} onChange={setSwatch} />
      <SizePicker selected={size} onChange={setSize} />
      <PurchaseActions
        price={product.price}
        added={added}
        liked={liked}
        onAdd={addToBag}
        onToggleLike={() => setLiked((l) => !l)}
      />
    </div>
  )
}

// ProductGallery
interface ProductGalleryProps {
  product: Spotlight
  index: number
  total: number
  onStep: (dir: 1 | -1) => void
}

const pad = (n: number) => String(n).padStart(2, '0')

const arrowBtn =
  'w-10 h-10 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/30 text-on-primary flex items-center justify-center transition-colors'

function ProductGallery({ product, index, total, onStep }: ProductGalleryProps) {
  return (
    <div data-component="ProductGallery" className="lg:col-span-6 relative">
      <div data-element="gallery-viewport" className="relative w-full aspect-square bg-surface-container-lowest rounded-xl overflow-hidden p-space-md shadow-inner flex items-center justify-center">
        <img key={product.image + index} data-element="featured-product-image" className="w-full h-full object-contain" alt={product.title} src={product.image} />

        <div data-element="product-grade-badge" className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary px-3 py-1 rounded-full font-label-technical text-label-technical uppercase tracking-widest font-bold">
          {product.grade}
        </div>

        <div data-element="gallery-spec-bar" className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md py-space-xs px-space-sm rounded-lg flex justify-between items-center text-on-surface">
          {[product.specA, product.specB].map((spec) => (
            <span key={spec.label} data-element="gallery-spec" className="font-label-technical text-label-technical uppercase tracking-wider flex items-center gap-1">
              <Icon name={spec.icon} className="text-[16px] text-tertiary-container" /> {spec.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-space-md px-space-xs">
        <div className="flex items-center gap-space-xs">
          <button aria-label="Previous product" id="featured-gallery-prev" onClick={() => onStep(-1)} className={arrowBtn}>
            <Icon name="arrow_back" />
          </button>
          <button aria-label="Next product" id="featured-gallery-next" onClick={() => onStep(1)} className={arrowBtn}>
            <Icon name="arrow_forward" />
          </button>
        </div>
        <div data-element="gallery-counter" className="flex items-center gap-1.5 font-label-technical text-label-technical text-on-primary-container">
          <span className="text-on-primary font-bold">{pad(index + 1)}</span> / <span>{pad(total)} INNOVATIONS</span>
        </div>
      </div>
    </div>
  )
}

// PurchaseActions
interface PurchaseActionsProps {
  price: number
  added: boolean
  liked: boolean
  onAdd: () => void
  onToggleLike: () => void
}

function PurchaseActions({ price, added, liked, onAdd, onToggleLike }: PurchaseActionsProps) {
  return (
    <>
      <div data-component="PurchaseActions" className="pt-space-md flex flex-col sm:flex-row items-center gap-space-sm">
        <button
          id="featured-add-to-bag"
          onClick={onAdd}
          className={`w-full sm:flex-1 font-label-lg text-label-lg py-4 rounded-lg shadow-lg flex items-center justify-center gap-space-xs transition-all active:scale-[0.99] ${
            added ? 'bg-tertiary-container text-on-tertiary' : 'bg-surface-container-lowest text-primary hover:bg-surface-bright'
          }`}
        >
          <Icon name="shopping_bag" className="text-[20px]" />
          <span>{added ? 'Added to Bag!' : `Add to Bag — ₱${price.toFixed(2)}`}</span>
        </button>
        <button
          aria-label="Add to Wishlist"
          id="featured-wishlist-toggle"
          aria-pressed={liked}
          onClick={onToggleLike}
          className="w-full sm:w-auto p-4 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary flex items-center justify-center transition-colors"
        >
          <Icon name="favorite" className={liked ? 'text-on-tertiary-container' : ''} />
        </button>
      </div>

      <div data-element="purchase-perks" className="flex flex-wrap items-center gap-space-md pt-space-xs text-on-primary-container font-label-technical text-label-technical">
        <div className="flex items-center gap-1">
          <Icon name="local_shipping" className="text-[16px] text-on-tertiary-container" />
          <span>Free Express Shipping</span>
        </div>
        <div className="flex items-center gap-1">
          <Icon name="published_with_changes" className="text-[16px] text-on-tertiary-container" />
          <span>30-Day Field Trial Guarantee</span>
        </div>
      </div>
    </>
  )
}

// SizePicker
interface SizePickerProps {
  selected: string
  onChange: (size: string) => void
}

function SizePicker({ selected, onChange }: SizePickerProps) {
  return (
    <div data-component="SizePicker" className="space-y-space-xs pt-space-xs">
      <div className="flex justify-between items-center">
        <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-primary-container">
          Athlete Sizing Matrix
        </span>
        <button id="featured-size-guide-button" className="font-label-technical text-label-technical text-on-tertiary-container hover:underline uppercase tracking-wider">
          Size Guide &amp; Fit
        </button>
      </div>
      <div className="grid grid-cols-5 gap-space-xs">
        {SIZES.map((s) => (
          <button
            key={s}
            data-element="product-size-option"
            aria-pressed={selected === s}
            onClick={() => onChange(s)}
            className={`py-2.5 rounded font-label-md text-label-md uppercase transition-all ${
              selected === s
                ? 'bg-surface-container-lowest text-primary font-bold shadow-sm'
                : 'bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}

// SpotlightTabs
interface SpotlightTabsProps {
  active: number
  onChange: (index: number) => void
}

function SpotlightTabs({ active, onChange }: SpotlightTabsProps) {
  return (
    <div data-component="SpotlightTabs" className="inline-flex p-1 bg-surface-container-lowest rounded-xl shadow-sm gap-1" role="tablist">
      {SPOTLIGHT_TABS.map((t, i) => (
        <button
          key={t}
          role="tab"
          data-element="spotlight-tab"
          aria-selected={active === i}
          onClick={() => onChange(i)}
          className={`px-space-md py-2 rounded-lg font-label-lg text-label-lg transition-all ${
            active === i ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}

// SwatchPicker
interface SwatchPickerProps {
  selected: number
  onChange: (index: number) => void
}

function SwatchPicker({ selected, onChange }: SwatchPickerProps) {
  return (
    <div data-component="SwatchPicker" className="space-y-space-xs pt-space-xs">
      <div className="flex justify-between items-center">
        <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-primary-container">
          Selected Palette:
        </span>
        <span data-element="selected-swatch-name" className="font-label-technical text-label-technical text-on-primary uppercase">{SWATCHES[selected].name}</span>
      </div>
      <div className="flex items-center gap-space-sm">
        {SWATCHES.map((s, i) => (
          <button
            key={s.name}
            aria-label={s.name}
            data-element="product-swatch"
            aria-pressed={selected === i}
            onClick={() => onChange(i)}
            style={{ backgroundColor: s.hex }}
            className={`w-8 h-8 rounded-full transition-all ${
              selected === i
                ? 'ring-2 ring-offset-2 ring-offset-primary-container ring-on-primary'
                : 'opacity-80 hover:opacity-100'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// FeaturedSection
export function FeaturedSection() {
  const [tab, setTab] = useState(0)
  const [index, setIndex] = useState(0)

  const product = SPOTLIGHTS[index]
  const total = SPOTLIGHTS.length

  const step = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total)
  const changeTab = (i: number) => {
    setTab(i)
    setIndex(0)
  }

  return (
    <section id="featured-spotlight" data-component="FeaturedSection" className="w-full bg-surface-container-low py-margin-md lg:py-margin-lg">
      <Container>
        <div data-element="section-header" className="flex flex-col items-center mb-space-xl text-center">
          <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant mb-space-xs">
            Curated Release
          </span>
          <h2 id="featured-heading" className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface mb-space-md">
            Flagship Innovation Spotlight
          </h2>
          <SpotlightTabs active={tab} onChange={changeTab} />
        </div>

        <div id="featured-spotlight-panel" className="bg-primary-container text-on-primary rounded-xl overflow-hidden shadow-2xl p-space-md md:p-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <ProductGallery product={product} index={index} total={total} onStep={step} />
            {/* key resets swatch / size / cart state when the product changes */}
            <ProductDetails key={index} product={product} />
          </div>
        </div>
      </Container>
    </section>
  )
}
