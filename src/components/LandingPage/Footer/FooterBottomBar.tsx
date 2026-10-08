import { PAYMENT_METHODS } from './data'

export default function FooterBottomBar() {
  return (
    <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md border-t border-surface-container-high">
      <div className="flex items-center gap-space-md">
        {PAYMENT_METHODS.map((p) => (
          <span
            key={p}
            className="font-label-technical text-label-technical uppercase tracking-wider bg-surface-container-low px-space-sm py-1 rounded text-on-surface-variant"
          >
            {p}
          </span>
        ))}
      </div>
      <p className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest">
        © 2024 ACTIVEWEAR LABS INC. ALL RIGHTS RESERVED.
      </p>
    </div>
  )
}
