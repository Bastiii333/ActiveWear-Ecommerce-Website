import { useState } from 'react'
import { Container } from '../LandingPage/shared'
import { Header } from '../LandingPage/Header'
import { Footer } from '../LandingPage/Footer'
import { CatalogHeader } from './CatalogHeader'
import { CategoryTabs } from './CategoryTabs'
import { FilterSidebar } from './FilterSidebar'
import { ProductGrid } from './ProductGrid'
import { CATALOG_PRODUCTS } from './data'
import { useCatalogFilters } from './hooks/useCatalogFilters'
import type { CatalogFacets, Product, ProductLayout } from './types'

interface BrowsePageProps {
  /** Rows for the current query. Empty until the catalog endpoint is wired. */
  products?: Product[]
  /** Counts for the category tabs and sidebar facets. */
  facets?: CatalogFacets
  isLoading?: boolean
}

/**
 * Data contract for the page:
 *   GET /api/products?<controller.queryString>
 *     -> { items: Product[], facets: CatalogFacets }
 * The page itself does not fetch; a container route owns the request and passes
 * both values down, so swapping the data source touches one file.
 */
export default function BrowsePage({ products = CATALOG_PRODUCTS, facets, isLoading = false }: BrowsePageProps) {
  const catalog = useCatalogFilters()
  const [layout, setLayout] = useState<ProductLayout>('grid')

  return (
    <div id="browse-page" data-component="BrowsePage" className="bg-surface font-body-md text-on-surface antialiased">
      {/* shortcut: Header/Footer still live under LandingPage; promote them to components/layout once a router lands. */}
      <Header searchValue={catalog.filters.search} onSearchChange={catalog.setSearch} />

      <main id="browse-main" className="w-full bg-surface pt-[116px]">
        <CatalogHeader />

        <Container>
          <CategoryTabs
            active={catalog.filters.category}
            counts={facets?.categories}
            onChange={catalog.setCategory}
          />
        </Container>

        <Container className="py-space-lg">
          <div data-element="browse-layout-grid" className="grid grid-cols-1 gap-space-lg lg:grid-cols-[280px_minmax(0,1fr)]">
            <FilterSidebar controller={catalog} facets={facets} />
            <ProductGrid
              products={products}
              total={facets?.total ?? products.length}
              isLoading={isLoading}
              layout={layout}
              sort={catalog.filters.sort}
              onSortChange={catalog.setSort}
              onLayoutChange={setLayout}
              onResetFilters={catalog.activeCount > 0 ? catalog.clearAll : undefined}
            />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
