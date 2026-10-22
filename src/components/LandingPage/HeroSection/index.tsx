import { useEffect, useRef } from 'react'
import { Icon } from '../shared'
import heroVideo from '../../../assets/video/headerVideo.mp4'

// HeroVideo
function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Autoplay is decorative; respect users who asked the OS to reduce motion.
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    const sync = () => {
      const video = videoRef.current
      if (!video) return
      if (media.matches) video.pause()
      else void video.play().catch(() => {})
    }

    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return (
    <video
      ref={videoRef}
      data-element="hero-video"
      className="absolute inset-0 h-full w-full object-cover"
      src={heroVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}

// HeroContent
function HeroContent() {
  return (
    <div data-component="HeroContent" className="max-w-2xl space-y-space-md">
      <h1 id="hero-heading" className="font-display-hero text-display-hero-mobile md:text-display-hero text-white uppercase text-balance">
        Move With Confidence
      </h1>
      <p id="hero-description" className="font-body-md text-body-md md:text-body-lg text-white/85 max-w-md">
        Engineered for relentless motion, sculpted for everyday endurance. Explore our high-performance technical
        silhouettes designed to transcend physical limits.
      </p>
      <a
        href="#/shop"
        id="hero-shop-cta"
        className="inline-flex items-center gap-space-xs rounded-full bg-white px-space-lg py-3 font-label-lg text-label-lg text-primary uppercase tracking-wider transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <span>Shop New Collection</span>
        <Icon name="arrow_forward" className="text-[18px]" />
      </a>
    </div>
  )
}

// HeroSection
export function HeroSection() {
  return (
    <section
      id="landing-hero"
      data-component="HeroSection"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-primary"
    >
      <HeroVideo />
      <div
        data-element="hero-scrim"
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent"
      />
      <div className="relative z-10 w-full px-5 pb-16 pt-[116px] md:px-8 xl:px-10">
        <HeroContent />
      </div>
    </section>
  )
}
