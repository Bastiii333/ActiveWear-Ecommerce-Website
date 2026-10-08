import CardIcon from './CardIcon'
import { MATERIALS } from './data'

export default function CircularLifecycleCard() {
  return (
    <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
      <div>
        <CardIcon name="all_inclusive" />
        <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mb-space-xs">Circular Lifecycle</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Every single ActiveWear garment can be returned at end-of-life through our closed-loop re-polymerization
          network.
        </p>
      </div>

      <div className="mt-space-lg space-y-space-sm bg-surface-container-lowest p-space-md rounded-lg">
        {MATERIALS.map((m, i) => (
          <div key={m.label} className={i > 0 ? 'pt-space-xs' : ''}>
            <div className="flex items-center justify-between text-on-surface mb-space-sm">
              <span className="font-label-technical text-label-technical uppercase">{m.label}</span>
              <span className="font-label-technical text-label-technical font-bold text-tertiary-container">{m.pct}%</span>
            </div>
            <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden">
              <div className="h-full bg-tertiary-container rounded-full" style={{ width: `${m.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
