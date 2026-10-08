import { Container } from '../shared'
import HeroContent from './HeroContent'
import HeroVisual from './HeroVisual'

export default function HeroSection() {
  return (
    <section className="relative w-full bg-surface-container-lowest overflow-hidden">
      {/* decorative glows */}
      <div className="absolute -top-32 -right-24 w-[700px] h-[700px] bg-tertiary-fixed/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-36 w-[500px] h-[500px] bg-surface-container-high/60 rounded-full blur-2xl pointer-events-none" />

      <Container className="py-space-xl lg:py-margin-lg relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>
    </section>
  )
}
