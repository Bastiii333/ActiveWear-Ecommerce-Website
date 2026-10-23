import { useEffect, useState } from 'react'
import { Icon, IMAGES, Container } from '../shared'
import { NAV_LINKS, ANNOUNCEMENT } from './data'

// AnnouncementBar
function AnnouncementBar() {
  return (
    <div id="site-announcement-bar" data-component="AnnouncementBar" className="w-full bg-surface-container-lowest text-on-surface py-space-xs px-gutter-sm text-center font-label-technical text-label-technical tracking-widest uppercase">
      {ANNOUNCEMENT}
    </div>
  )
}

interface HeaderVariantProps {
  /** `overlay` floats the bar over the dark hero: white content and a hover scrim. */
  overlay?: boolean
}

// HeaderActions
const badgeBase =
  'absolute top-1 right-1 w-4 h-4 font-label-technical text-[10px] leading-none rounded-full flex items-center justify-center'

function HeaderActions({ overlay = false }: HeaderVariantProps) {
  const action = overlay
    ? 'p-space-xs text-white/90 hover:text-white transition-colors'
    : 'p-space-xs text-on-surface-variant hover:text-on-surface transition-colors'

  return (
    <div data-component="HeaderActions" className="flex items-center gap-space-sm shrink-0">
      <a href="#" aria-label="Cart" id="site-cart-link" className={`relative ${action}`}>
        <Icon name="shopping_bag" />
        <span data-element="cart-count-badge" className={`${badgeBase} bg-tertiary-container text-on-tertiary font-bold`}>0</span>
      </a>
      <a href="#" aria-label="Account" id="site-account-link" className={`ml-space-xs ${action}`}>
        <Icon name="person" />
      </a>
    </div>
  )
}

// Logo
function Logo({ overlay = false }: HeaderVariantProps) {
  return (
    <a href="#/" id="site-logo-link" data-component="Logo" className="flex items-center gap-space-sm shrink-0">
      <img
        alt="ActiveWear Brand Logo"
        className={`h-9 md:h-12 w-auto object-contain ${overlay ? 'brightness-0 invert' : ''}`}
        src={IMAGES.logo}
      />
    </a>
  )
}

// NavLinks
function NavLinks({ overlay = false }: HeaderVariantProps) {
  const hash = window.location.hash || '#/'

  return (
    <nav id="site-primary-nav" data-component="NavLinks" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-space-lg lg:flex" aria-label="Primary">
      {NAV_LINKS.map((link) => {
        const active = hash === link.href

        return (
          <a
            key={link.label}
            href={link.href}
            data-element="primary-nav-link"
            aria-current={active ? 'page' : undefined}
            className={`font-label-lg text-label-lg uppercase tracking-wider transition-colors ${
              overlay
                ? active
                  ? 'text-white font-bold'
                  : 'text-white/75 hover:text-white'
                : active
                  ? 'text-on-surface font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {link.label}
          </a>
        )
      })}
    </nav>
  )
}

// MobileMenuButton
function MobileMenuButton({ overlay = false, menuOpen, onClick }: HeaderVariantProps & { menuOpen: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      id="site-mobile-menu-button"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
      aria-controls="site-mobile-menu"
      className={`p-space-xs transition-colors lg:hidden ${
        overlay ? 'text-white/90 hover:text-white' : 'text-on-surface-variant hover:text-on-surface'
      }`}
      onClick={onClick}
    >
      <Icon name={menuOpen ? 'close' : 'menu'} />
    </button>
  )
}

function MobileMenu({ open }: { open: boolean }) {
  return (
    <div
      id="site-mobile-menu"
      data-component="MobileMenu"
      className={`absolute right-5 top-full z-10 w-56 rounded-lg border border-surface-container-high/70 bg-surface-container-lowest p-space-sm shadow-lg lg:hidden ${open ? 'block' : 'hidden'}`}
    >
      {NAV_LINKS.map((link) => (
        <a key={link.label} href={link.href} className="block p-space-sm font-label-lg uppercase tracking-wider text-on-surface">
          {link.label}
        </a>
      ))}
      <a href="#" className="flex items-center gap-space-sm p-space-sm text-on-surface">
        <Icon name="person" />
        <span>Profile</span>
      </a>
    </div>
  )
}

// BarContent
interface BarContentProps extends HeaderVariantProps {
  menuOpen: boolean
  onMenuToggle: () => void
}

function BarContent({ overlay = false, menuOpen, onMenuToggle }: BarContentProps) {
  return (
    <>
      <Logo overlay={overlay} />
      <NavLinks overlay={overlay} />
      <div className="flex items-center gap-space-sm">
        <HeaderActions overlay={overlay} />
        <MobileMenuButton overlay={overlay} menuOpen={menuOpen} onClick={onMenuToggle} />
      </div>
      <MobileMenu open={menuOpen} />
    </>
  )
}

// Header
interface HeaderProps {
  /** `overlay` floats the bar over a dark hero with white content and a hover scrim. */
  variant?: 'default' | 'overlay'
}

export function Header({ variant = 'default' }: HeaderProps = {}) {
  const overlay = variant === 'overlay'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Keep the nav readable once the hero scrolls behind the bar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [overlay])

  const bar = <BarContent overlay={overlay} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} />

  return (
    <header id="site-header" data-component="Header" className="fixed top-0 left-0 right-0 z-50">
      {/* The bar sits in flow so a wrapped message pushes the nav down instead of being covered. The grid row collapses to 0 on scroll. */}
      <div className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${scrolled ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'}`}>
        <div className="overflow-hidden">
          <AnnouncementBar />
        </div>
      </div>
      <div
        data-element="header-bar"
        className={`group/bar relative h-20 w-full ${
          overlay ? '' : 'bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
        }`}
      >
        {overlay && (
          <>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-transparent" />
            {/* Dark scrim on hover/focus and after scroll: keeps white nav legible over bright video frames. */}
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-primary/75 backdrop-blur-md transition-opacity duration-300 motion-reduce:transition-none group-hover/bar:opacity-100 group-focus-within/bar:opacity-100 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
            />
          </>
        )}

        {/* The hero is padded to the viewport edge, so the overlay bar matches it; the catalog pages use Container. */}
        {overlay ? (
          <div className="relative flex h-full items-center justify-between gap-space-lg px-5 md:px-8 xl:px-10">{bar}</div>
        ) : (
          <Container className="relative flex h-full items-center justify-between gap-space-lg">{bar}</Container>
        )}
      </div>
    </header>
  )
}
