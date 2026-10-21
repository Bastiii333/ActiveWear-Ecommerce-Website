import { LandingPage } from './components/LandingPage'
import { BrowsePage } from './components/BrowsePage'
import { useHashRoute } from './lib/useHashRoute'

export default function App() {
  const route = useHashRoute()

  // shortcut: hash routing only. Swap for react-router when product detail and cart routes land.
  return route === 'shop' ? <BrowsePage /> : <LandingPage />
}
