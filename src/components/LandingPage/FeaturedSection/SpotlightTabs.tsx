import { SPOTLIGHT_TABS } from './data'

interface SpotlightTabsProps {
  active: number
  onChange: (index: number) => void
}

export default function SpotlightTabs({ active, onChange }: SpotlightTabsProps) {
  return (
    <div className="inline-flex p-1 bg-surface-container-lowest rounded-xl shadow-sm gap-1" role="tablist">
      {SPOTLIGHT_TABS.map((t, i) => (
        <button
          key={t}
          role="tab"
          aria-selected={active === i}
          onClick={() => onChange(i)}
          className={`px-space-md py-2 rounded-lg font-label-lg text-label-lg transition-all ${
            active === i ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
