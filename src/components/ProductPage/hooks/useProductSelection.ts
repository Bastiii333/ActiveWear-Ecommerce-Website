import { useEffect, useMemo, useRef, useState } from 'react'
import type { AddToBagPayload, ProductDetail, SizeSlug } from '../types'

export interface ProductSelection {
  colorId: string
  color: ProductDetail['colors'][number]
  size: SizeSlug | null
  sizeOption: ProductDetail['sizes'][number] | undefined
  quantity: number
  liked: boolean
  /** True for ~2s after a successful add, so the CTA can confirm. */
  added: boolean
  /** Set when the shopper hits Add to Bag without picking a size. */
  sizeError: boolean
  setColor: (colorId: string) => void
  setSize: (size: SizeSlug) => void
  setQuantity: (quantity: number) => void
  toggleLiked: () => void
  addToBag: () => void
  buyNow: () => void
}

/** Max units a shopper can put in the bag in one go. */
const MAX_QUANTITY = 10

interface Options {
  product: ProductDetail
  onAddToBag?: (payload: AddToBagPayload) => void
  onBuyNow?: (payload: AddToBagPayload) => void
}

/**
 * Owns every buy-box choice. The handlers are injected so a container can swap
 * the local no-ops for `POST /api/cart/items` without touching the UI.
 */
export function useProductSelection({ product, onAddToBag, onBuyNow }: Options): ProductSelection {
  const [colorId, setColorId] = useState(product.colors[0]?.id ?? '')
  const [size, setSizeState] = useState<SizeSlug | null>(null)
  const [quantity, setQuantityState] = useState(1)
  const [liked, setLiked] = useState(false)
  const [added, setAdded] = useState(false)
  const [sizeError, setSizeError] = useState(false)
  const addedTimer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(addedTimer.current), [])

  const color = useMemo(
    () => product.colors.find((c) => c.id === colorId) ?? product.colors[0],
    [product.colors, colorId],
  )
  const sizeOption = useMemo(() => product.sizes.find((s) => s.slug === size), [product.sizes, size])

  const setSize = (next: SizeSlug) => {
    setSizeState(next)
    setSizeError(false)
  }

  const setQuantity = (next: number) => setQuantityState(Math.min(MAX_QUANTITY, Math.max(1, next)))

  /** Returns the cart payload, or null when the form is incomplete. */
  const buildPayload = (): AddToBagPayload | null => {
    if (!size) {
      setSizeError(true)
      return null
    }
    return { productId: product.id, colorId, size, quantity }
  }

  const addToBag = () => {
    const payload = buildPayload()
    if (!payload) return

    onAddToBag?.(payload)
    setAdded(true)
    window.clearTimeout(addedTimer.current)
    addedTimer.current = window.setTimeout(() => setAdded(false), 2000)
  }

  const buyNow = () => {
    const payload = buildPayload()
    if (payload) onBuyNow?.(payload)
  }

  return {
    colorId,
    color,
    size,
    sizeOption,
    quantity,
    liked,
    added,
    sizeError,
    setColor: setColorId,
    setSize,
    setQuantity,
    toggleLiked: () => setLiked((value) => !value),
    addToBag,
    buyNow,
  }
}
