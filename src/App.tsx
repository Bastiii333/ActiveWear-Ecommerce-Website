import { LandingPage } from './components/LandingPage'
import { ProductPage } from './components/ProductPage'
import { useHashRoute } from './lib/useHashRoute'

export default function App() {
  const route = useHashRoute()

  // shortcut: hash routing only. Swap for react-router when cart and checkout routes land.
  return route === 'product' ? <ProductPage /> : <LandingPage />
}
