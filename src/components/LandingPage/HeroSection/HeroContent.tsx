import { Icon, StatusDot } from '../shared'
import HeroMetrics from './HeroMetrics'

export default function HeroContent() {
  return (
    <div className="lg:col-span-7 space-y-space-lg">
      <div className="inline-flex items-center gap-space-xs bg-surface-container-low px-space-md py-1 rounded-full shadow-sm">
        <StatusDot />
        <span className="font-label-technical text-label-technical text-on-surface uppercase tracking-wider">
          Spring/Summer Lab Drop • Series 04
        </span>
      </div>

      <div className="space-y-space-xs">
        <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface uppercase">
          Move With
          <br />
          <span className="text-tertiary-container">Confidence</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl pt-space-xs">
          Engineered for relentless motion, sculpted for everyday endurance. Explore our high-performance technical
          silhouettes designed to transcend physical limits.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-space-xs bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <span>Shop New Collection</span>
          <Icon name="arrow_forward" className="text-[18px]" />
        </a>
        <a
          href="#featured-spotlight"
          className="inline-flex items-center justify-center gap-space-xs bg-surface-container-lowest text-primary-container font-label-lg text-label-lg px-space-lg py-3.5 rounded-lg shadow-sm hover:bg-surface-container-low transition-all"
        >
          <Icon name="biotech" className="text-[18px]" />
          <span>Explore Technology</span>
        </a>
      </div>

      <HeroMetrics />
    </div>
  )
}
