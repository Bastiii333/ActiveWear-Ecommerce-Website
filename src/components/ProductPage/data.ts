import { IMAGES } from '../LandingPage/shared'
import type {
  BundleOffer,
  KitItem,
  ProductDetail,
  Review,
  ReviewFilterKey,
  ReviewSortKey,
  ReviewSummary,
} from './types'

/**
 * Placeholder catalog row. Replace with `GET /api/products/:slug`; the shape is
 * identical, so only the loader above `ProductPage` changes.
 */
export const PRODUCT: ProductDetail = {
  id: 'apex-zero-draft-zip-top',
  slug: 'apex-zero-draft-zip-top',
  name: 'Apex Zero-Draft Zip Top',
  collection: 'AeroLab Series 04 • Men & Women',
  grade: 'Apex Grade',
  summary:
    'Tailored for high-velocity distance training. Recycled hydrophobic yarn and targeted micro-knit ventilation lattices accelerate air cooling across high-heat zones, while the zero-draft collar seals out wind at race pace.',
  price: 118,
  compareAtPrice: 148,
  rating: 4.9,
  reviewCount: 184,
  inStock: true,
  shipsIn: 'Ships in 1-2 business days',
  breadcrumbs: [
    { label: 'Home', href: '#/' },
    { label: 'Shop', href: '#/shop' },
    { label: 'Tops', href: '#/shop?category=tops' },
  ],
  images: [
    { id: 'studio-front', url: IMAGES.spotlight, alt: 'Apex Zero-Draft Zip Top, front view', kind: 'studio' },
    { id: 'studio-back', url: IMAGES.heromodel, alt: 'Apex Zero-Draft Zip Top worn, back view', kind: 'studio' },
    { id: 'detail-weave', url: IMAGES.fabric, alt: 'Micro-knit ventilation lattice detail', kind: 'detail' },
    { id: 'detail-cuff', url: IMAGES.tops, alt: 'Thumbhole cuff and reflective piping detail', kind: 'detail' },
    {
      id: 'lifestyle-run',
      url: IMAGES.athletes,
      alt: 'Athlete running at dawn in the Apex Zero-Draft Zip Top',
      kind: 'lifestyle',
    },
  ],
  colors: [
    { id: 'mist-slate-blue', name: 'Mist Slate Blue', hex: '#829BB0' },
    { id: 'pure-arctic-white', name: 'Pure Arctic White', hex: '#F5F7FA' },
    { id: 'violet-eclipse', name: 'Violet Eclipse', hex: '#5D4E75' },
    { id: 'obsidian-core', name: 'Obsidian Core', hex: '#18181B' },
  ],
  sizes: [
    { slug: 'XS', inStock: true },
    { slug: 'S', inStock: true },
    { slug: 'M', inStock: true, unitsLeft: 3 },
    { slug: 'L', inStock: true },
    { slug: 'XL', inStock: false },
    { slug: 'XXL', inStock: true },
  ],
  highlights: [
    { icon: 'water_drop', label: 'Hydrophobic 4-Way' },
    { icon: 'thermostat', label: 'Adaptive Heat' },
  ],
  specGroups: [
    {
      id: 'details',
      title: 'Details & Fabric Specifications',
      icon: 'science',
      rows: [
        { label: 'Composition', value: '68% recycled polyamide, 24% elastane, 8% merino blend' },
        { label: 'Weight', value: '142 g/m² — four-season mid weight' },
        { label: 'Construction', value: 'Bonded flatlock seams, zero-draft storm collar' },
        { label: 'Ventilation', value: 'Laser-cut lattice across scapula and underarm panels' },
        { label: 'Reflectivity', value: '360° reflective piping on cuffs, hem and shoulder yoke' },
        { label: 'Origin', value: 'Woven in Portugal, assembled in Vietnam' },
      ],
    },
    {
      id: 'fit-care',
      title: 'Fit, Care & Requirements',
      icon: 'checkroom',
      rows: [
        { label: 'Fit', value: 'Athletic taper — size up for a relaxed layering fit' },
        { label: 'Model', value: '183 cm / 74 kg wearing size M' },
        { label: 'Length', value: 'Dropped hem, 71 cm centre back on size M' },
        { label: 'Care', value: 'Machine wash cold, inside out. No softener, no tumble dry.' },
        { label: 'Storage', value: 'Hang dry away from direct heat to protect the DWR finish' },
      ],
    },
    {
      id: 'shipping',
      title: 'Shipping & Field Trial',
      icon: 'local_shipping',
      rows: [
        { label: 'Standard', value: 'Free on orders over ₱100 — 3 to 5 business days' },
        { label: 'Express', value: '₱12 — next business day within Metro Manila' },
        { label: 'Returns', value: '30-day field trial. Train in it; send it back if it misses.' },
        { label: 'Warranty', value: 'Two-year seam and hardware guarantee' },
      ],
    },
  ],
}

