import { IMAGES } from '../shared'
import type { Spotlight, Swatch } from './types'

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
