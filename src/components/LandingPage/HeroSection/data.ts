export interface HeroMetric {
  value: string
  label: string
  accent?: boolean
}

export const HERO_METRICS: HeroMetric[] = [
  { value: '200+', label: 'Performance Cuts' },
  { value: '2,000+', label: 'Verified Reviews' },
  { value: '50,000+', label: 'Active Athletes', accent: true },
]
