import { useState } from 'react'
import { Container } from '../shared'
import DivisionsHeader from './DivisionsHeader'
import DisciplineFilter from './DisciplineFilter'
import DivisionCard from './DivisionCard'
import InventoryBanner from './InventoryBanner'
import { DIVISIONS } from './data'

export default function DivisionsSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="w-full bg-surface py-margin-md lg:py-margin-lg border-t border-surface-container-high/60">
      <Container>
        <DivisionsHeader />
        <DisciplineFilter active={active} onChange={setActive} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {DIVISIONS.map((d) => (
            <DivisionCard key={d.code} division={d} />
          ))}
        </div>

        <InventoryBanner />
      </Container>
    </section>
  )
}
