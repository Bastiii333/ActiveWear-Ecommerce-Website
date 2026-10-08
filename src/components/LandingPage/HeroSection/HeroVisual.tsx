import { Icon, IMAGES } from '../shared'

export default function HeroVisual() {
  return (
    <div className="lg:col-span-5 relative flex justify-center">
      <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-surface-container-high">
        <img
          className="w-full h-full object-cover object-top"
          alt="Athletic model wearing an olive windbreaker jacket and technical joggers"
          src={IMAGES.hero}
        />

        <div className="absolute top-4 right-4 bg-primary-container text-on-primary font-label-technical text-label-technical uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
          Series 04
        </div>

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
          <span className="hidden sm:inline font-label-technical text-label-technical bg-surface-container px-2 py-1 rounded text-tertiary-container font-bold">
            AERODYNAMICS
          </span>
        </div>
      </div>
    </div>
  )
}
