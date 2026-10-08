import type { Division } from './types'

/** Image area of a division card: badges, DIV tag and the subcategory overlay. */
export default function DivisionMedia({ division: d }: { division: Division }) {
  return (
    <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
      <img
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        alt={d.imageAlt}
        src={d.image}
      />

      <div className="absolute top-3 left-3 right-16 flex flex-wrap gap-1.5">
        <span className="bg-surface-container-lowest/95 backdrop-blur-md px-2.5 py-1 rounded-full text-on-surface font-label-technical text-label-technical uppercase tracking-wider shadow-sm flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container" />
          {d.badgeA}
        </span>
        <span className="bg-tertiary-container text-on-tertiary font-label-technical text-label-technical uppercase tracking-widest px-2 py-1 rounded-full shadow-sm font-bold">
          {d.badgeB}
        </span>
      </div>

      <div className="absolute top-3 right-3">
        <span className="bg-primary-container/85 backdrop-blur-md text-on-primary font-label-technical text-label-technical uppercase px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
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