/** Cross-sell rail under the buy box: `GET /api/products/:slug/recommendations`. */
export const KIT_ITEMS: KitItem[] = [
  {
    id: 'feather-shell-speed-short',
    slug: 'feather-shell-speed-short',
    name: 'Feather-Shell Speed Short',
    category: 'Bottoms',
    price: 68,
    compareAtPrice: 84,
    image: IMAGES.bottoms,
    rating: 4.7,
    reviewCount: 138,
    badge: 'Pairs Often',
  },
  {
    id: 'aeroshield-weave-windbreaker',
    slug: 'aeroshield-weave-windbreaker',
    name: 'AeroShield Weave Windbreaker',
    category: 'Outerwear',
    price: 162,
    compareAtPrice: 198,
    image: IMAGES.outerwear,
    rating: 4.8,
    reviewCount: 204,
  },
  {
    id: 'stormline-thermal-cap',
    slug: 'stormline-thermal-cap',
    name: 'Stormline Thermal Cap',
    category: 'Accessories',
    price: 32,
    image: IMAGES.hero,
    rating: 4.6,
    reviewCount: 96,
    badge: 'Crew Pick',
  },
]

export const BUNDLE: BundleOffer = {
  id: 'zero-draft-training-bundle',
  title: 'Zero-Draft Training Bundle',
  description: 'Take the top, short and cap together and the kit ships as one field-tested set.',
  icon: 'inventory_2',
  itemCount: 3,
  bundlePrice: 179.25,
  originalPrice: 218,
}

/** Aggregates from `GET /api/products/:slug/reviews/summary`. */
export const REVIEW_SUMMARY: ReviewSummary = {
  average: 4.9,
  total: 184,
  verifiedTotal: 184,
  recommendPercent: 96,
  withPhotosCount: 42,
  bars: [
    { stars: 5, count: 162 },
    { stars: 4, count: 15 },
    { stars: 3, count: 4 },
    { stars: 2, count: 2 },
    { stars: 1, count: 1 },
  ],
}

