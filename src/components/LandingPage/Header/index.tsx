import { Icon, IMAGES, Container } from '../shared'
import { NAV_LINKS, ANNOUNCEMENT } from './data'

// AnnouncementBar
function AnnouncementBar() {
  return (
    <div className="w-full bg-primary text-on-primary py-space-xs px-gutter-sm text-center font-label-technical text-label-technical tracking-widest uppercase">
      {ANNOUNCEMENT}
    </div>
  )
}

// HeaderActions
const badgeBase =
  'absolute top-1 right-1 w-4 h-4 font-label-technical text-[10px] leading-none rounded-full flex items-center justify-center'

function HeaderActions() {
  return (
    <div className="flex items-center gap-space-sm shrink-0">
      <button aria-label="Search" className="lg:hidden p-space-xs text-on-surface-variant hover:text-on-surface">
        <Icon name="search"  />
      </button>
      <a href="#" aria-label="Wishlist" className="relative p-space-xs text-on-surface-variant hover:text-on-surface transition-colors">
        <Icon name="favorite" />
        {/* Display a badge conditionally and dynamically later on*/}
        <span className={`${badgeBase} bg-primary text-on-primary`}>0</span>
      </a>
      <a href="#" aria-label="Cart" className="relative p-space-xs text-on-surface-variant hover:text-on-surface transition-colors">
        <Icon name="shopping_bag" />
         {/* Display a badge conditionally and dynamically later on*/}
        <span className={`${badgeBase} bg-tertiary-container text-on-tertiary font-bold`}>2</span>
      </a>
      <a href="#" aria-label="Account" className="p-space-xs transition-opacity hover:opacity-90 ml-space-xs">
        <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={IMAGES.profile} />
      </a>
    </div>
  )
}

// Logo
function Logo() {
  return (
    <a href="#" className="flex items-center gap-space-sm shrink-0">
      <img alt="ActiveWear Brand Logo" className="h-12 w-auto object-contain" src={IMAGES.logo} />
    </a>
  )
}

// NavLinks
function NavLinks() {
  return (
    <nav className="hidden xl:flex items-center gap-space-lg" aria-label="Primary">
      {NAV_LINKS.map((link, i) => (
        <a
          key={link}
          href="#"
          aria-current={i === 0 ? 'page' : undefined}
          className={`font-label-lg text-label-lg uppercase tracking-wider transition-colors ${
            i === 0 ? 'text-on-surface font-bold' : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          {link}
        </a>
      ))}
    </nav>
  )
}

// SearchBox
function SearchBox() {
  return (
    <div className="relative hidden lg:flex items-center w-full max-w-xs bg-surface-container-low rounded-lg px-space-sm py-space-xs">
      <Icon name="search" className="text-on-surface-variant text-[20px] mr-space-xs" />
      <input
        type="text"
        placeholder="Search gear, apparel..."
        aria-label="Search"
        className="bg-transparent w-full text-on-surface font-body-sm text-body-sm focus:outline-none placeholder:text-on-surface-variant/60"
      />
      <span className="font-label-technical text-label-technical text-on-surface-variant bg-surface-container-lowest px-1.5 py-0.5 rounded shadow-sm">
      
      </span>
    </div>
  )
}

// Header
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementBar />
      <div className="h-20 w-full bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <Container className="h-full flex items-center justify-between gap-space-lg">
          <Logo />
          <NavLinks />
          <div className="flex items-center gap-space-md flex-1 max-w-md justify-end">
            <SearchBox />
            <HeaderActions />
          </div>
        </Container>
      </div>
    </header>
  )
}
