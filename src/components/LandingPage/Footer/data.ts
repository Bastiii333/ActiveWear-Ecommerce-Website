export interface FooterColumn {
  title: string
  links: string[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  { title: 'Gear & Apparel', links: ['Performance Tops', 'Compression Layers', 'Aerodynamic Shorts', 'Outerwear & Shells', 'Footwear'] },
  { title: 'Client Care', links: ['Order Tracking', 'Returns & Exchanges', 'Sizing Matrix', 'Technical Consultation', 'Contact Concierge'] },
]

export const PAYMENT_METHODS = ['Apple Pay', 'Visa', 'Mastercard']
