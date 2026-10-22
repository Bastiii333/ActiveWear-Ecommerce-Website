import { PRICE_BOUNDS } from './data'
import type { CatalogFilters, PriceRange } from './types'

/** Serializes the filter state into the exact query the catalog API expects. */
export function buildCatalogQuery(filters: CatalogFilters): URLSearchParams {
  const params = new URLSearchParams()

  if (filters.category !== 'all') params.set('category', filters.category)
  filters.disciplines.forEach((value) => params.append('discipline', value))
  filters.sizes.forEach((value) => params.append('size', value))
  filters.palette.forEach((value) => params.append('color', value))

  if (filters.price.min > PRICE_BOUNDS.min) params.set('minPrice', String(filters.price.min))
  if (filters.price.max < PRICE_BOUNDS.max) params.set('maxPrice', String(filters.price.max))
  if (filters.inStockOnly) params.set('inStock', 'true')

  const search = filters.search.trim()
  if (search) params.set('q', search)

  params.set('sort', filters.sort)
  params.set('page', String(filters.page))

  return params
}

export function countActiveFilters(filters: CatalogFilters): number {
  return (
    (filters.category !== 'all' ? 1 : 0) +
    filters.disciplines.length +
    filters.sizes.length +
    filters.palette.length +
    (filters.inStockOnly ? 1 : 0) +
    (isPriceFiltered(filters.price) ? 1 : 0) +
    (filters.search.trim() ? 1 : 0)
  )
}

export function isPriceFiltered(price: PriceRange): boolean {
  return price.min > PRICE_BOUNDS.min || price.max < PRICE_BOUNDS.max
}
