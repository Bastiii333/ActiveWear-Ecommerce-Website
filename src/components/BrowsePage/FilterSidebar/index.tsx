import type { ReactNode } from 'react'
import { Icon } from '../../LandingPage/shared'
import { DISCIPLINES, PALETTE, PRICE_BOUNDS, SIZES } from '../data'
import { formatPrice } from '../format'
import type { CatalogFilterController } from '../hooks/useCatalogFilters'
import type { CatalogFacets, PriceRange } from '../types'

const percent = (value: number) =>
  ((value - PRICE_BOUNDS.min) / (PRICE_BOUNDS.max - PRICE_BOUNDS.min)) * 100

function PriceRangeSlider({ value, onChange }: { value: PriceRange; onChange: (price: PriceRange) => void }) {
  return (
    <div className="pt-space-sm">
      <div className="relative h-6">
        <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-surface-container-high" />
        <span
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-primary-container"
          style={{ left: `${percent(value.min)}%`, right: `${100 - percent(value.max)}%` }}
        />
        <input
          type="range"
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
        <span>Min {formatPrice(value.min)}</span>
        <span>Max {formatPrice(value.max)}</span>
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
    <section className="border-t border-surface-container-high/70 py-space-md">
      <div className="mb-space-sm flex items-start justify-between gap-space-sm">
        <h3 className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface">{title}</h3>
        {action}
        {value}
      </div>
      {children}
    </section>
  )
}

function ActiveChips({ controller }: { controller: CatalogFilterController }) {
  if (controller.chips.length === 0) return null

  return (
    <div className="flex flex-wrap gap-1.5 pt-space-sm">
      {controller.chips.map((chip) => (
        <button
          key={chip.key}
          type="button"
          onClick={chip.clear}
          aria-label={`Remove filter: ${chip.label}`}
          className="flex items-center gap-1 rounded border border-surface-container-high bg-surface-container-low px-2 py-1 font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant transition-colors hover:text-on-surface"
        >
          <span>{chip.label}</span>
          <Icon name="close" className="text-[12px]" />
        </button>
      ))}
    </div>
  )
}

function DisciplineFilter({ controller, facets }: { controller: CatalogFilterController; facets?: CatalogFacets }) {
  return (
    <div className="space-y-2">
      {DISCIPLINES.map((option) => {
        const checked = controller.filters.disciplines.includes(option.slug)
        const count = facets?.disciplines?.[option.slug]

        return (
          <label key={option.slug} className="flex cursor-pointer items-center gap-space-xs">
            <input
              type="checkbox"
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
              {checked && <Icon name="check" className="text-[12px]" />}
            </span>
            <span className="flex-1 font-body-sm text-body-sm text-on-surface">{option.label}</span>
            {typeof count === 'number' && (
              <span className="font-label-technical text-label-technical text-outline">{count}</span>
            )}
          </label>
        )
      })}
    </div>
  )
}

function SizeFilter({ controller }: { controller: CatalogFilterController }) {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {SIZES.map((size) => {
        const selected = controller.filters.sizes.includes(size)
        return (
          <button
            key={size}
            type="button"
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
    <div className="flex flex-wrap items-center gap-space-sm">
      {PALETTE.map((color) => {
        const selected = controller.filters.palette.includes(color.id)
        return (
          <button
            key={color.id}
            type="button"
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
    <aside className="h-fit min-w-0 rounded-xl border border-surface-container-high/70 bg-surface-container-lowest p-space-md shadow-sm lg:sticky lg:top-[132px]">
      <div className="flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-xs">
          <Icon name="tune" className="text-[18px] text-on-surface" />
          <h2 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface">Refine Gear</h2>
        </div>
        <button
          type="button"
          onClick={controller.clearAll}
          disabled={controller.activeCount === 0}
          className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant transition-colors hover:text-on-surface disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear All
        </button>
      </div>

      <ActiveChips controller={controller} />

      <FilterSection title="Movement Discipline">
        <DisciplineFilter controller={controller} facets={facets} />
      </FilterSection>

      <FilterSection
        title="Matrix Sizing"
        action={<button type="button" className="font-label-technical text-label-technical uppercase tracking-wider text-tertiary-container hover:underline">Fit Guide</button>}
      >
        <SizeFilter controller={controller} />
      </FilterSection>

      <FilterSection title="Palette">
        <PaletteFilter controller={controller} />
      </FilterSection>

      <FilterSection
        title="Price Bracket"
        value={
          <span className="rounded bg-surface-container-low px-space-sm py-1 font-label-technical text-label-technical text-on-surface-variant">
            {formatPrice(controller.filters.price.min)} - {formatPrice(controller.filters.price.max)}
          </span>
        }
      >
        <PriceRangeSlider value={controller.filters.price} onChange={controller.setPrice} />
      </FilterSection>
    </aside>
  )
}
