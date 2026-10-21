import { Icon } from '../../LandingPage/shared'
import { CATEGORY_TABS } from '../data'
import type { CategorySlug } from '../types'

interface CategoryTabsProps {
  active: CategorySlug
  /** Counts supplied by the catalog endpoint. Hidden until the API responds. */
  counts?: Partial<Record<CategorySlug, number>>
  onChange: (slug: CategorySlug) => void
}

export function CategoryTabs({ active, counts, onChange }: CategoryTabsProps) {
  return (
    <div
      role="group"
      aria-label="Product categories"
      className="grid grid-cols-2 gap-space-xs sm:grid-cols-3 lg:grid-cols-6"
    >
      {CATEGORY_TABS.map((tab) => {
        const isActive = tab.slug === active
        const count = counts?.[tab.slug]

        return (
          <button
            key={tab.slug}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(tab.slug)}
            className={`flex min-h-[92px] flex-col items-center justify-center gap-1 rounded-lg border px-space-xs py-space-sm text-center transition-colors ${
              isActive
                ? 'border-primary-container bg-primary-container text-on-primary'
                : 'border-surface-container-high bg-surface-container-lowest text-on-surface hover:border-outline-variant'
            }`}
          >
            <Icon name={tab.icon} className="text-[22px]" />
            <span className="font-label-technical text-label-technical uppercase tracking-widest">{tab.label}</span>
            {typeof count === 'number' && (
              <span
                className={`font-label-technical text-label-technical ${
                  isActive ? 'text-on-primary/60' : 'text-outline'
                }`}
              >
                {count} items
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
