import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/** Centered max-width wrapper used by every section. */
export default function Container({ children, className = '' }: ContainerProps) {
  return <div className={`max-w-7xl mx-auto px-gutter ${className}`}>{children}</div>
}
