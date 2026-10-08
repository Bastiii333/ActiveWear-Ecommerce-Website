import { Icon } from '../shared'

export default function SearchBox() {
  return (
    <div className="relative hidden lg:flex items-center w-full max-w-xs bg-surface-container-low rounded-lg px-space-sm py-space-xs">
      <Icon name="search" className="text-on-surface-variant text-[20px] mr-space-xs" />
      <input
        type="text"
        placeholder="Search gear, apparel..."
        aria-label="Search"
        className="bg-transparent w-full text-on-surface font-body-sm text-body-sm focus:outline-none placeholder:text-on-surface-variant/60"
      />
      <span className="font-label-technical text-label-technical text-on-surface-variant bg-surface-container-lowest px-1.5 py-0.5 rounded shadow-sm">
        ⌘K
      </span>
    </div>
  )
}
