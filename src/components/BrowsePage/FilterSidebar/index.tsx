import { useLayoutEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Icon } from '../../LandingPage/shared'
import { DISCIPLINES, PALETTE, PRICE_BOUNDS, SIZES } from '../data'
import { formatPrice } from '../format'
import type { CatalogFilterController } from '../hooks/useCatalogFilters'
import type { CatalogFacets, PriceRange } from '../types'

const percent = (value: number) =>
  ((value - PRICE_BOUNDS.min) / (PRICE_BOUNDS.max - PRICE_BOUNDS.min)) * 100

function PriceRangeSlider({ value, onChange }: { value: PriceRange; onChange: (price: PriceRange) => void }) {
  return (
    <div data-component="PriceRangeSlider" className="pt-space-sm">
      <div className="relative h-6">
        <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-surface-container-high" />
        <span
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-primary-container"
          style={{ left: `${percent(value.min)}%`, right: `${100 - percent(value.max)}%` }}
        />
        <input
          type="range"
          id="browse-price-min"
          aria-label="Minimum price"
          min={PRICE_BOUNDS.min}
          max={PRICE_BOUNDS.max}
          step={PRICE_BOUNDS.step}
          value={value.min}
          onChange={(event) => onChange({ min: Number(event.target.value), max: value.max })}
          style={{ zIndex: value.min > (PRICE_BOUNDS.min + PRICE_BOUNDS.max) / 2 ? 20 : 10 }}
          className="price-range absolute inset-x-0 top-1/2 w-full -translate-y-1/2"
        />
        <input
          type="range"
          id="browse-price-max"
          aria-label="Maximum price"
          min={PRICE_BOUNDS.min}
          max={PRICE_BOUNDS.max}
          step={PRICE_BOUNDS.step}
          value={value.max}
          onChange={(event) => onChange({ min: value.min, max: Number(event.target.value) })}
          className="price-range absolute inset-x-0 top-1/2 w-full -translate-y-1/2"
        />
      </div>
      <div className="mt-space-xs flex justify-between font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
        <span data-element="price-min-label">Min {formatPrice(value.min)}</span>
        <span data-element="price-max-label">Max {formatPrice(value.max)}</span>
      </div>
    </div>
  )
}

function FilterSection({
  title,
  action,
  value,
  children,
}: {
  title: string
  action?: ReactNode
  value?: ReactNode
  children: ReactNode
}) {
  return (
    <section data-component="FilterSection" className="border-t border-surface-container-high/70 py-space-md">
      <div className="mb-space-sm flex items-start justify-between gap-space-sm">
        <h3 data-element="filter-section-title" className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface">{title}</h3>
        {action}
        {value}
      </div>
      {children}
    </section>
  )
}

