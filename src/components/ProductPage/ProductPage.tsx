import { Container } from '../LandingPage/shared'
import { Header } from '../LandingPage/Header'
import { Footer } from '../LandingPage/Footer'
import { Breadcrumbs } from './Breadcrumbs'
import { ProductGallery } from './ProductGallery'
import { ProductInfo } from './ProductInfo'
import { TrainingKit } from './TrainingKit'
import { Reviews } from './Reviews'
import { BUNDLE, KIT_ITEMS, PRODUCT, REVIEWS, REVIEW_SUMMARY } from './data'
import { useProductSelection } from './hooks/useProductSelection'
import type { AddToBagPayload, BundleOffer, KitItem, ProductDetail, Review, ReviewSummary } from './types'

interface ProductPageProps {
  product?: ProductDetail
  /** Cross-sell rail. Empty hides the section. */
  kit?: KitItem[]
  bundle?: BundleOffer
  reviews?: Review[]
  reviewSummary?: ReviewSummary
  /** Skeletons the review list while the first page is in flight. */
  isReviewsLoading?: boolean
  onAddToBag?: (payload: AddToBagPayload) => void
  onBuyNow?: (payload: AddToBagPayload) => void
  onAddKitItem?: (itemId: string) => void
  onAddBundle?: (bundleId: string) => void
  onHelpfulVote?: (reviewId: string) => void
  onWriteReview?: () => void
}

/**
 * Data contract for the page:
 *   GET /api/products/:slug                  -> ProductDetail
 *   GET /api/products/:slug/recommendations  -> { items: KitItem[], bundle?: BundleOffer }
 *   GET /api/products/:slug/reviews          -> { items: Review[], summary: ReviewSummary }
 *   POST /api/cart/items                     <- AddToBagPayload
 * The page itself does not fetch; a container route owns the requests and the
 * write handlers, so swapping the data source touches one file.
 */
export default function ProductPage({
  product = PRODUCT,
  kit = KIT_ITEMS,
  bundle = BUNDLE,
  reviews = REVIEWS,
  reviewSummary = REVIEW_SUMMARY,
  isReviewsLoading = false,
  onAddToBag,
  onBuyNow,
  onAddKitItem,
  onAddBundle,
  onHelpfulVote,
  onWriteReview,
}: ProductPageProps) {
  const selection = useProductSelection({ product, onAddToBag, onBuyNow })

  return (
    <div id="product-page" data-component="ProductPage" className="bg-surface font-body-md text-on-surface antialiased">
      {/* shortcut: Header/Footer still live under LandingPage; promote them to components/layout once a router lands. */}
      <Header />

      {/* pt = announcement bar (~36px) + header (80px) */}
      <main id="product-main" className="w-full bg-surface pt-[116px]">
        <Breadcrumbs trail={product.breadcrumbs} current={product.name} />

        <Container className="py-space-lg">
          <div id="product-overview" className="grid grid-cols-1 gap-space-lg lg:grid-cols-12 lg:items-start">
            <ProductGallery
              images={product.images}
              grade={product.grade}
              highlights={product.highlights}
              liked={selection.liked}
              onToggleLiked={selection.toggleLiked}
            />
            <ProductInfo product={product} selection={selection} />
          </div>
        </Container>

        <TrainingKit items={kit} bundle={bundle} onAddItem={onAddKitItem} onAddBundle={onAddBundle} />

        <Reviews
          reviews={reviews}
          summary={reviewSummary}
          productName={product.name}
          isLoading={isReviewsLoading}
          onHelpful={onHelpfulVote}
          onWriteReview={onWriteReview}
        />
      </main>

      <Footer />
    </div>
  )
}
