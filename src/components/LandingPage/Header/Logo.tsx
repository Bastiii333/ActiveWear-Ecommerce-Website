import { IMAGES } from '../shared'


export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-space-sm shrink-0">
      <img alt="ActiveWear Brand Logo" className="h-12 w-auto object-contain" src={IMAGES.logo} />
    </a>
  )
}
