interface StatusDotProps {
  className?: string
  pulse?: boolean
}

export default function StatusDot({ className = 'bg-tertiary-container', pulse = true }: StatusDotProps) {
  return <span className={`w-2 h-2 rounded-full shrink-0 ${className} ${pulse ? 'animate-pulse' : ''}`} />
}
