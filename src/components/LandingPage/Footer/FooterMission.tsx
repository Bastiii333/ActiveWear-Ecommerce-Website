import { Icon } from '../shared'

export default function FooterMission() {
  return (
    <div className="space-y-space-sm">
      <h3 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider">Mission &amp; Impact</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        Crafted with 100% circular recycled composites and certified zero-emission supply loops. Engineered to endure,
        built to recycle.
      </p>
      <div className="pt-space-xs flex items-center gap-space-xs">
        <Icon name="eco" className="text-on-surface-variant text-[20px]" />
        <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-wider">
          Zero Landfill Pledge
        </span>
      </div>
    </div>
  )
}
