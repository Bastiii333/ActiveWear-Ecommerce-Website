import { TRUST_STATS } from './data'

export default function TrustStats() {
  return (
    <div className="pt-space-lg grid grid-cols-2 md:grid-cols-4 gap-space-lg w-full max-w-4xl border-t border-surface-container-lowest/10">
      {TRUST_STATS.map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-headline-sm text-headline-sm font-bold text-on-primary">{s.value}</div>
          <div className="font-label-technical text-label-technical text-on-primary-container uppercase tracking-wider mt-1">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
