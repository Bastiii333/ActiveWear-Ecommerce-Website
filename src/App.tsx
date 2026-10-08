import Header from './components/Header'
import Hero from './components/Hero'
import PerformanceDivisions from './components/PerformanceDivisions'
import FeaturedSpotlight from './components/FeaturedSpotlight'
import OlympicEditorial from './components/OlympicEditorial'
import AnatomyBento from './components/AnatomyBento'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
      <Header />
      <main className="w-full pt-[116px] bg-surface">
        <Hero />
        <PerformanceDivisions />
        <FeaturedSpotlight />
        <OlympicEditorial />
        <AnatomyBento />
      </main>
      <Footer />
    </div>
  )
}
