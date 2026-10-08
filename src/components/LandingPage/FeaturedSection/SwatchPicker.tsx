import { SWATCHES } from './data'

interface SwatchPickerProps {
  selected: number
  onChange: (index: number) => void
}

export default function SwatchPicker({ selected, onChange }: SwatchPickerProps) {
  return (
    <div className="space-y-space-xs pt-space-xs">
      <div className="flex justify-between items-center">
        <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-primary-container">
          Selected Palette:
        </span>
        <span className="font-label-technical text-label-technical text-on-primary uppercase">{SWATCHES[selected].name}</span>
      </div>
      <div className="flex items-center gap-space-sm">
        {SWATCHES.map((s, i) => (
          <button
            key={s.name}
            aria-label={s.name}
            aria-pressed={selected === i}
            onClick={() => onChange(i)}
            style={{ backgroundColor: s.hex }}
            className={`w-8 h-8 rounded-full transition-all ${
              selected === i
                ? 'ring-2 ring-offset-2 ring-offset-primary-container ring-on-primary'
                : 'opacity-80 hover:opacity-100'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
