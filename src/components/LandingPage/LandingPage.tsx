import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { DivisionsSection } from "./DivisionsSection";
import { FeaturedSection } from "./FeaturedSection";
import { EditorialSection } from "./EditorialSection";
import { AnatomySection } from "./AnatomySection";
import { Footer } from "./Footer";

export default function LandingPage() {
  return (
    <div id="landing-page" data-component="LandingPage" className="bg-surface font-body-md text-on-surface antialiased">
      <Header variant="overlay" />
      {/* The overlay header sits on the hero, so the main column starts at the top. */}
      <main id="landing-main" className="w-full bg-surface">
        <HeroSection />
        <FeaturedSection />
        <DivisionsSection />
        <EditorialSection />
        <AnatomySection />
      </main>
      <Footer />
    </div>
  );
}
