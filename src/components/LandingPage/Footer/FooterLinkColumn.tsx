import type { FooterColumn } from './data'

export default function FooterLinkColumn({ title, links }: FooterColumn) {
  return (
    <div className="space-y-space-sm">
      <h3 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">{title}</h3>
      <ul className="space-y-space-xs">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
