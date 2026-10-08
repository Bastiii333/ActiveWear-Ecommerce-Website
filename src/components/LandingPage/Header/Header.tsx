import { Container } from '../shared'
import AnnouncementBar from './AnnouncementBar'
import Logo from './Logo'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'
import HeaderActions from './HeaderActions'

export default function Header() {
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
