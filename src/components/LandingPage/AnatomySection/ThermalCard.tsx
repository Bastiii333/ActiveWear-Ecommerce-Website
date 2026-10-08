import CardIcon from './CardIcon'

export default function ThermalCard() {
  return (
    <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
      <div>
        <CardIcon name="scatter_plot" />
        <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mb-space-xs">Thermal Gradient Mapping</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Zone-calibrated micro-mesh fibers expand dynamically when exposed to perspiration, increasing exhaust
          ventilation by up to 340%.
        </p>
      </div>

      <div className="mt-space-lg bg-surface-container-lowest p-space-md rounded-lg flex items-center justify-center">
        <svg
          className="w-full h-32 text-tertiary-container"
          fill="none"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Thermal gradient curve from warm-up to max exhaust"
        >
          <path d="M10 80 Q 50 10, 100 50 T 190 20" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
          <path d="M10 80 Q 50 10, 100 50 T 190 20 L 190 95 L 10 95 Z" fill="currentColor" fillOpacity="0.12" />
          <circle cx="100" cy="50" r="4" fill="currentColor" />
          <circle cx="190" cy="20" r="4" fill="currentColor" />
          <text x="10" y="94" className="fill-on-surface-variant" fontFamily="Inter" fontSize="8">WARM-UP</text>
          <text x="80" y="94" className="fill-tertiary" fontFamily="Inter" fontSize="8" fontWeight="bold">OPTIMAL ZONE</text>
          <text x="155" y="94" className="fill-error" fontFamily="Inter" fontSize="8">MAX EXHAUST</text>
        </svg>
      </div>
    </div>
  )
}
