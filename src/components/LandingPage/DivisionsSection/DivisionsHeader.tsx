import { StatusDot } from '../shared'

export default function DivisionsHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg">
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
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase">
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
