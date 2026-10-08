import { HERO_METRICS } from './data'

export default function HeroMetrics() {
  return (
    <div className="pt-space-md grid grid-cols-3 gap-space-md max-w-lg bg-surface-container-low/70 p-space-md rounded-xl backdrop-blur-sm">
      {HERO_METRICS.map((m) => (
        <div key={m.label}>
          <div className={`font-headline-md text-headline-md font-bold tracking-tight ${m.accent ? 'text-tertiary-container' : 'text-on-surface'}`}>
            {m.value}
          </div>
          <div className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider mt-0.5">
            {m.label}
          </div>
        </div>
      ))}
    </div>
  )
}
