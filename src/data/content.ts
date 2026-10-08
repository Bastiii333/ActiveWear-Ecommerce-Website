import { IMAGES } from './images'

export interface Division {
  code: string
  badgeA: string
  badgeB: string
  image: string
  imageAlt: string
  styles: number
  subcategories: string[]
  eyebrow: string
  title: string
  price: number
  description: string
  metrics: { value: string; label: string; accent?: boolean }[]
  cta: string
  sysCode: string
}

export interface Spotlight {
  title: string
  desc: string
  image: string
  price: number
  oldPrice: number
  grade: string
  specA: { icon: string; label: string }
  specB: { icon: string; label: string }
}

export interface Swatch { name: string; hex: string }

export const NAV_LINKS = ['Shop', 'New Arrivals', 'Best Sellers', 'Collections', 'Community']

export const HERO_METRICS = [
  { value: '200+', label: 'Performance Cuts' },
  { value: '2,000+', label: 'Verified Reviews' },
  { value: '50,000+', label: 'Active Athletes', accent: true },
]

export const DISCIPLINES = [
  { icon: 'apps', label: 'All Disciplines', count: 240 },
  { icon: 'sprint', label: 'Track & Sprint', count: 68 },
  { icon: 'bolt', label: 'High-Intensity / HIIT', count: 84 },
  { icon: 'terrain', label: 'Endurance & Trail', count: 56 },
  { icon: 'restore', label: 'Recovery Lab', count: 32 },
]

export const DIVISIONS: Division[] = [
  {
    code: '01', badgeA: 'Compression Fit', badgeB: '0.08s Wicking', image: IMAGES.tops,
    imageAlt: 'Ice-blue athletic quarter-zip compression top', styles: 86,
    subcategories: ['Zip-Tops', 'Compression Tanks', 'Aero Baselayers'],
    eyebrow: 'Upper Kinetic Gear', title: 'Performance Tops', price: 78,
    description: 'Zone-mapped micro-mesh fibers expand when exposed to high perspiration to accelerate heat dissipation by up to 340%.',
    metrics: [
      { value: '142 GSM', label: 'Weight' },
      { value: '4-Way', label: 'Aero-Flex', accent: true },
      { value: 'Bonded', label: 'Zero-Chafe' },
    ],
    cta: 'Explore Tops (86)', sysCode: '04-TOP-AERO',
  },
  {
    code: '02', badgeA: 'Hydrophobic Shell', badgeB: 'Laser Perforated', image: IMAGES.bottoms,
    imageAlt: 'Ultralight white high-performance speed running shorts', styles: 94,
    subcategories: ['2-in-1 Split Shorts', 'Compression Tights', 'Cargo Trainers'],
    eyebrow: 'Lower Propulsion Tech', title: 'Bottoms & Tights', price: 84,
    description: 'Aero-Stretch ergonomic cuts with built-in bounce-free phone liners and zero-friction diamond gusseting.',
    metrics: [
      { value: '98 GSM', label: 'Feather Shell' },
      { value: 'Bounce-Free', label: 'Pockets', accent: true },
      { value: 'DWR C0', label: 'Rain Repel' },
    ],
    cta: 'Explore Bottoms (94)', sysCode: '04-BTM-FLEX',
  },
  {
    code: '03', badgeA: 'Storm-Proof 20K', badgeB: '360° Reflective', image: IMAGES.outerwear,
    imageAlt: 'Technical slate grey track jacket and windbreaker set', styles: 60,
    subcategories: ['Storm Anoraks', 'Wind-Shells', 'Warm-Up Suites'],
    eyebrow: 'Extreme Element Defense', title: 'Sets & Outerwear', price: 168,
    description: 'Multi-layer ripstop membrane blocks gale-force wind chills while releasing thermal exhaust during alpine and storm conditioning.',
    metrics: [
      { value: '20,000 mm', label: 'Waterproof' },
      { value: '< 280g', label: 'Packable', accent: true },
      { value: 'Aero-Sealed', label: 'Zippers' },
    ],
    cta: 'Explore Outerwear (60)', sysCode: '04-SHL-STORM',
  },
]

export const SPOTLIGHT_TABS = ['New Arrivals', 'Best Sellers', 'Seasonal Sales']

export const SPOTLIGHTS: Spotlight[] = [
  {
    title: 'Apex Zero-Draft Zip Top', price: 148, oldPrice: 175, grade: 'Apex Grade', image: IMAGES.spotlight,
    desc: 'Tailored for high-velocity distance training. Constructed with recycled hydrophobic yarn and targeted micro-knit ventilation lattices that actively accelerate air cooling across high-heat zones.',
    specA: { icon: 'water_drop', label: 'Hydrophobic 4-Way' }, specB: { icon: 'thermostat', label: 'Adaptive Heat' },
  },
  {
    title: 'AeroShield Weave Windbreaker', price: 198, oldPrice: 230, grade: 'Storm Grade', image: IMAGES.hero,
    desc: 'A featherlight 42g/m² shell that blocks gusts while venting heat. Reflective piping keeps you visible from every angle at dawn and dusk.',
    specA: { icon: 'air', label: 'Wind-Tunnel Tuned' }, specB: { icon: 'visibility', label: '360° Reflective' },
  },
  {
    title: 'Feather-Shell Speed Short', price: 84, oldPrice: 98, grade: 'Sprint Grade', image: IMAGES.bottoms,
    desc: 'Laser-perforated hems and a bounce-free phone liner make this the lightest split short in the Series 04 lineup.',
    specA: { icon: 'bolt', label: 'Laser Perforated' }, specB: { icon: 'phone_iphone', label: 'Bounce-Free Liner' },
  },
  {
    title: 'Kinetic Recovery Tight', price: 112, oldPrice: 130, grade: 'Recovery Grade', image: IMAGES.tops,
    desc: 'Graduated compression and zero-friction diamond gusseting accelerate recovery between high-intensity sessions.',
    specA: { icon: 'restore', label: 'Graduated Compression' }, specB: { icon: 'eco', label: 'Recycled Yarn' },
  },
]

export const SWATCHES: Swatch[] = [
  { name: 'Mist Slate Blue', hex: '#829BB0' },
  { name: 'Pure Arctic White', hex: '#F5F7FA' },
  { name: 'Violet Eclipse', hex: '#5D4E75' },
  { name: 'Obsidian Core', hex: '#18181B' },
]

export const SIZES = ['XS', 'S', 'M', 'L', 'XL']

export const TRUST_STATS = [
  { value: '100%', label: 'Recycled Micro-Yarn' },
  { value: '< 42g', label: 'Featherweight Average' },
  { value: '500h+', label: 'Wind Tunnel Validated' },
  { value: 'Zero', label: 'Chafe Guaranteed' },
]

export const FOOTER_COLUMNS = [
  { title: 'Gear & Apparel', links: ['Performance Tops', 'Compression Layers', 'Aerodynamic Shorts', 'Outerwear & Shells', 'Footwear'] },
  { title: 'Client Care', links: ['Order Tracking', 'Returns & Exchanges', 'Sizing Matrix', 'Technical Consultation', 'Contact Concierge'] },
]
