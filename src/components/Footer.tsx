import { type FormEvent, useState } from 'react'
import Icon from './Icon'
import { FOOTER_COLUMNS } from '../data/content'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setJoined(true)
    setEmail('')
  }

  const linkCls = 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface cursor-pointer'

  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface pt-margin-lg pb-space-xl shadow-[0_-1px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl mb-margin-lg">
          <div className="lg:col-span-2 space-y-space-md pr-space-lg">
            <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface block">ActiveWear</span>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              High-performance precision gear engineered for relentless movement, endurance, and everyday athletic utility.
            </p>
            <form onSubmit={onSubmit} className="pt-space-xs flex items-center gap-space-xs max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email for weekly drops"
                className="bg-surface-container-low px-space-md py-space-sm rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/60 flex-1 min-w-0 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button type="submit" className="bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-space-md py-space-sm rounded-lg transition-colors whitespace-nowrap">
                {joined ? "You're in!" : 'Join Movement'}
              </button>
            </form>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-space-sm">
              <h3 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">{col.title}</h3>
              <ul className="space-y-space-xs">
                {col.links.map((l) => (
                  <li key={l} className={linkCls}>{l}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-space-sm">
            <h3 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">Mission &amp; Impact</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Crafted with 100% circular recycled composites and certified zero-emission supply loops. Engineered to endure, built to recycle.
            </p>
            <div className="pt-space-xs flex items-center gap-space-xs">
              <Icon name="eco" className="text-on-surface-variant text-[20px]" />
              <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider">Zero Landfill Pledge</span>
            </div>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md border-t border-surface-container-high">
          <div className="flex items-center gap-space-md">
            {['Apple Pay', 'Visa', 'Mastercard'].map((p) => (
              <span key={p} className="font-label-technical text-label-technical uppercase tracking-wider bg-surface-container-low px-space-sm py-1 rounded text-on-surface-variant">{p}</span>
            ))}
          </div>
          <p className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest">
            © 2024 ACTIVEWEAR LABS INC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
