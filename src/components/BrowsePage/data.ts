import type {
  CatalogFilters,
  CategorySlug,
  ColorOption,
  DisciplineSlug,
  Product,
  SizeSlug,
  SortKey,
} from './types'

export interface CategoryTab {
  slug: CategorySlug
  label: string
  icon: string
}

export const CATEGORY_TABS: CategoryTab[] = [
  { slug: 'all', label: 'All Gear', icon: 'deployed_code' },
  { slug: 'tops', label: 'Tops', icon: 'checkroom' },
  { slug: 'bottoms', label: 'Bottoms', icon: 'accessibility_new' },
  { slug: 'sets', label: 'Sets', icon: 'grid_view' },
  { slug: 'outerwear', label: 'Outerwear', icon: 'umbrella' },
  { slug: 'sports-bras', label: 'Sports Bras', icon: 'sports_gymnastics' },
]

export interface DisciplineOption {
  slug: DisciplineSlug
  label: string
}

export const DISCIPLINES: DisciplineOption[] = [
  { slug: 'running-speed', label: 'Running & Speed' },
  { slug: 'hiit-training', label: 'HIIT & Training' },
  { slug: 'yoga-studio', label: 'Yoga & Studio' },
  { slug: 'outdoor-trail', label: 'Outdoor Trail' },
]

export const SIZES: SizeSlug[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export const PALETTE: ColorOption[] = [
  { id: 'obsidian', name: 'Obsidian Core', hex: '#18181B' },
  { id: 'arctic', name: 'Arctic White', hex: '#F7F7F7' },
  { id: 'slate', name: 'Slate Concrete', hex: '#8A8A8A' },
  { id: 'mist-blue', name: 'Mist Blue', hex: '#BBD3EA' },
  { id: 'sage', name: 'Sage Green', hex: '#4E9A6F' },
  { id: 'volt', name: 'Volt Yellow', hex: '#E8E357' },
  { id: 'crimson', name: 'Crimson Red', hex: '#C63F3F' },
]

export const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured Systems' },
  { value: 'newest', label: 'Newest Drops' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

/** Slider bounds and step. Kept here so the backend can override them via facets. */
export const PRICE_BOUNDS = { min: 40, max: 250, step: 10 }

export const DEFAULT_FILTERS: CatalogFilters = {
  category: 'all',
  disciplines: [],
  sizes: [],
  palette: [],
  price: { min: PRICE_BOUNDS.min, max: PRICE_BOUNDS.max },
  inStockOnly: false,
  search: '',
  sort: 'featured',
  page: 1,
}

/**
 * Placeholder inventory. Empty on purpose: products come from
 * `GET /api/products?<query>` and are passed into <BrowsePage products={...} />.
 */
export const CATALOG_PRODUCTS: Product[] = []
