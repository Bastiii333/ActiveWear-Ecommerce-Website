import { Container, Icon } from '../../LandingPage/shared'
import type { Breadcrumb } from '../types'

interface BreadcrumbsProps {
  trail: Breadcrumb[]
  /** The current page, rendered as plain text at the end of the trail. */
  current: string
  backHref?: string
}

export function Breadcrumbs({ trail, current, backHref = '#/shop' }: BreadcrumbsProps) {
  return (
    <div className="w-full border-b border-outline-variant/50 bg-surface-container-lowest">
      <Container className="flex h-11 items-center justify-between gap-space-md">
        <nav aria-label="Breadcrumb" className="min-w-0">
          <ol className="flex items-center gap-space-xs overflow-hidden font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant">
            {trail.map((crumb) => (
              <li key={crumb.href} className="flex shrink-0 items-center gap-space-xs">
                <a href={crumb.href} className="transition-colors hover:text-on-surface">
                  {crumb.label}
                </a>
                <span aria-hidden="true" className="text-outline-variant">
                  /
                </span>
              </li>
            ))}
            <li className="truncate text-on-surface" aria-current="page">
              {current}
            </li>
          </ol>
        </nav>

        <a
          href={backHref}
          className="hidden shrink-0 items-center gap-1 font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant transition-colors hover:text-on-surface sm:flex"
        >
          <Icon name="arrow_back" className="text-[16px]" />
          Back to results
        </a>
      </Container>
    </div>
  )
}
