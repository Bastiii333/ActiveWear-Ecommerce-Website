import { useState } from 'react'
import { Container } from '../shared'
import SpotlightTabs from './SpotlightTabs'
import ProductGallery from './ProductGallery'
import ProductDetails from './ProductDetails'
import { SPOTLIGHTS } from './data'

export default function FeaturedSection() {
  const [tab, setTab] = useState(0)
  const [index, setIndex] = useState(0)

  const product = SPOTLIGHTS[index]
  const total = SPOTLIGHTS.length

  const step = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total)
  const changeTab = (i: number) => {
    setTab(i)
    setIndex(0)
  }

  return (
    <section id="featured-spotlight" className="w-full bg-surface-container-low py-margin-md lg:py-margin-lg">
      <Container>
        <div className="flex flex-col items-center mb-space-xl text-center">
          <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant mb-space-xs">
            Curated Release
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface mb-space-md">
            Flagship Innovation Spotlight
          </h2>
          <SpotlightTabs active={tab} onChange={changeTab} />
        </div>

        <div className="bg-primary-container text-on-primary rounded-xl overflow-hidden shadow-2xl p-space-md md:p-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <ProductGallery product={product} index={index} total={total} onStep={step} />
            {/* key resets swatch / size / cart state when the product changes */}
            <ProductDetails key={index} product={product} />
          </div>
        </div>
      </Container>
    </section>
  )
}
