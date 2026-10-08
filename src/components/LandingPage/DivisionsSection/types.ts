export interface DivisionMetric {
  value: string
  label: string
  accent?: boolean
}

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
  metrics: DivisionMetric[]
  cta: string
  sysCode: string
}

export interface Discipline {
  icon: string
  label: string
  count: number
}
