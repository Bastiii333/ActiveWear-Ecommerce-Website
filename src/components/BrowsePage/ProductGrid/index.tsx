import { Icon } from '../../LandingPage/shared'
import { SORT_OPTIONS } from '../data'
import type { Product, ProductLayout, SortKey } from '../types'
import { ProductCard } from './ProductCard'

function GridToolbar({
  shown,
  total,
  sort,
  layout,
  onSortChange,
  onLayoutChange,
}: {
  shown: number
  total: number
  sort: SortKey
  layout: ProductLayout
  onSortChange: (sort: SortKey) => void
  onLayoutChange: (layout: ProductLayout) => void
}) {
  return (
    <div data-component="GridToolbar" className="mb-space-md flex flex-col gap-space-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-x-space-xs gap-y-1">
        <span id="browse-results-count" className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
          Showing {shown} of {total} items
        </span>
      </div>

      <div className="flex items-center justify-between gap-space-sm lg:justify-end">
        <div className="flex items-center gap-space-xs">
          <span className="hidden font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant sm:inline">
            Sort by:
          </span>
          <div className="relative">
            <select
              id="browse-sort-select"
              aria-label="Sort products"
              value={sort}
              onChange={(event) => onSortChange(event.target.value as SortKey)}
              className="appearance-none rounded border border-surface-container-high bg-surface-container-lowest py-2 pl-space-sm pr-8 font-label-technical text-label-technical uppercase tracking-wider text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Icon
              name="expand_more"
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[16px] text-on-surface-variant"
            />
          </div>
        </div>

        <div data-element="layout-toggle-group" className="flex items-center gap-1 rounded border border-surface-container-high bg-surface-container-lowest p-0.5">
          {(
            [
              { value: 'grid', icon: 'grid_view', label: 'Grid view' },
              { value: 'list', icon: 'view_agenda', label: 'List view' },
            ] as const
          ).map((option) => (
            <button
              key={option.value}
              type="button"
              id={`browse-layout-${option.value}`}
              aria-label={option.label}
              aria-pressed={layout === option.value}
              onClick={() => onLayoutChange(option.value)}
              className={`flex h-8 w-8 items-center justify-center rounded-sm transition-colors ${
                layout === option.value
                  ? 'bg-primary-container text-on-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Icon name={option.icon} className="text-[18px]" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function SkeletonGrid({ layout }: { layout: ProductLayout }) {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          data-component="ProductSkeleton"
          className={`animate-pulse overflow-hidden rounded-lg border border-surface-container-high/60 bg-surface-container-lowest ${
            layout === 'list' ? 'sm:flex' : ''
          }`}
        >
          <div className={layout === 'list' ? 'aspect-[3/4] bg-surface-container sm:aspect-square sm:w-52' : 'aspect-[3/4] bg-surface-container'} />
          <div className="space-y-2 p-space-sm">
            <div className="h-3 w-1/3 rounded bg-surface-container" />
            <div className="h-4 w-3/4 rounded bg-surface-container" />
            <div className="h-4 w-1/4 rounded bg-surface-container" />
          </div>
        </div>
      ))}
    </>
  )
}

function EmptyState({ onResetFilters }: { onResetFilters?: () => void }) {
  const isFiltered = Boolean(onResetFilters)

  return (
    <div data-component="EmptyState" className="col-span-full rounded-xl border border-dashed border-outline-variant bg-surface-container-lowest px-space-md py-space-xl text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-low">
        <Icon name="inventory_2" className="text-[24px] text-on-surface-variant" />
      </div>
      <h3 className="mt-space-sm font-headline-sm text-headline-sm uppercase text-on-surface">
        {isFiltered ? 'No gear matches this configuration' : 'No products available yet'}
      </h3>
      <p className="mx-auto mt-space-xs max-w-md font-body-sm text-body-sm text-on-surface-variant">
        {isFiltered
          ? 'Adjust your filters or check back after the next drop syncs into the catalog.'
          : 'New gear will appear here as soon as the catalog is connected.'}
      </p>
      {onResetFilters && (
        <button
          type="button"
          id="browse-empty-reset-filters"
          onClick={onResetFilters}
          className="mt-space-md rounded-lg bg-primary-container px-space-lg py-2.5 font-label-technical text-label-technical uppercase tracking-wider text-on-primary transition-colors hover:bg-primary"
        >
          Reset Filters
        </button>
      )}
    </div>
  )
}

interface ProductGridProps {
  products: Product[]
  total: number
  isLoading?: boolean
  layout: ProductLayout
  sort: SortKey
  onSortChange: (sort: SortKey) => void
  onLayoutChange: (layout: ProductLayout) => void
  onResetFilters?: () => void
}

export function ProductGrid({
  products,
  total,
  isLoading = false,
  layout,
  sort,
  onSortChange,
  onLayoutChange,
  onResetFilters,
}: ProductGridProps) {
  return (
    <section id="browse-product-results" data-component="ProductGrid" aria-label="Product results" className="min-w-0">
      <GridToolbar
        shown={products.length}
        total={total}
        sort={sort}
        layout={layout}
        onSortChange={onSortChange}
        onLayoutChange={onLayoutChange}
      />

      <div
        id="browse-product-grid"
        className={`grid gap-space-sm ${
          layout === 'list' ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}
      >
        {isLoading && <SkeletonGrid layout={layout} />}

        {!isLoading && products.length === 0 && <EmptyState onResetFilters={onResetFilters} />}

        {!isLoading &&
          products.map((product) => <ProductCard key={product.id} product={product} layout={layout} />)}
      </div>
    </section>
  )
}
