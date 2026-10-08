import { Container } from '../shared'
import ThermalCard from './ThermalCard'
import HydroGlideCard from './HydroGlideCard'
import CircularLifecycleCard from './CircularLifecycleCard'

export default function AnatomySection() {
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
