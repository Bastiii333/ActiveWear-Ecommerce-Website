import { IMAGES } from '../shared'

export default function HydroGlideCard() {
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
