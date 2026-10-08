import { useState } from 'react'
import Icon from './Icon'
import { SIZES, SPOTLIGHTS, SPOTLIGHT_TABS, SWATCHES } from '../data/content'

export default function FeaturedSpotlight() {
  const [tab, setTab] = useState(0)
  const [index, setIndex] = useState(0)
  const [swatch, setSwatch] = useState(0)
  const [size, setSize] = useState('S')
  const [added, setAdded] = useState(false)
  const [liked, setLiked] = useState(false)

  const product = SPOTLIGHTS[index]
  const total = SPOTLIGHTS.length
  const save = Math.round((1 - product.price / product.oldPrice) * 100)
  const pad = (n: number) => String(n).padStart(2, '0')

  const step = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total)

  const addToBag = () => {
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  return (
    <section id="featured-spotlight" className="w-full bg-surface-container-low py-margin-md lg:py-margin-lg">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex flex-col items-center mb-space-xl text-center">
          <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant mb-space-xs">Curated Release</span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface tracking-tight mb-space-md">Flagship Innovation Spotlight</h2>
          <div className="inline-flex p-1 bg-surface-container-lowest rounded-xl shadow-sm gap-1" role="tablist">
            {SPOTLIGHT_TABS.map((t, i) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === i}
                onClick={() => { setTab(i); setIndex(0) }}
                className={`px-space-md py-2 rounded-lg font-label-lg text-label-lg transition-all ${
                  tab === i ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-primary-container text-on-primary rounded-xl overflow-hidden shadow-2xl p-space-md md:p-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-square bg-surface-container-lowest rounded-xl overflow-hidden p-space-md shadow-inner flex items-center justify-center">
                <img key={product.image + index} className="w-full h-full object-contain" alt={product.title} src={product.image} />
                <div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary px-3 py-1 rounded-full font-label-technical text-label-technical uppercase tracking-widest font-bold">
                  {product.grade}
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md p-space-xs px-space-sm rounded-lg flex justify-between items-center text-on-surface">
                  <span className="font-label-technical text-label-technical uppercase tracking-wider flex items-center gap-1">
                    <Icon name={product.specA.icon} className="text-[16px] text-tertiary-container" /> {product.specA.label}
                  </span>
                  <span className="font-label-technical text-label-technical uppercase tracking-wider flex items-center gap-1">
                    <Icon name={product.specB.icon} className="text-[16px] text-tertiary-container" /> {product.specB.label}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-space-md px-space-xs">
                <div className="flex items-center gap-space-xs">
                  <button aria-label="Previous product" onClick={() => step(-1)} className="w-10 h-10 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/30 text-on-primary flex items-center justify-center transition-colors">
                    <Icon name="arrow_back" />
                  </button>
                  <button aria-label="Next product" onClick={() => step(1)} className="w-10 h-10 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/30 text-on-primary flex items-center justify-center transition-colors">
                    <Icon name="arrow_forward" />
                  </button>
                </div>
                <div className="flex items-center gap-1.5 font-label-technical text-label-technical text-on-primary-container">
                  <span className="text-on-primary font-bold">{pad(index + 1)}</span> / <span>{pad(total)} INNOVATIONS</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-space-md">
              <div>
                <div className="font-label-technical text-label-technical text-on-tertiary-container uppercase tracking-widest">AeroLab Series 04 • Men &amp; Women</div>
                <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary uppercase tracking-tight mt-1">{product.title}</h3>
                <div className="flex flex-wrap items-center gap-space-sm mt-2">
                  <span className="font-headline-md text-headline-md font-bold text-on-primary">${product.price.toFixed(2)}</span>
                  <span className="font-body-sm text-body-sm text-on-primary-container line-through">${product.oldPrice.toFixed(2)}</span>
                  <span className="bg-tertiary-container text-on-tertiary text-label-technical font-label-technical px-2 py-0.5 rounded uppercase">Save {save}%</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-primary-container">{product.desc}</p>

              <div className="space-y-space-xs pt-space-xs">
                <div className="flex justify-between items-center">
                  <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-primary-container">Selected Palette:</span>
                  <span className="font-label-technical text-label-technical text-on-primary uppercase">{SWATCHES[swatch].name}</span>
                </div>
                <div className="flex items-center gap-space-sm">
                  {SWATCHES.map((s, i) => (
                    <button
                      key={s.name}
                      aria-label={s.name}
                      aria-pressed={swatch === i}
                      onClick={() => setSwatch(i)}
                      style={{ backgroundColor: s.hex }}
                      className={`w-8 h-8 rounded-full transition-all ${
                        swatch === i ? 'ring-2 ring-offset-2 ring-offset-primary-container ring-on-primary' : 'opacity-80 hover:opacity-100'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-space-xs pt-space-xs">
                <div className="flex justify-between items-center">
                  <span className="font-label-technical text-label-technical uppercase tracking-wider text-on-primary-container">Athlete Sizing Matrix</span>
                  <button className="font-label-technical text-label-technical text-on-tertiary-container hover:underline uppercase tracking-wider">Size Guide &amp; Fit</button>
                </div>
                <div className="grid grid-cols-5 gap-space-xs">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      aria-pressed={size === s}
                      onClick={() => setSize(s)}
                      className={`py-2.5 rounded font-label-md text-label-md uppercase transition-all ${
                        size === s
                          ? 'bg-surface-container-lowest text-primary font-bold shadow-sm'
                          : 'bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-space-md flex flex-col sm:flex-row items-center gap-space-sm">
                <button
                  onClick={addToBag}
                  className={`w-full sm:flex-1 font-label-lg text-label-lg py-4 rounded-lg shadow-lg flex items-center justify-center gap-space-xs transition-all active:scale-[0.99] ${
                    added ? 'bg-tertiary-container text-on-tertiary' : 'bg-surface-container-lowest text-primary hover:bg-surface-bright'
                  }`}
                >
                  <Icon name="shopping_bag" className="text-[20px]" />
                  <span>{added ? 'Added to Bag!' : `Add to Bag — $${product.price.toFixed(2)}`}</span>
                </button>
                <button
                  aria-label="Add to Wishlist"
                  aria-pressed={liked}
                  onClick={() => setLiked((l) => !l)}
                  className="w-full sm:w-auto p-4 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary flex items-center justify-center transition-colors"
                >
                  <Icon name="favorite" className={liked ? 'text-on-tertiary-container' : ''} />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs text-on-primary-container font-label-technical text-label-technical">
                <div className="flex items-center gap-1">
                  <Icon name="local_shipping" className="text-[16px] text-on-tertiary-container" />
                  <span>Free Express Shipping</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="published_with_changes" className="text-[16px] text-on-tertiary-container" />
                  <span>30-Day Field Trial Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
