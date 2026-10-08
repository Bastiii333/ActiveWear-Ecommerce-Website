import Icon from './Icon'
import type { Division } from '../data/content'

export default function DivisionCard({ division: d }: { division: Division }) {
  return (
    <div className="group bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container-high/70 relative">
      <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={d.imageAlt}
          src={d.image}
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="bg-surface-container-lowest/95 backdrop-blur-md px-2.5 py-1 rounded-full text-on-surface font-label-technical text-label-technical uppercase tracking-wider shadow-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container" />
            {d.badgeA}
          </span>
          <span className="bg-tertiary-container text-on-tertiary font-label-technical text-label-technical uppercase tracking-widest px-2 py-1 rounded-full shadow-sm font-bold">
            {d.badgeB}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-primary-container/85 backdrop-blur-md text-on-primary font-label-technical text-label-technical uppercase px-2 py-0.5 rounded shadow-sm">
            DIV // {d.code}
          </span>
        </div>
        <div className="absolute inset-x-3 bottom-3 bg-primary-container/90 backdrop-blur-md rounded-lg p-2.5 text-on-primary transition-all duration-300 opacity-95 group-hover:opacity-100 shadow-md">
          <div className="flex items-center justify-between font-label-technical text-label-technical uppercase tracking-wider text-on-tertiary-container mb-1.5">
            <span>Key Subcategories</span>
            <span className="text-on-primary font-bold">{d.styles} Styles</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {d.subcategories.map((s) => (
              <a key={s} href="#" className="bg-surface-container-lowest/15 hover:bg-surface-container-lowest/30 text-on-primary px-2 py-1 rounded text-label-technical uppercase transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-space-sm pt-space-xs">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="font-label-technical text-label-technical uppercase tracking-widest text-tertiary-container font-bold">{d.eyebrow}</div>
            <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface tracking-tight">{d.title}</h3>
          </div>
          <span className="font-label-technical text-label-technical bg-surface-container-low px-2 py-1 rounded text-on-surface-variant font-bold whitespace-nowrap">From ${d.price}</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{d.description}</p>

        <div className="grid grid-cols-3 gap-1.5 bg-surface-container-low/70 p-2 rounded-lg font-label-technical text-label-technical text-on-surface-variant uppercase text-center">
          {d.metrics.map((m) => (
            <div key={m.label} className="bg-surface-container-lowest py-1 rounded shadow-sm">
              <span className={`block font-bold ${m.accent ? 'text-tertiary-container' : 'text-on-surface'}`}>{m.value}</span>
              <span className="text-[10px] text-outline">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="pt-space-xs flex items-center gap-space-xs">
          <button className="group/btn flex-1 bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg py-3 px-space-md rounded-lg transition-all duration-200 flex items-center justify-between shadow-md hover:shadow-lg">
            <span className="font-label-technical uppercase tracking-wider text-[12px]">{d.cta}</span>
            <Icon name="arrow_forward" className="text-[18px] transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
          <a href="#" aria-label={`Quick look ${d.title}`} className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors">
            <Icon name="tune" className="text-[20px]" />
          </a>
        </div>
        <div className="font-label-technical text-[10px] text-outline tracking-widest uppercase flex items-center justify-between pt-0.5">
          <span>SYS CODE: {d.sysCode}</span>
          <span>VALIDATED: LAB 4</span>
        </div>
      </div>
    </div>
  )
}
