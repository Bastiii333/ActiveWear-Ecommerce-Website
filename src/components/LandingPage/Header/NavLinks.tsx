import { NAV_LINKS } from './data'

export default function NavLinks() {
  return (
    <nav className="hidden xl:flex items-center gap-space-lg" aria-label="Primary">
      {NAV_LINKS.map((link, i) => (
        <a
          key={link}
          href="#"
          aria-current={i === 0 ? 'page' : undefined}
          className={`font-label-lg text-label-lg uppercase tracking-wider transition-colors ${
            i === 0 ? 'text-on-surface font-bold' : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          {link}
        </a>
      ))}
    </nav>
  )
}
