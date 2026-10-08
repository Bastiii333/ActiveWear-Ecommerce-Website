export interface TrustStat {
  value: string
  label: string
}

export const TRUST_STATS: TrustStat[] = [
  { value: '100%', label: 'Recycled Micro-Yarn' },
  { value: '< 42g', label: 'Featherweight Average' },
  { value: '500h+', label: 'Wind Tunnel Validated' },
  { value: 'Zero', label: 'Chafe Guaranteed' },
]
