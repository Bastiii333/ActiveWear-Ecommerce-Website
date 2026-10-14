import { Icon, IMAGES, Container } from '../shared'
import { MATERIALS } from './data'

// CardIcon
function CardIcon({ name }: { name: string }) {
  return (
    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest text-tertiary-container flex items-center justify-center shadow-sm mb-space-md">
      <Icon name={name} />
    </div>
  )
}

// CircularLifecycleCard
function CircularLifecycleCard() {
  return (
    <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
      <div>
        <CardIcon name="all_inclusive" />
        <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mb-space-xs">Circular Lifecycle</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Every single ActiveWear garment can be returned at end-of-life through our closed-loop re-polymerization
          network.
        </p>
      </div>

      <div className="mt-space-lg space-y-space-sm bg-surface-container-lowest p-space-md rounded-lg">
        {MATERIALS.map((m, i) => (
          <div key={m.label} className={i > 0 ? 'pt-space-xs' : ''}>
            <div className="flex items-center justify-between text-on-surface mb-space-sm">
              <span className="font-label-technical text-label-technical uppercase">{m.label}</span>
              <span className="font-label-technical text-label-technical font-bold text-tertiary-container">{m.pct}%</span>
            </div>
            <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden">
              <div className="h-full bg-tertiary-container rounded-full" style={{ width: `${m.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// HydroGlideCard
function HydroGlideCard() {
  return (
    <div className="relative bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col justify-end p-space-lg group min-h-[360px]">
      <img
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        alt="Macro shot of waterproof stretch yarn with water droplets beading"
        src={IMAGES.fabric}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

      <div className="relative z-10 text-on-primary space-y-space-xs">
        <span className="inline-block font-label-technical text-label-technical uppercase tracking-wider text-tertiary-fixed bg-tertiary-container/80 px-2 py-0.5 rounded backdrop-blur-sm">
          Nanotech Water Beading
        </span>
        <h3 className="font-headline-sm text-headline-sm uppercase">HydroGlide Matrix</h3>
        <p className="font-body-sm text-body-sm text-on-primary-container">
          Perfluorocarbon-free hydrophobic finish causes precipitation to roll off effortlessly while permitting
          bi-directional vapor release.
        </p>
      </div>
    </div>
  )
}

// ThermalCard
function ThermalCard() {
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

// AnatomySection
export function AnatomySection() {
  return (
    <section className="w-full bg-surface-container-lowest py-margin-md lg:py-margin-lg">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-technical text-label-technical text-tertiary-container uppercase tracking-widest block mb-space-xs">
            Engineering Precision
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface">
            Anatomy of relentless movement
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            From micro-perforated sweat mapping to kinetic tensile recovery, every garment is an athletic instrument.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          <ThermalCard />
          <HydroGlideCard />
          <CircularLifecycleCard />
        </div>
      </Container>
    </section>
  )
}
