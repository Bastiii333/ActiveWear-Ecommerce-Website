import { Icon } from '../shared'

export default function CardIcon({ name }: { name: string }) {
  return (
    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest text-tertiary-container flex items-center justify-center shadow-sm mb-space-md">
      <Icon name={name} />
    </div>
  )
}
