import { Icon } from '../../LandingPage/shared'
import type { SizeOption, SizeSlug } from '../types'

interface SizePickerProps {
  sizes: SizeOption[]
  selected: SizeSlug | null
  selectedOption: SizeOption | undefined
  /** Set when Add to Bag was pressed with no size chosen. */
  error: boolean
  onChange: (size: SizeSlug) => void
}

export function SizePicker({ sizes, selected, selectedOption, error, onChange }: SizePickerProps) {
  return (
    <div id="product-size-picker" data-component="SizePicker" className="space-y-space-xs">
      <div className="flex items-center justify-between">
        <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
          Athlete sizing matrix
        </span>
        {/* placeholder: opens the size guide drawer. */}
        <button
          id="size-guide-trigger"
          type="button"
          className="font-label-technical text-label-technical uppercase tracking-wider text-tertiary-container transition-opacity hover:opacity-80"
        >
          Size guide &amp; fit
        </button>
      </div>

      <div data-element="size-option-grid" className="grid grid-cols-6 gap-space-xs">
        {sizes.map((size) => {
          const isSelected = selected === size.slug
          return (
            <button
              key={size.slug}
              data-element="size-option"
              type="button"
              disabled={!size.inStock}
              aria-pressed={isSelected}
              aria-label={size.inStock ? size.slug : `${size.slug} — sold out`}
              onClick={() => onChange(size.slug)}
              className={`rounded-lg border py-2.5 font-label-md text-label-md uppercase transition-all ${
                isSelected
                  ? 'border-primary bg-primary text-on-primary'
                  : size.inStock
                    ? 'border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary'
                    : 'cursor-not-allowed border-outline-variant/50 bg-surface-container-low text-on-surface-variant/40 line-through'
              }`}
            >
              {size.slug}
            </button>
          )
        })}
      </div>

      {error && (
        <p data-element="size-error" role="alert" className="flex items-center gap-1 font-body-sm text-body-sm text-error">
          <Icon name="error" className="text-[16px]" />
          Choose a size to continue.
        </p>
      )}

      {!error && selectedOption?.unitsLeft !== undefined && (
        <p
          data-element="size-stock-note"
          className="flex items-center gap-1 font-label-technical text-label-technical uppercase tracking-wider text-error"
        >
          <Icon name="bolt" className="text-[16px]" />
          Only {selectedOption.unitsLeft} left in {selectedOption.slug}
        </p>
      )}
    </div>
  )
}