/** First page of `GET /api/products/:slug/reviews`. */
export const REVIEWS: Review[] = [
  {
    id: 'rev-1041',
    rating: 5,
    title: 'Dry on my heaviest 10k tempo sessions',
    body:
      'Wore this through four weeks of marathon build in heavy humidity and the lattice panels genuinely move air. Came out of a 10k tempo soaked through but the collar never chafed and the fabric was dry by the time I finished my cooldown. The reflective piping is brighter than the photos suggest.',
    createdAt: '2026-09-28',
    discipline: 'running',
    author: {
      id: 'ath-1041',
      name: 'Marco D.',
      initials: 'MD',
      avatar: IMAGES.profile,
      location: 'Quezon City, PH',
      verified: true,
      activity: 'Marathon · 70 km/week',
    },
    photos: [
      { id: 'p-1', url: IMAGES.athletes, alt: 'Reviewer running at sunrise' },
      { id: 'p-2', url: IMAGES.fabric, alt: 'Close-up of the ventilation lattice' },
      { id: 'p-3', url: IMAGES.spotlight, alt: 'Top laid flat after a session' },
    ],
    helpfulCount: 47,
    size: 'M',
    color: 'Mist Slate Blue',
    fit: 'true-to-size',
    recommends: true,
  },
  {
    id: 'rev-1038',
    rating: 4,
    title: 'Fit is sharp, zip pull needs work',
    body:
      'Best cut top I own — the taper is clean without being restrictive and the thumbholes finally sit right. One gripe: the zip pull is small enough that it is fiddly with gloves on. Dropping a star for that alone, everything else is excellent.',
    createdAt: '2026-09-14',
    discipline: 'trail-hiking',
    author: {
      id: 'ath-1038',
      name: 'Rhea S.',
      initials: 'RS',
      location: 'Cebu City, PH',
      verified: true,
      activity: 'Trail · 4 sessions/week',
    },
    photos: [],
    helpfulCount: 29,
    size: 'S',
    color: 'Violet Eclipse',
    fit: 'true-to-size',
    recommends: true,
    response: {
      author: 'ActiveWear Product Team',
      role: 'AeroLab Series',
      body:
        'Thanks, Rhea — the glove-friendly zip pull is already in testing for the Series 05 revision. Reach out to the crew and we will send the extended pull over as soon as it lands.',
      createdAt: '2026-09-16',
    },
  },
  {
    id: 'rev-1032',
    rating: 5,
    title: 'Excellent on long rides, snug in the layering',
    body:
      'Bought this as a mid layer for cold morning rides and it has outperformed a shell twice the price. It packs down to nothing and the wind simply does not get through the collar. Sized up to L for the layering room and that was the right call.',
    createdAt: '2026-08-30',
    discipline: 'training',
    author: {
      id: 'ath-1032',
      name: 'Jonas V.',
      initials: 'JV',
      location: 'Davao, PH',
      verified: false,
      activity: 'Cycling · 200 km/week',
    },
    photos: [{ id: 'p-4', url: IMAGES.outerwear, alt: 'Top layered under a shell' }],
    helpfulCount: 18,
    size: 'L',
    color: 'Obsidian Core',
    fit: 'runs-small',
    recommends: true,
  },
  {
    id: 'rev-1027',
    rating: 5,
    title: 'Third one in the rotation',
    body:
      'Forty-plus washes on my first and the DWR finish is still beading. At this point I just buy a new colourway every season and retire the oldest to easy days.',
    createdAt: '2026-08-11',
    discipline: 'training',
    author: {
      id: 'ath-1027',
      name: 'Priya N.',
      initials: 'PN',
      location: 'Makati, PH',
      verified: true,
      activity: 'HIIT · 5 sessions/week',
    },
    photos: [],
    helpfulCount: 12,
    size: 'XS',
    color: 'Pure Arctic White',
    fit: 'true-to-size',
    recommends: true,
  },
  {
    id: 'rev-1019',
    rating: 3,
    title: 'Great fabric, sleeves run long',
    body:
      'No complaints about the material, but the sleeve length on the M is cut for longer arms than mine. The thumbholes end up bunching at the wrist. Worth trying in store first if you can.',
    createdAt: '2026-07-22',
    discipline: 'running',
    author: {
      id: 'ath-1019',
      name: 'Tomas L.',
      initials: 'TL',
      location: 'Iloilo, PH',
      verified: true,
      activity: 'Studio · 3 sessions/week',
    },
    photos: [],
    helpfulCount: 7,
    size: 'M',
    color: 'Mist Slate Blue',
    fit: 'runs-large',
    recommends: false,
  },
]

/** `count` names the summary field the chip shows in brackets, when it shows one. */
export const REVIEW_FILTERS: { key: ReviewFilterKey; label: string; count?: 'total' | 'withPhotosCount' }[] = [
  { key: 'all', label: 'All', count: 'total' },
  { key: 'with-photos', label: 'With Photos', count: 'withPhotosCount' },
  { key: 'running', label: 'Running' },
  { key: 'training', label: 'Training' },
  { key: 'trail-hiking', label: 'Trail & Hiking' },
  { key: '5', label: '5 Stars' },
]

export const REVIEW_SORTS: { key: ReviewSortKey; label: string }[] = [
  { key: 'helpful', label: 'Most Helpful' },
  { key: 'recent', label: 'Most Recent' },
  { key: 'rating-desc', label: 'Highest Rated' },
  { key: 'rating-asc', label: 'Lowest Rated' },
]

/** Copy for the fit chip on each review card. */
export const FIT_LABELS: Record<Review['fit'], string> = {
  'runs-small': 'Runs small',
  'true-to-size': 'True to size',
  'runs-large': 'Runs large',
}

/** How many reviews one "Load more" press reveals. */
export const REVIEWS_PER_PAGE = 3
