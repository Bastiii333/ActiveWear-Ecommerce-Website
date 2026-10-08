import { Icon } from '../shared'
import DivisionMedia from './DivisionMedia'
import DivisionMetrics from './DivisionMetrics'
import type { Division } from './types'

export default function DivisionCard({ division: d }: { division: Division }) {
  return (
    <article className="group bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container-high/70 relative">
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
          <button className="group/btn flex-1 bg-primary-container hover:bg-primary text-on-primary py-3 px-space-md rounded-lg transition-all duration-200 flex items-center justify-between shadow-md hover:shadow-lg">
            <span className="font-label-technical uppercase tracking-wider text-[12px]">{d.cta}</span>
            <Icon name="arrow_forward" className="text-[18px] transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
          <a
            href="#"
            aria-label={`Quick look ${d.title}`}
            className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors"
          >
            <Icon name="tune" className="text-[20px]" />
          </a>
        </div>

        <div className="font-label-technical text-[10px] text-outline tracking-widest uppercase flex items-center justify-between pt-0.5">
          <span>SYS CODE: {d.sysCode}</span>
          <span>VALIDATED: LAB 4</span>
        </div>
      </div>
    </article>
  )
}
