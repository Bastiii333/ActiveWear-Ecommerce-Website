import { Icon } from '../../LandingPage/shared'

interface QuantityStepperProps {
  value: number
  onChange: (value: number) => void
  max?: number
}

const stepBtn =
  'flex h-10 w-10 items-center justify-center text-on-surface transition-colors hover:bg-surface-container disabled:cursor-not-allowed disabled:text-on-surface-variant/40'

export function QuantityStepper({ value, onChange, max = 10 }: QuantityStepperProps) {
  return (
    <div id="product-quantity-stepper" data-component="QuantityStepper" className="flex items-center gap-space-sm">
      <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-surface-variant">
        Qty
      </span>
      <div className="flex items-center overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest">
        <button
          id="quantity-decrement"
          type="button"
          aria-label="Decrease quantity"
          disabled={value <= 1}
          onClick={() => onChange(value - 1)}
          className={stepBtn}
        >
          <Icon name="remove" className="text-[18px]" />
        </button>
        <span data-element="quantity-value" aria-live="polite" className="w-10 text-center font-label-lg text-label-lg text-on-surface">
          {value}
        </span>
        <button
          id="quantity-increment"
          type="button"
          aria-label="Increase quantity"
          disabled={value >= max}
          onClick={() => onChange(value + 1)}
          className={stepBtn}
        >
          <Icon name="add" className="text-[18px]" />
        </button>
      </div>
    </div>
  )
}
