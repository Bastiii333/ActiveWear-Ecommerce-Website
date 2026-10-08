import { useState } from 'react'
import Icon from './Icon'
import DivisionCard from './DivisionCard'
import { DISCIPLINES, DIVISIONS } from '../data/content'

export default function PerformanceDivisions() {
  const [active, setActive] = useState(0)

  return (
    <section className="w-full bg-surface py-margin-md lg:py-margin-lg border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <div className="flex flex-wrap items-center gap-space-xs mb-space-xs">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
              <span className="font-label-technical text-label-technical text-tertiary-container uppercase tracking-widest font-bold">Curation Matrix // Lab Series 04</span>
              <span className="mx-1 text-outline-variant">•</span>
              <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded-full">240 Active Configurations</span>
            </div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight uppercase">Performance Divisions</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            Biomechanically calibrated apparel engineered for thermal equilibrium, hyper-stretch recovery, and wind-tunnel aero-efficiency.
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-space-xl text-nowrap">
          {DISCIPLINES.map((d, i) => {
            const isActive = i === active
            return (
              <button
                key={d.label}
                onClick={() => setActive(i)}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {DIVISIONS.map((d) => (
            <DivisionCard key={d.code} division={d} />
          ))}
        </div>

        <div className="mt-space-xl bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container-high flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0 shadow-md">
              <Icon name="grid_view" className="text-[24px]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface font-bold">Active Inventory Sync: 100% Online</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Browse complete Series 04 drops, lab archives, technical base layers, and unisex silhouettes.
              </p>
            </div>
          </div>
          <a href="#" className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-space-xs bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg shadow-md transition-all duration-200 transform hover:-translate-y-0.5">
            <span className="font-label-technical uppercase tracking-wider">View All 240+ ActiveWear Products</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </a>
        </div>
      </div>
    </section>
  )
}
