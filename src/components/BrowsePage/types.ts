/**
 * Catalog domain types.
 * These mirror the shape the backend is expected to return so the page can
 * switch from local constants to a live endpoint without touching the UI.
 */

export type CategorySlug = 'all' | 'tops' | 'bottoms' | 'sets' | 'outerwear' | 'sports-bras'
export type ProductCategory = Exclude<CategorySlug, 'all'>

export type DisciplineSlug = 'running-speed' | 'hiit-training' | 'yoga-studio' | 'outdoor-trail'
export type SizeSlug = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

export type SortKey = 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating'
export type ProductLayout = 'grid' | 'list'

export interface ColorOption {
  id: string
  name: string
  hex: string
}

export interface PriceRange {
  min: number
  max: number
}

/** Everything the browse page sends to `GET /api/products`. */
export interface CatalogFilters {
  category: CategorySlug
  disciplines: DisciplineSlug[]
  sizes: SizeSlug[]
  /** Color ids from `PALETTE`. */
  palette: string[]
  price: PriceRange
  inStockOnly: boolean
  search: string
  sort: SortKey
  page: number
}

export interface Product {
  id: string
  name: string
  category: ProductCategory
  disciplines: DisciplineSlug[]
  price: number
  compareAtPrice?: number
  rating: number
  reviewCount: number
  image: string
  colors: ColorOption[]
  sizes: SizeSlug[]
  inStock: boolean
  featured?: boolean
}

/** Counts returned alongside a catalog response, used by the sidebar and tabs. */
export interface CatalogFacets {
  total: number
  categories: Partial<Record<CategorySlug, number>>
  disciplines: Partial<Record<DisciplineSlug, number>>
  sizes: Partial<Record<SizeSlug, number>>
  price: PriceRange
}

export interface ActiveFilter {
  key: string
  label: string
  clear: () => void
}
