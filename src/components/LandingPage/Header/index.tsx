import { useEffect, useState } from 'react'
import { Icon, IMAGES, Container } from '../shared'
import { NAV_LINKS, LANDING_NAV_LINKS, ANNOUNCEMENT } from './data'

// AnnouncementBar
function AnnouncementBar({ scrolled = false }: { scrolled?: boolean }) {
  return (
    <div id="site-announcement-bar" data-component="AnnouncementBar" className={`absolute inset-x-0 top-0 w-full bg-surface-container-lowest text-on-surface py-space-xs px-gutter-sm text-center font-label-technical text-label-technical tracking-widest uppercase transition-transform duration-300 motion-reduce:transition-none ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
      {ANNOUNCEMENT}
    </div>
  )
}

// HeaderActions
const badgeBase =
  'absolute top-1 right-1 w-4 h-4 font-label-technical text-[10px] leading-none rounded-full flex items-center justify-center'

interface HeaderVariantProps {
  overlay?: boolean
}

function HeaderActions({ overlay = false, landing = false }: HeaderVariantProps & { landing?: boolean }) {
  const action = overlay
    ? 'p-space-xs text-white/90 hover:text-white transition-colors'
    : 'p-space-xs text-on-surface-variant hover:text-on-surface transition-colors'

  return (
    <div data-component="HeaderActions" className="flex items-center gap-space-sm shrink-0">
      {!landing && (
        <>
          <button aria-label="Search" id="site-mobile-search-button" className={`${overlay ? '' : 'lg:hidden'} ${action}`}>
            <Icon name="search" />
          </button>
          <a href="#" aria-label="Wishlist" id="site-wishlist-link" className={`relative hidden sm:inline-flex ${action}`}>
            <Icon name="favorite" />
            <span data-element="wishlist-count-badge" className={`${badgeBase} -translate-y-[3px] ${overlay ? 'bg-white text-primary' : 'bg-primary text-on-primary'}`}>0</span>
          </a>
        </>
      )}
      <a href="#" aria-label="Cart" id="site-cart-link" className={`relative ${action}`}>
        <Icon name="shopping_bag" />
        <span data-element="cart-count-badge" className={`${badgeBase} bg-tertiary-container text-on-tertiary font-bold`}>0</span>
      </a>
      {overlay ? (
        <a href="#" aria-label="Account" id="site-account-link" className={`ml-space-xs ${action} ${landing ? 'hidden lg:inline-flex' : ''}`}>
          <Icon name="person" />
        </a>
      ) : (
        <a href="#" aria-label="Account" id="site-account-link" className="p-space-xs transition-opacity hover:opacity-90 ml-space-xs">
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={IMAGES.profile} />
        </a>
      )}
    </div>
  )
}

// Logo
function Logo({ overlay = false }: HeaderVariantProps) {
  return (
    <a href="#" id="site-logo-link" data-component="Logo" className="flex items-center gap-space-sm shrink-0">
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
  const isShop = window.location.hash.startsWith('#/shop')
  const links = overlay ? LANDING_NAV_LINKS : NAV_LINKS

  return (
    <nav id="site-primary-nav" data-component="NavLinks" className={`hidden ${overlay ? 'lg:flex absolute left-1/2 -translate-x-1/2' : 'xl:flex'} items-center gap-space-lg`} aria-label="Primary">
      {links.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          data-element="primary-nav-link"
          aria-current={isShop && link.href === '#/shop' ? 'page' : undefined}
          className={`font-label-lg text-label-lg uppercase tracking-wider transition-colors ${
            overlay
              ? i === 0
                ? 'text-white font-bold'
                : 'text-white/75 hover:text-white'
              : i === 0
                ? 'text-on-surface font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

// SearchBox
interface SearchBoxProps {
  value?: string
  onChange?: (value: string) => void
}

function SearchBox({ value, onChange }: SearchBoxProps) {
  const [draft, setDraft] = useState('')
  const current = value ?? draft

  const update = (next: string) => {
    if (onChange) onChange(next)
    else setDraft(next)
  }

  return (
    <div data-component="SearchBox" className="relative hidden lg:flex items-center w-full max-w-xs bg-surface-container-low rounded-lg px-space-sm py-space-xs">
      <Icon name="search" className="text-on-surface-variant text-[20px] mr-space-xs" />
      <input
        type="text"
        id="site-search-input"
        value={current}
        onChange={(event) => update(event.target.value)}
        placeholder="Search gear, apparel..."
        aria-label="Search"
        className="bg-transparent w-full text-on-surface font-body-sm text-body-sm focus:outline-none placeholder:text-on-surface-variant/60"
      />
      <span className="font-label-technical text-label-technical text-on-surface-variant bg-surface-container-lowest px-1.5 py-0.5 rounded shadow-sm">
      
      </span>
    </div>
  )
}

// HeaderContent
interface HeaderContentProps extends HeaderVariantProps {
  searchValue?: string
  onSearchChange?: (value: string) => void
  menuOpen?: boolean
  onMenuToggle?: () => void
}

function HeaderContent({ overlay = false, searchValue, onSearchChange, menuOpen = false, onMenuToggle }: HeaderContentProps) {
  const landing = overlay

  return (
    <>
      <Logo overlay={overlay} />
      <NavLinks overlay={overlay} />
      <div className={`flex items-center gap-space-md ${landing ? '' : 'flex-1 max-w-md'} justify-end`}>
        {!overlay && <SearchBox value={searchValue} onChange={onSearchChange} />}
        <HeaderActions overlay={overlay} landing={landing} />
        {landing && <MobileMenuButton menuOpen={menuOpen} onClick={onMenuToggle} />}
      </div>
    </>
  )
}

function MobileMenuButton({ menuOpen, onClick }: { menuOpen: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
      aria-controls="site-mobile-menu"
      className="p-space-xs text-white/90 transition-colors hover:text-white lg:hidden"
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
      className={`absolute right-5 top-full z-10 w-56 rounded-lg bg-surface-container-lowest p-space-sm shadow-lg lg:hidden ${open ? 'block' : 'hidden'}`}
    >
      {LANDING_NAV_LINKS.map((link) => (
        <a key={link.label} href={link.href} className="block p-space-sm font-label-lg uppercase tracking-wider text-on-surface">
          {link.label}
        </a>
      ))}
      <a href="#" className="flex items-center gap-space-sm p-space-sm text-on-surface">
        <Icon name="favorite" />
        <span>Wishlist</span>
      </a>
      <a href="#" className="flex items-center gap-space-sm p-space-sm text-on-surface">
        <Icon name="person" />
        <span>Profile</span>
      </a>
    </div>
  )
}

// Header
interface HeaderProps {
  searchValue?: string
  onSearchChange?: (value: string) => void
  /** `overlay` floats the bar over a dark hero with white content and a hover scrim. */
  variant?: 'default' | 'overlay'
}

export function Header({ searchValue, onSearchChange, variant = 'default' }: HeaderProps = {}) {
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

  return (
    <header
      id="site-header"
      data-component="Header"
      className="fixed top-0 left-0 right-0 z-50"
    >
      <AnnouncementBar scrolled={scrolled} />
      <div data-element="header-bar" className={`group/bar relative top-6 h-20 w-full transition-transform duration-300 motion-reduce:transition-none ${scrolled ? '-translate-y-6' : 'translate-y-0'}`}>
        {overlay ? (
          <>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-transparent" />
            {/* Dark scrim on hover/focus and after scroll: keeps white nav legible over bright video frames. */}
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-primary/75 backdrop-blur-md transition-opacity duration-300 motion-reduce:transition-none group-hover/bar:opacity-100 group-focus-within/bar:opacity-100 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
            />
          </>
        ) : (
          <div aria-hidden="true" className="absolute inset-0 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]" />
        )}

        {overlay ? (
          <div className="relative flex h-full items-center justify-between gap-space-lg px-5 md:px-8 xl:px-10">
            <HeaderContent
              overlay
              searchValue={searchValue}
              onSearchChange={onSearchChange}
              menuOpen={menuOpen}
              onMenuToggle={() => setMenuOpen((open) => !open)}
            />
            <MobileMenu open={menuOpen} />
          </div>
        ) : (
          <Container className="relative h-full flex items-center justify-between gap-space-lg">
            <HeaderContent searchValue={searchValue} onSearchChange={onSearchChange} />
          </Container>
        )}
      </div>
    </header>
  )
}
