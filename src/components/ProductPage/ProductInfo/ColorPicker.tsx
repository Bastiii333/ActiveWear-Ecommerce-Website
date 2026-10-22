import type { ColorOption } from '../types'

interface ColorPickerProps {
  colors: ColorOption[]
  selected: string
  onChange: (colorId: string) => void
}

export function ColorPicker({ colors, selected, onChange }: ColorPickerProps) {
  const current = colors.find((color) => color.id === selected)

  return (
    <div className="space-y-space-xs">
      <div className="flex items-center justify-between">
        <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
          Selected palette
        </span>
        <span className="font-label-technical text-label-technical uppercase text-on-surface">{current?.name}</span>
      </div>
      <div className="flex items-center gap-space-sm">
        {colors.map((color) => (
          <button
            key={color.id}
            type="button"
            aria-label={color.name}
            aria-pressed={selected === color.id}
            onClick={() => onChange(color.id)}
            style={{ backgroundColor: color.hex }}
            className={`h-9 w-9 rounded-full border border-outline-variant/70 transition-all ${
              selected === color.id
                ? 'ring-2 ring-primary ring-offset-2 ring-offset-surface-container-lowest'
                : 'opacity-85 hover:opacity-100'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
