import { useState } from 'react'
import SwatchPicker from './SwatchPicker'
import SizePicker from './SizePicker'
import PurchaseActions from './PurchaseActions'
import type { Spotlight } from './types'

export default function ProductDetails({ product }: { product: Spotlight }) {
  const [swatch, setSwatch] = useState(0)
  const [size, setSize] = useState('S')
  const [added, setAdded] = useState(false)
  const [liked, setLiked] = useState(false)

  const save = Math.round((1 - product.price / product.oldPrice) * 100)

  const addToBag = () => {
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="lg:col-span-6 space-y-space-md">
      <div>
        <div className="font-label-technical text-label-technical text-on-tertiary-container uppercase tracking-widest">
          AeroLab Series 04 • Men &amp; Women
        </div>
        <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary uppercase mt-1">
          {product.title}
        </h3>
        <div className="flex flex-wrap items-center gap-space-sm mt-2">
          <span className="font-headline-md text-headline-md font-bold text-on-primary">₱{product.price.toFixed(2)}</span>
          <span className="font-body-sm text-body-sm text-on-primary-container line-through">₱{product.oldPrice.toFixed(2)}</span>
          <span className="bg-tertiary-container text-on-tertiary text-label-technical font-label-technical px-2 py-0.5 rounded uppercase">
            Save {save}%
          </span>
        </div>
      </div>

      <p className="font-body-md text-body-md text-on-primary-container">{product.desc}</p>

      <SwatchPicker selected={swatch} onChange={setSwatch} />
      <SizePicker selected={size} onChange={setSize} />
      <PurchaseActions
        price={product.price}
        added={added}
        liked={liked}
        onAdd={addToBag}
        onToggleLike={() => setLiked((l) => !l)}
      />
    </div>
  )
}
