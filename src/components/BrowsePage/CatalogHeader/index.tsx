import { Container } from '../../LandingPage/shared'
import { CATALOG_INTRO } from './data'


export function CatalogHeader() {
  return (
    <section id="browse-catalog-header" data-component="CatalogHeader" className="w-full bg-surface">
      <Container>
        <div data-element="catalog-header-content" className="pt-space-lg pb-space-xl">
          <h1 id="browse-catalog-title" className="mt-space-md font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface uppercase">
            {CATALOG_INTRO.title}
          </h1>
          <p id="browse-catalog-description" className="mt-space-sm max-w-2xl font-body-md text-body-md text-on-surface-variant">
            {CATALOG_INTRO.description}
          </p>
        </div>
      </Container>
    </section>
  )
}
