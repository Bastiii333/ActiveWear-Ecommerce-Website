import { Icon, StatusDot } from '../shared'

export default function InventoryBanner() {
  return (
    <div className="mt-space-xl bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container-high flex flex-col md:flex-row items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md">
        <div className="w-12 h-12 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0 shadow-md">
          <Icon name="grid_view" className="text-[24px]" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <StatusDot className="bg-emerald-500" />
            <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface font-bold">
              Active Inventory Sync: 100% Online
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Browse complete Series 04 drops, lab archives, technical base layers, and unisex silhouettes.
          </p>
        </div>
      </div>

      <a
        href="#"
        className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-space-xs bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-0.5"
      >
        <span className="font-label-technical uppercase tracking-wider">View All 240+ ActiveWear Products</span>
        <Icon name="arrow_forward" className="text-[18px]" />
      </a>
    </div>
  )
}
