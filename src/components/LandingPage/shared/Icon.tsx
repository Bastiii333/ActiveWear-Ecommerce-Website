interface IconProps {
  name: string
  className?: string
  /** Renders the filled variant of the Material symbol (e.g. a saved heart or star). */
  filled?: boolean
}

export default function Icon({ name, className = '', filled = false }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      aria-hidden="true"
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  )
}
