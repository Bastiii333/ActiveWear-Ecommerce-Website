/** Weighted peso formatting, e.g. 148 -> "₱148". */
export function formatPrice(value: number): string {
  return `₱${value.toLocaleString('en-PH')}`
}
