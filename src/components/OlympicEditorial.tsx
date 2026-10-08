import Icon from './Icon'
import { IMAGES } from '../data/images'
import { TRUST_STATS } from '../data/content'

export default function OlympicEditorial() {
  return (
    <section className="relative w-full overflow-hidden bg-primary text-on-primary py-margin-lg">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen scale-105"
        style={{ backgroundImage: `url('${IMAGES.athletes}')` }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-gutter flex flex-col items-center text-center space-y-space-md">
        <div className="inline-flex items-center gap-2 bg-surface-container-lowest/15 backdrop-blur-md px-space-md py-1 rounded-full">
          <Icon name="verified" className="text-tertiary-fixed text-[18px]" />
          <span className="font-label-technical text-label-technical text-on-primary uppercase tracking-widest">Olympic Grade Standard</span>
        </div>
        <h2 className="font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tighter max-w-4xl leading-tight">
          Tested By Olympians.<br />Designed For You.
        </h2>
        <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
          Every seam, perforation, and stitch undergoes over 500 hours of biomechanical wind-tunnel and high-altitude field validation.
        </p>
        <div className="pt-space-md flex flex-wrap items-center justify-center gap-space-md">
          <a href="#" className="inline-flex items-center gap-space-xs bg-tertiary-container text-on-tertiary hover:opacity-90 font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg shadow-md transition-all">
            <span>Read The Field Reports</span>
            <Icon name="menu_book" className="text-[18px]" />
          </a>
          <a href="#" className="inline-flex items-center gap-space-xs bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-lg text-label-lg px-space-lg py-3.5 rounded-lg transition-colors">
            <span>@ActiveWearOfficial</span>
            <Icon name="open_in_new" className="text-[18px]" />
          </a>
        </div>
        <div className="pt-space-lg grid grid-cols-2 md:grid-cols-4 gap-space-lg w-full max-w-4xl border-t border-surface-container-lowest/10">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-headline-sm text-headline-sm font-bold text-on-primary">{s.value}</div>
              <div className="font-label-technical text-label-technical text-on-primary-container uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
