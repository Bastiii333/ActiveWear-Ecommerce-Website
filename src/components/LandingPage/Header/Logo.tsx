import { IMAGES } from '../shared'

export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-space-sm shrink-0">
      <img alt="ActiveWear Brand Logo" className="h-8 w-auto object-contain" src={IMAGES.logo} />
      <span className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-tight">ActiveWear</span>
    </a>
  )
}
