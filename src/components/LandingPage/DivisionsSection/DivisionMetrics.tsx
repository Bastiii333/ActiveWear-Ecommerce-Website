import type { DivisionMetric } from './types'

export default function DivisionMetrics({ metrics }: { metrics: DivisionMetric[] }) {
  return (
    <div className="grid grid-cols-3 gap-1.5 bg-surface-container-low/70 p-2 rounded-lg font-label-technical text-label-technical text-on-surface-variant uppercase text-center">
      {metrics.map((m) => (
        <div key={m.label} className="bg-surface-container-lowest py-1 rounded shadow-sm">
          <span className={`block font-bold ${m.accent ? 'text-tertiary-container' : 'text-on-surface'}`}>{m.value}</span>
          <span className="text-[10px] text-outline">{m.label}</span>
        </div>
      ))}
    </div>
  )
}
