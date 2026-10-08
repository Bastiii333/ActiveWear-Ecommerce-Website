import { IMAGES } from '../shared'
import type { Discipline, Division } from './types'

export const DISCIPLINES: Discipline[] = [
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
