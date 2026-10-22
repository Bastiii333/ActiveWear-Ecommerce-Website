import { useEffect, useState } from 'react'

export type AppRoute = 'home' | 'product'

function readRoute(): AppRoute {
  return window.location.hash.startsWith('#/product') ? 'product' : 'home'
}

/** Minimal hash route. Replace with the router once cart and checkout routes exist. */
export function useHashRoute(): AppRoute {
  const [route, setRoute] = useState<AppRoute>(readRoute)

  useEffect(() => {
    const onChange = () => setRoute(readRoute())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}