function ActiveChips({ controller }: { controller: CatalogFilterController }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  // Animate real height (not transform) so the filter groups below flow with the chips.
  useLayoutEffect(() => {
    const node = contentRef.current
    if (!node) return

    const measure = () => setHeight(node.offsetHeight)
    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      data-component="ActiveChips"
      initial={false}
      animate={{ height }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div ref={contentRef} data-element="active-filter-chip-list" className={`flex flex-wrap gap-1.5 ${controller.chips.length ? 'pt-space-sm' : ''}`}>
        <AnimatePresence initial={false} mode="popLayout">
          {controller.chips.map((chip) => (
            <motion.button
              key={chip.key}
              layout
              type="button"
              data-element="active-filter-chip"
              onClick={chip.clear}
              aria-label={`Remove filter: ${chip.label}`}
              initial={{ opacity: 0, scale: 0.8, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -6 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 520, damping: 34, mass: 0.6 }}
              className="group flex items-center gap-1 rounded border border-surface-container-high bg-surface-container-low px-2 py-1 font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant transition-colors hover:border-outline-variant hover:text-on-surface"
            >
              <span>{chip.label}</span>
              <Icon
                name="close"
                className="text-[12px] transition-transform duration-200 group-hover:rotate-90"
              />
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

function DisciplineFilter({ controller, facets }: { controller: CatalogFilterController; facets?: CatalogFacets }) {
  return (
    <div data-component="DisciplineFilter" className="space-y-2">
      {DISCIPLINES.map((option) => {
        const checked = controller.filters.disciplines.includes(option.slug)
        const count = facets?.disciplines?.[option.slug]

        return (
          <label key={option.slug} data-element="discipline-option" className="flex cursor-pointer items-center gap-space-xs">
            <input
              type="checkbox"
              data-element="discipline-checkbox"
              checked={checked}
              onChange={() => controller.toggleDiscipline(option.slug)}
              className="peer sr-only"
            />
            <span
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border transition-colors ${
                checked
                  ? 'border-primary-container bg-primary-container text-on-primary'
                  : 'border-outline-variant bg-surface-container-lowest'
              }`}
            >
              {checked && (
                <motion.span
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 600, damping: 26 }}
                  className="flex"
                >
                  <Icon name="check" className="text-[12px]" />
                </motion.span>
              )}
            </span>
            <span className="flex-1 font-body-sm text-body-sm text-on-surface">{option.label}</span>
            {typeof count === 'number' && (
              <span data-element="discipline-count" className="font-label-technical text-label-technical text-outline">{count}</span>
            )}
          </label>
        )
      })}
    </div>
  )
}

function SizeFilter({ controller }: { controller: CatalogFilterController }) {
  return (
    <div data-component="SizeFilter" className="grid grid-cols-3 gap-1.5">
      {SIZES.map((size) => {
        const selected = controller.filters.sizes.includes(size)
        return (
          <button
            key={size}
            type="button"
            data-element="size-option"
            aria-pressed={selected}
            onClick={() => controller.toggleSize(size)}
            className={`rounded border py-2 font-label-technical text-label-technical uppercase tracking-wider transition-colors ${
              selected
                ? 'border-primary-container bg-primary-container text-on-primary'
                : 'border-surface-container-high bg-surface-container-lowest text-on-surface hover:border-outline-variant'
            }`}
          >
            {size}
          </button>
        )
      })}
    </div>
  )
}

function PaletteFilter({ controller }: { controller: CatalogFilterController }) {
  return (
    <div data-component="PaletteFilter" className="flex flex-wrap items-center gap-space-sm">
      {PALETTE.map((color) => {
        const selected = controller.filters.palette.includes(color.id)
        return (
          <button
            key={color.id}
            type="button"
            data-element="palette-swatch"
            aria-label={color.name}
            aria-pressed={selected}
            title={color.name}
            onClick={() => controller.togglePalette(color.id)}
            style={{ backgroundColor: color.hex }}
            className={`h-7 w-7 rounded-full border border-outline-variant/60 transition-shadow ${
              selected ? 'ring-2 ring-primary ring-offset-2' : 'hover:opacity-80'
            }`}
          />
        )
      })}
    </div>
  )
}

export function FilterSidebar({
  controller,
  facets,
}: {
  controller: CatalogFilterController
  facets?: CatalogFacets
}) {
  return (
    <aside id="browse-filter-sidebar" data-component="FilterSidebar" className="h-fit min-w-0 rounded-xl border border-surface-container-high/70 bg-surface-container-lowest p-space-md shadow-sm lg:sticky lg:top-[132px]">
      <div className="flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-xs">
          <h2 id="browse-filter-heading" className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface">Filter</h2>
        </div>
        <button
          type="button"
          id="browse-clear-filters"
          onClick={controller.clearAll}
          disabled={controller.activeCount === 0}
          className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant transition-colors hover:text-on-surface disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear All
        </button>
      </div>

      <ActiveChips controller={controller} />

      <FilterSection title="">
        <DisciplineFilter controller={controller} facets={facets} />
      </FilterSection>

      <FilterSection
        title="Matrix Sizing"
        action={<button type="button" id="browse-fit-guide-button" className="font-label-technical text-label-technical uppercase tracking-wider text-tertiary-container hover:underline">Fit Guide</button>}
      >
        <SizeFilter controller={controller} />
      </FilterSection>

      <FilterSection title="Palette">
        <PaletteFilter controller={controller} />
      </FilterSection>

      <FilterSection
        title="Price Bracket"
        value={
          <span data-element="price-range-summary" className="rounded bg-surface-container-low px-space-sm py-1 font-label-technical text-label-technical text-on-surface-variant">
            {formatPrice(controller.filters.price.min)} - {formatPrice(controller.filters.price.max)}
          </span>
        }
      >
        <PriceRangeSlider value={controller.filters.price} onChange={controller.setPrice} />
      </FilterSection>
    </aside>
  )
}
