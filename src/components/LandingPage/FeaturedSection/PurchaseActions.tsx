import { Icon } from '../shared'

interface PurchaseActionsProps {
  price: number
  added: boolean
  liked: boolean
  onAdd: () => void
  onToggleLike: () => void
}

export default function PurchaseActions({ price, added, liked, onAdd, onToggleLike }: PurchaseActionsProps) {
  return (
    <>
      <div className="pt-space-md flex flex-col sm:flex-row items-center gap-space-sm">
        <button
          onClick={onAdd}
          className={`w-full sm:flex-1 font-label-lg text-label-lg py-4 rounded-lg shadow-lg flex items-center justify-center gap-space-xs transition-all active:scale-[0.99] ${
            added ? 'bg-tertiary-container text-on-tertiary' : 'bg-surface-container-lowest text-primary hover:bg-surface-bright'
          }`}
        >
          <Icon name="shopping_bag" className="text-[20px]" />
          <span>{added ? 'Added to Bag!' : `Add to Bag — ₱${price.toFixed(2)}`}</span>
        </button>
        <button
          aria-label="Add to Wishlist"
          aria-pressed={liked}
          onClick={onToggleLike}
          className="w-full sm:w-auto p-4 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary flex items-center justify-center transition-colors"
        >
          <Icon name="favorite" className={liked ? 'text-on-tertiary-container' : ''} />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-space-md pt-space-xs text-on-primary-container font-label-technical text-label-technical">
        <div className="flex items-center gap-1">
          <Icon name="local_shipping" className="text-[16px] text-on-tertiary-container" />
          <span>Free Express Shipping</span>
        </div>
        <div className="flex items-center gap-1">
          <Icon name="published_with_changes" className="text-[16px] text-on-tertiary-container" />
          <span>30-Day Field Trial Guarantee</span>
        </div>
      </div>
    </>
  )
}
