import { useState } from 'react'
import { Icon } from '../../LandingPage/shared'
import type { SpecGroup } from '../types'

interface SpecAccordionProps {
  groups: SpecGroup[]
  /** Id of the group expanded on first paint. */
  defaultOpenId?: string
}

export function SpecAccordion({ groups, defaultOpenId }: SpecAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null)

  return (
    <div className="divide-y divide-outline-variant border-y border-outline-variant">
      {groups.map((group) => {
        const isOpen = openId === group.id
        return (
          <div key={group.id}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`spec-panel-${group.id}`}
                onClick={() => setOpenId(isOpen ? null : group.id)}
                className="flex w-full items-center justify-between gap-space-sm py-space-md text-left transition-colors hover:text-on-surface"
              >
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg uppercase tracking-wider text-on-surface">
                  <Icon name={group.icon} className="text-[20px] text-on-surface-variant" />
                  {group.title}
                </span>
                <Icon
                  name="expand_more"
                  className={`text-[20px] text-on-surface-variant transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>

            {isOpen && (
              <dl id={`spec-panel-${group.id}`} className="grid gap-space-xs pb-space-md">
                {group.rows.map((row) => (
                  <div key={row.label} className="grid grid-cols-[120px_minmax(0,1fr)] gap-space-sm">
                    <dt className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
                      {row.label}
                    </dt>
                    <dd className="font-body-sm text-body-sm text-on-surface">{row.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        )
      })}
    </div>
  )
}
