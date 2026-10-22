/**
 * Product detail domain types.
 * These mirror the shape the backend is expected to return so the page can
 * switch from local constants to a live endpoint without touching the UI.
 */

export type SizeSlug = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

export type MediaKind = 'studio' | 'detail' | 'lifestyle'

/** How a reviewer rated the fit. Shown as a chip on the review card. */
export type FitFeedback = 'runs-small' | 'true-to-size' | 'runs-large'

/** Training discipline a review is filed under. */
export type DisciplineSlug = 'running' | 'training' | 'trail-hiking'

export interface Breadcrumb {
  label: string
  href: string
}

export interface ColorOption {
  id: string
  name: string
  hex: string
  /** Image ids this palette swaps the gallery to. Falls back to the full set. */
  imageIds?: string[]
}

export interface ProductImage {
  id: string
  url: string
  alt: string
  kind: MediaKind
}

export interface SizeOption {
  slug: SizeSlug
  inStock: boolean
  /** Drives the "only n left" hint under the size matrix. */
  unitsLeft?: number
}

/** The two spec chips pinned over the gallery. */
export interface Highlight {
  icon: string
  label: string
}

export interface SpecRow {
  label: string
  value: string
}

/** One collapsible block under the buy box. */
export interface SpecGroup {
  id: string
  title: string
  icon: string
  rows: SpecRow[]
}

export interface ProductDetail {
  id: string
  slug: string
  name: string
  collection: string
  grade: string
  summary: string
  price: number
  compareAtPrice?: number
  rating: number
  reviewCount: number
  images: ProductImage[]
  colors: ColorOption[]
  sizes: SizeOption[]
  highlights: Highlight[]
  specGroups: SpecGroup[]
  inStock: boolean
  shipsIn: string
  breadcrumbs: Breadcrumb[]
}

/** A "complete the kit" recommendation. Same shape the catalog card uses. */
export interface KitItem {
  id: string
  slug: string
  name: string
  category: string
  price: number
  compareAtPrice?: number
  image: string
  rating: number
  reviewCount: number
  badge?: string
}

export interface BundleOffer {
  id: string
  title: string
  description: string
  icon: string
  itemCount: number
  bundlePrice: number
  originalPrice: number
}

export interface ReviewPhoto {
  id: string
  url: string
  alt: string
}

export interface ReviewAuthor {
  id: string
  name: string
  initials: string
  avatar?: string
  location: string
  verified: boolean
  /** e.g. "Marathon · 60km/week" — shown under the name. */
  activity: string
}

/** Brand reply rendered inside the review card. */
export interface ReviewResponse {
  author: string
  role: string
  body: string
  createdAt: string
}

export interface Review {
  id: string
  rating: number
  title: string
  body: string
  /** ISO 8601 date string. */
  createdAt: string
  author: ReviewAuthor
  /** What the reviewer trains in. Drives the discipline filter chips. */
  discipline: DisciplineSlug
  photos: ReviewPhoto[]
  helpfulCount: number
  size: SizeSlug
  color: string
  fit: FitFeedback
  recommends: boolean
  response?: ReviewResponse
}

export interface RatingBar {
  stars: number
  count: number
}

export interface ReviewSummary {
  average: number
  total: number
  verifiedTotal: number
  recommendPercent: number
  /** Count behind the "With photos" chip; a page of rows cannot supply it. */
  withPhotosCount: number
  bars: RatingBar[]
}

export type ReviewFilterKey = 'all' | 'with-photos' | DisciplineSlug | '5' | '4' | '3' | '2' | '1'

export type ReviewSortKey = 'helpful' | 'recent' | 'rating-desc' | 'rating-asc'

/** Body of `POST /api/cart/items`. */
export interface AddToBagPayload {
  productId: string
  colorId: string
  size: SizeSlug
  quantity: number
}
