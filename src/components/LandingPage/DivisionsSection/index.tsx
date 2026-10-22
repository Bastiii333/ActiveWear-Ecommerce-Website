import { Icon, StatusDot, Container } from '../shared'
import { useState } from 'react'
import { DISCIPLINES, DIVISIONS } from './data'
import type { DivisionMetric, Division } from './types'

// DisciplineFilter
interface DisciplineFilterProps {
  active: number
  onChange: (index: number) => void
}

function DisciplineFilter({ active, onChange }: DisciplineFilterProps) {
  return (
    <div data-component="DivisionDisciplineFilter" className="flex items-center justify-center gap-2 overflow-x-auto pb-2 mb-space-xl text-nowrap">
      {DISCIPLINES.map((d, i) => {
        const isActive = i === active
        return (
          <button
            key={d.label}
            data-element="discipline-tab"
            onClick={() => onChange(i)}
            aria-pressed={isActive}
            className={`px-space-md py-2 rounded-full font-label-technical text-label-technical uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all ${
              isActive
                ? 'bg-primary-container text-on-primary'
                : 'bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <Icon name={d.icon} className="text-[14px]" />
            <span>{d.label}</span>
            <span className={isActive ? 'bg-surface-container-lowest/20 text-on-primary px-1.5 rounded-full text-[10px]' : 'text-outline text-[10px]'}>
              {d.count}
            </span>
          </button>
        )
      })}
    </div>
  )
}

// DivisionCard
function DivisionCard({ division: d }: { division: Division }) {
  return (
    <article data-component="DivisionCard" className="group bg-surface-container-lowest pb-space-md shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container-high/70 relative">
      <DivisionMedia division={d} />

      <div className="flex flex-col items-center space-y-space-sm pt-space-md text-center">
        <div className="flex items-start justify-center gap-2 text-center">
          <div>
            <div className="font-label-technical text-label-technical uppercase tracking-widest text-tertiary-container font-bold">
              {d.eyebrow}
            </div>
            <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface tracking-tight">{d.title}</h3>
          </div>

        </div>

      

        <div className="pt-space-xs flex items-center justify-center gap-space-xs">


        </div>


      </div>
    </article>
  )
}

// DivisionMedia
/** Image area of a division card: badges, DIV tag and the subcategory overlay. */
function DivisionMedia({ division: d }: { division: Division }) {
  return (
    <div data-component="DivisionMedia" className="relative w-full aspect-[4/5] rounded-none overflow-hidden bg-surface-container-low mb-space-sm">
      <img
        data-element="division-image"
        className="w-full h-full rounded-t-xl rounded-b-none object-cover transition-transform duration-500 group-hover:scale-105"
        alt={d.imageAlt}
        src={d.image}
      />

    </div>
  )
}

// DivisionMetrics

// DivisionsHeader
function DivisionsHeader() {
  return (
    <div data-component="DivisionsHeader" className="flex flex-row lg:flex-col lg:items-center justify-between gap-space-md mb-space-lg">
      <div>

        <h2 id="divisions-heading" className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase">
          Categories
        </h2>
      </div>

    </div>
  )
}

// InventoryBanner
function InventoryBanner() {
  return (
    <div data-component="InventoryBanner" className="mt-space-xl bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container-high flex flex-col md:flex-row items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md">
        <div className="w-12 h-12 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0 shadow-md">
          <Icon name="grid_view" className="text-[24px]" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <StatusDot className="bg-emerald-500" />
            <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface font-bold">
              Active Inventory Sync: 100% Online
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Browse complete Series 04 drops, lab archives, technical base layers, and unisex silhouettes.
          </p>
        </div>
      </div>

      <a
        href="#"
        id="divisions-view-all-cta"
        className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-space-xs bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-0.5"
      >
        <span className="font-label-technical uppercase tracking-wider">View All 240+ ActiveWear Products</span>
        <Icon name="arrow_forward" className="text-[18px]" />
      </a>
    </div>
  )
}

// DivisionsSection
export function DivisionsSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="landing-divisions" data-component="DivisionsSection" className="w-full bg-surface py-margin-md lg:py-margin-lg border-t border-surface-container-high/60">
      <Container>
        <DivisionsHeader />
        <DisciplineFilter active={active} onChange={setActive} />

        <div data-element="divisions-grid" className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {DIVISIONS.map((d) => (
            <DivisionCard key={d.code} division={d} />
          ))}
        </div>

        <InventoryBanner />
      </Container>
    </section>
  )
}
