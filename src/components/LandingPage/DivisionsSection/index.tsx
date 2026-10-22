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
    <div data-component="DivisionDisciplineFilter" className="flex items-center gap-2 overflow-x-auto pb-2 mb-space-xl text-nowrap">
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
    <article data-component="DivisionCard" className="group bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container-high/70 relative">
      <DivisionMedia division={d} />

      <div className="space-y-space-sm pt-space-xs">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="font-label-technical text-label-technical uppercase tracking-widest text-tertiary-container font-bold">
              {d.eyebrow}
            </div>
            <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface tracking-tight">{d.title}</h3>
          </div>
          <span className="font-label-technical text-label-technical bg-surface-container-low px-2 py-1 rounded text-on-surface-variant font-bold whitespace-nowrap">
            From ₱{d.price}
          </span>
        </div>

        <p className="font-body-sm text-body-sm text-on-surface-variant">{d.description}</p>

        <DivisionMetrics metrics={d.metrics} />

        <div className="pt-space-xs flex items-center gap-space-xs">
          <button data-element="division-cta" className="group/btn flex-1 bg-primary-container hover:bg-primary text-on-primary py-3 px-space-md rounded-lg transition-all duration-200 flex items-center justify-between shadow-md hover:shadow-lg">
            <span className="font-label-technical uppercase tracking-wider text-[12px]">{d.cta}</span>
            <Icon name="arrow_forward" className="text-[18px] transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
          <a
            href="#"
            aria-label={`Quick look ${d.title}`}
            data-element="division-quick-look"
            className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors"
          >
            <Icon name="tune" className="text-[20px]" />
          </a>
        </div>

        <div data-element="division-system-code" className="font-label-technical text-[10px] text-outline tracking-widest uppercase flex items-center justify-between pt-0.5">
          <span>SYS CODE: {d.sysCode}</span>
          <span>VALIDATED: LAB 4</span>
        </div>
      </div>
    </article>
  )
}

// DivisionMedia
/** Image area of a division card: badges, DIV tag and the subcategory overlay. */
function DivisionMedia({ division: d }: { division: Division }) {
  return (
    <div data-component="DivisionMedia" className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
      <img
        data-element="division-image"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        alt={d.imageAlt}
        src={d.image}
      />

      <div className="absolute top-3 left-3 right-16 flex flex-wrap gap-1.5">
        <span data-element="division-badge" className="bg-surface-container-lowest/95 backdrop-blur-md px-2.5 py-1 rounded-full text-on-surface font-label-technical text-label-technical uppercase tracking-wider shadow-sm flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container" />
          {d.badgeA}
        </span>
        <span data-element="division-badge" className="bg-tertiary-container text-on-tertiary font-label-technical text-label-technical uppercase tracking-widest px-2 py-1 rounded-full shadow-sm font-bold">
          {d.badgeB}
        </span>
      </div>

      <div className="absolute top-3 right-3">
        <span data-element="division-code" className="bg-primary-container/85 backdrop-blur-md text-on-primary font-label-technical text-label-technical uppercase px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
          DIV // {d.code}
        </span>
      </div>

      <div className="absolute inset-x-3 bottom-3 bg-primary-container/90 backdrop-blur-md rounded-lg p-2.5 text-on-primary shadow-md">
        <div className="flex items-center justify-between font-label-technical text-label-technical uppercase tracking-wider text-on-tertiary-container mb-1.5">
          <span>Key Subcategories</span>
          <span className="text-on-primary font-bold">{d.styles} Styles</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {d.subcategories.map((s) => (
            <a
              key={s}
              href="#"
              data-element="division-subcategory-link"
              className="bg-surface-container-lowest/15 hover:bg-surface-container-lowest/30 text-on-primary px-2 py-1 rounded text-label-technical uppercase transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

// DivisionMetrics
function DivisionMetrics({ metrics }: { metrics: DivisionMetric[] }) {
  return (
    <div data-component="DivisionMetrics" className="grid grid-cols-3 gap-1.5 bg-surface-container-low/70 p-2 rounded-lg font-label-technical text-label-technical text-on-surface-variant uppercase text-center">
      {metrics.map((m) => (
        <div key={m.label} className="bg-surface-container-lowest py-1 rounded shadow-sm">
          <span className={`block font-bold ${m.accent ? 'text-tertiary-container' : 'text-on-surface'}`}>{m.value}</span>
          <span className="text-[10px] text-outline">{m.label}</span>
        </div>
      ))}
    </div>
  )
}

// DivisionsHeader
function DivisionsHeader() {
  return (
    <div data-component="DivisionsHeader" className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg">
      <div>
        <div className="flex flex-wrap items-center gap-space-xs mb-space-xs">
          <StatusDot />
          <span className="font-label-technical text-label-technical text-tertiary-container uppercase tracking-widest font-bold">
            Curation Matrix // Lab Series 04
          </span>
          <span className="mx-1 text-outline-variant">•</span>
          <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded-full">
            240 Active Configurations
          </span>
        </div>
        <h2 id="divisions-heading" className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase">
          Performance Divisions
        </h2>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
        Biomechanically calibrated apparel engineered for thermal equilibrium, hyper-stretch recovery, and wind-tunnel
        aero-efficiency.
      </p>
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
