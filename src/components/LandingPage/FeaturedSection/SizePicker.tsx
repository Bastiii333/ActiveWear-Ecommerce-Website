import { SIZES } from './data'

interface SizePickerProps {
  selected: string
  onChange: (size: string) => void
}

export default function SizePicker({ selected, onChange }: SizePickerProps) {
  return (
    <div className="space-y-space-xs pt-space-xs">
      <div className="flex justify-between items-center">
        <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-primary-container">
          Athlete Sizing Matrix
        </span>
        <button className="font-label-technical text-label-technical text-on-tertiary-container hover:underline uppercase tracking-wider">
          Size Guide &amp; Fit
        </button>
      </div>
      <div className="grid grid-cols-5 gap-space-xs">
        {SIZES.map((s) => (
          <button
            key={s}
            aria-pressed={selected === s}
            onClick={() => onChange(s)}
            className={`py-2.5 rounded font-label-md text-label-md uppercase transition-all ${
              selected === s
                ? 'bg-surface-container-lowest text-primary font-bold shadow-sm'
                : 'bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
