import Icon from './Icon'
import { IMAGES } from '../data/images'
import { HERO_METRICS } from '../data/content'

export default function Hero() {
  return (
    <section className="relative w-full bg-surface-container-lowest overflow-hidden">
      <div className="absolute -top-32 -right-24 w-[700px] h-[700px] bg-tertiary-fixed/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-36 w-[500px] h-[500px] bg-surface-container-high/60 rounded-full blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-gutter py-space-xl lg:py-margin-lg relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 space-y-space-lg">
            <div className="inline-flex items-center gap-space-xs bg-surface-container-low px-space-md py-1 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
              <span className="font-label-technical text-label-technical text-on-surface uppercase tracking-wider">Spring/Summer Lab Drop • Series 04</span>
            </div>
            <div className="space-y-space-xs">
              <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero tracking-tighter text-on-surface uppercase leading-[0.95]">
                Move With<br />
                <span className="text-tertiary-container drop-shadow-sm">Confidence</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl pt-space-xs">
                Engineered for relentless motion, sculpted for everyday endurance. Explore our high-performance technical silhouettes designed to transcend physical limits.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a href="#" className="inline-flex items-center justify-center gap-space-xs bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
                <span>Shop New Collection</span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
              <a href="#featured-spotlight" className="inline-flex items-center justify-center gap-space-xs bg-surface-container-lowest text-primary-container font-label-lg text-label-lg px-space-lg py-3.5 rounded-lg shadow-sm hover:bg-surface-container-low transition-all">
                <Icon name="biotech" className="text-[18px]" />
                <span>Explore Technology</span>
              </a>
            </div>
            <div className="pt-space-md grid grid-cols-3 gap-space-md max-w-lg bg-surface-container-low/70 p-space-md rounded-xl backdrop-blur-sm">
              {HERO_METRICS.map((m) => (
                <div key={m.label}>
                  <div className={`font-headline-md text-headline-md font-bold tracking-tight ${m.accent ? 'text-tertiary-container' : 'text-on-surface'}`}>{m.value}</div>
                  <div className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-surface-container-high">
              <img
                className="w-full h-full object-cover object-top"
                alt="Athletic model wearing an olive windbreaker jacket and technical joggers"
                src={IMAGES.hero}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-lg shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-tertiary-container text-on-tertiary flex items-center justify-center">
                    <Icon name="air" className="text-[20px]" />
                  </div>
                  <div>
                    <p className="font-label-lg text-label-lg text-on-surface leading-tight">AeroShield™ Weave</p>
                    <p className="font-label-technical text-label-technical text-on-surface-variant">42g/m² Featherlight Shell</p>
                  </div>
                </div>
                <span className="hidden sm:inline font-label-technical text-label-technical bg-surface-container px-2 py-1 rounded text-tertiary-container font-bold">AERODYNAMICS</span>
              </div>
              <div className="absolute top-4 right-4 bg-primary-container text-on-primary font-label-technical text-label-technical uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                Series 04
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
