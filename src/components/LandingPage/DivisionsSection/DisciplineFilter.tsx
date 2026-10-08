import { Icon } from '../shared'
import { DISCIPLINES } from './data'

interface DisciplineFilterProps {
  active: number
  onChange: (index: number) => void
}

export default function DisciplineFilter({ active, onChange }: DisciplineFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-space-xl text-nowrap">
      {DISCIPLINES.map((d, i) => {
        const isActive = i === active
        return (
          <button
            key={d.label}
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
