export interface Spec {
  icon: string
  label: string
}

export interface Spotlight {
  title: string
  desc: string
  image: string
  price: number
  oldPrice: number
  grade: string
  specA: Spec
  specB: Spec
}

export interface Swatch {
  name: string
  hex: string
}
