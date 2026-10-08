import { Icon } from '../shared'
import type { Spotlight } from './types'

interface ProductGalleryProps {
  product: Spotlight
  index: number
  total: number
  onStep: (dir: 1 | -1) => void
}

const pad = (n: number) => String(n).padStart(2, '0')

const arrowBtn =
  'w-10 h-10 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/30 text-on-primary flex items-center justify-center transition-colors'

export default function ProductGallery({ product, index, total, onStep }: ProductGalleryProps) {
  return (
    <div className="lg:col-span-6 relative">
      <div className="relative w-full aspect-square bg-surface-container-lowest rounded-xl overflow-hidden p-space-md shadow-inner flex items-center justify-center">
        <img key={product.image + index} className="w-full h-full object-contain" alt={product.title} src={product.image} />

        <div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary px-3 py-1 rounded-full font-label-technical text-label-technical uppercase tracking-widest font-bold">
          {product.grade}
        </div>

        <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md py-space-xs px-space-sm rounded-lg flex justify-between items-center text-on-surface">
          {[product.specA, product.specB].map((spec) => (
            <span key={spec.label} className="font-label-technical text-label-technical uppercase tracking-wider flex items-center gap-1">
              <Icon name={spec.icon} className="text-[16px] text-tertiary-container" /> {spec.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-space-md px-space-xs">
        <div className="flex items-center gap-space-xs">
          <button aria-label="Previous product" onClick={() => onStep(-1)} className={arrowBtn}>
            <Icon name="arrow_back" />
          </button>
          <button aria-label="Next product" onClick={() => onStep(1)} className={arrowBtn}>
            <Icon name="arrow_forward" />
          </button>
        </div>
        <div className="flex items-center gap-1.5 font-label-technical text-label-technical text-on-primary-container">
          <span className="text-on-primary font-bold">{pad(index + 1)}</span> / <span>{pad(total)} INNOVATIONS</span>
        </div>
      </div>
    </div>
  )
}
