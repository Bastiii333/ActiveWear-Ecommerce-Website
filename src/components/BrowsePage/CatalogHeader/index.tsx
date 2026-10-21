import { Container } from '../../LandingPage/shared'
import { BREADCRUMB, CATALOG_INTRO } from './data'

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5">
      {BREADCRUMB.map((crumb, index) => {
        const isLast = index === BREADCRUMB.length - 1
        return (
          <span key={crumb} className="flex items-center gap-1.5">
            <a
              href="#"
              aria-current={isLast ? 'page' : undefined}
              className={`font-label-technical text-label-technical uppercase tracking-widest transition-colors ${
                isLast ? 'text-on-surface' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {crumb}
            </a>
            {!isLast && <span className="font-label-technical text-label-technical text-outline-variant">/</span>}
          </span>
        )
      })}
    </nav>
  )
}

export function CatalogHeader() {
  return (
    <section className="w-full bg-surface">
      <Container>
        <div className="pt-space-lg pb-space-xl">
          <Breadcrumb />{/* try to hide this and compare on the meeting */}
          <h1 className="mt-space-md font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface uppercase">
            {CATALOG_INTRO.title}
          </h1>
          <p className="mt-space-sm max-w-2xl font-body-md text-body-md text-on-surface-variant">
            {CATALOG_INTRO.description}
          </p>
        </div>
      </Container>
    </section>
  )
}
