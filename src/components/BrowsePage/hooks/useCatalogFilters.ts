import { useState } from 'react'
import { CATEGORY_TABS, DEFAULT_FILTERS, DISCIPLINES, PALETTE, PRICE_BOUNDS } from '../data'
import { buildCatalogQuery, countActiveFilters, isPriceFiltered } from '../filters'
import type {
  ActiveFilter,
  CatalogFilters,
  CategorySlug,
  DisciplineSlug,
  PriceRange,
  SizeSlug,
  SortKey,
} from '../types'

function toggleValue<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value]
}

export function clampPrice(price: PriceRange): PriceRange {
  const min = Math.min(Math.max(price.min, PRICE_BOUNDS.min), PRICE_BOUNDS.max - PRICE_BOUNDS.step)
  const max = Math.min(Math.max(price.max, min + PRICE_BOUNDS.step), PRICE_BOUNDS.max)
  return { min, max }
}

/**
 * Owns every filter the catalog UI can change and derives two things from it:
 * - `queryString`: ready to append to `GET /api/products?`
 * - `chips`: the removable pills shown above the filter groups
 */
export function useCatalogFilters(initial: Partial<CatalogFilters> = {}) {
  const [filters, setFilters] = useState<CatalogFilters>({ ...DEFAULT_FILTERS, ...initial })

  const update = (patch: Partial<CatalogFilters>) =>
    setFilters((prev) => ({ ...prev, ...patch, page: 1 }))

  const toggleDiscipline = (slug: DisciplineSlug) =>
    setFilters((prev) => ({ ...prev, page: 1, disciplines: toggleValue(prev.disciplines, slug) }))

  const toggleSize = (size: SizeSlug) =>
    setFilters((prev) => ({ ...prev, page: 1, sizes: toggleValue(prev.sizes, size) }))

  const togglePalette = (id: string) =>
    setFilters((prev) => ({ ...prev, page: 1, palette: toggleValue(prev.palette, id) }))

  const chips: ActiveFilter[] = [
    ...(filters.category !== 'all'
      ? [
          {
            key: `category-${filters.category}`,
            label: CATEGORY_TABS.find((tab) => tab.slug === filters.category)?.label ?? filters.category,
            clear: () => update({ category: 'all' }),
          },
        ]
      : []),
    ...filters.disciplines.map((slug) => ({
      key: `discipline-${slug}`,
      label: DISCIPLINES.find((option) => option.slug === slug)?.label ?? slug,
      clear: () => toggleDiscipline(slug),
    })),
    ...filters.sizes.map((size) => ({
      key: `size-${size}`,
      label: `Size ${size}`,
      clear: () => toggleSize(size),
    })),
    ...filters.palette.map((id) => ({
      key: `color-${id}`,
      label: PALETTE.find((option) => option.id === id)?.name ?? id,
      clear: () => togglePalette(id),
    })),
    ...(filters.inStockOnly
      ? [{ key: 'in-stock', label: 'In Stock Only', clear: () => update({ inStockOnly: false }) }]
      : []),
    ...(isPriceFiltered(filters.price)
      ? [
          {
            key: 'price',
            label: `₱${filters.price.min} - ₱${filters.price.max}`,
            clear: () => update({ price: { min: PRICE_BOUNDS.min, max: PRICE_BOUNDS.max } }),
          },
        ]
      : []),
    ...(filters.search.trim()
      ? [{ key: 'search', label: `"${filters.search.trim()}"`, clear: () => update({ search: '' }) }]
      : []),
  ]

  return {
    filters,
    chips,
    activeCount: countActiveFilters(filters),
    /** Query string for `GET /api/products?`. */
    queryString: buildCatalogQuery(filters).toString(),
    setCategory: (category: CategorySlug) => update({ category }),
    toggleDiscipline,
    toggleSize,
    togglePalette,
    setPrice: (price: PriceRange) => update({ price: clampPrice(price) }),
    setInStockOnly: (inStockOnly: boolean) => update({ inStockOnly }),
    setSearch: (search: string) => update({ search }),
    setSort: (sort: SortKey) => update({ sort }),
    clearAll: () => setFilters((prev) => ({ ...DEFAULT_FILTERS, sort: prev.sort })),
  }
}

export type CatalogFilterController = ReturnType<typeof useCatalogFilters>
