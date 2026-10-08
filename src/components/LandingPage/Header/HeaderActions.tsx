import { Icon, IMAGES } from '../shared'

const badgeBase =
  'absolute top-1 right-1 w-4 h-4 font-label-technical text-[10px] leading-none rounded-full flex items-center justify-center'

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-space-sm shrink-0">
      <button aria-label="Search" className="lg:hidden p-space-xs text-on-surface-variant hover:text-on-surface">
        <Icon name="search" />
      </button>
      <a href="#" aria-label="Wishlist" className="relative p-space-xs text-on-surface-variant hover:text-on-surface transition-colors">
        <Icon name="favorite" />
        <span className={`${badgeBase} bg-primary text-on-primary`}>0</span>
      </a>
      <a href="#" aria-label="Cart" className="relative p-space-xs text-on-surface-variant hover:text-on-surface transition-colors">
        <Icon name="shopping_bag" />
        <span className={`${badgeBase} bg-tertiary-container text-on-tertiary font-bold`}>2</span>
      </a>
      <a href="#" aria-label="Account" className="p-space-xs transition-opacity hover:opacity-90 ml-space-xs">
        <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={IMAGES.profile} />
      </a>
    </div>
  )
}
