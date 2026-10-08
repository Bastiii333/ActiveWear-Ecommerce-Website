import { Container } from '../shared'
import FooterBrand from './FooterBrand'
import FooterLinkColumn from './FooterLinkColumn'
import FooterMission from './FooterMission'
import FooterBottomBar from './FooterBottomBar'
import { FOOTER_COLUMNS } from './data'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface pt-margin-lg pb-space-xl shadow-[0_-1px_8px_rgba(0,0,0,0.02)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl mb-margin-lg">
          <FooterBrand />
          {FOOTER_COLUMNS.map((col) => (
            <FooterLinkColumn key={col.title} {...col} />
          ))}
          <FooterMission />
        </div>
        <FooterBottomBar />
      </Container>
    </footer>
  )
}
