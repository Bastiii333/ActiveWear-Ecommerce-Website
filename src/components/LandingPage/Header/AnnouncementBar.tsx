import { ANNOUNCEMENT } from './data'

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-primary text-on-primary py-space-xs px-gutter-sm text-center font-label-technical text-label-technical tracking-widest uppercase">
      {ANNOUNCEMENT}
    </div>
  )
}
