/** Peso formatting, e.g. 118 -> "₱118" or "₱118.00" with `decimals`. */
export function formatPrice(value: number, decimals = false): string {
  return `₱${value.toLocaleString('en-PH', {
    minimumFractionDigits: decimals ? 2 : 0,
    maximumFractionDigits: decimals ? 2 : 0,
  })}`
}

/** 1 -> "01", used by the gallery counter. */
export function pad(value: number): string {
  return String(value).padStart(2, '0')
}

/** Discount off the compare-at price, rounded for the savings badge. */
export function discountPercent(price: number, compareAtPrice?: number): number | undefined {
  if (!compareAtPrice || compareAtPrice <= price) return undefined
  return Math.round((1 - price / compareAtPrice) * 100)
}

/** ISO date -> "12 Mar 2026" for review timestamps. */
export function formatReviewDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-PH', { day: 'numeric', month: 'short', year: 'numeric' })
}
