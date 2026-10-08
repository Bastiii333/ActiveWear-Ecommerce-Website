import { Header } from './Header'
import { HeroSection } from './HeroSection'
import { DivisionsSection } from './DivisionsSection'
import { FeaturedSection } from './FeaturedSection'
import { EditorialSection } from './EditorialSection'
import { AnatomySection } from './AnatomySection'
import { Footer } from './Footer'

export default function LandingPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
      <Header />
      {/* pt = announcement bar (~36px) + header (80px) */}
      <main className="w-full pt-[116px] bg-surface">
        <HeroSection />
        <DivisionsSection />
        <FeaturedSection />
        <EditorialSection />
        <AnatomySection />
      </main>
      <Footer />
    </div>
  )
}
