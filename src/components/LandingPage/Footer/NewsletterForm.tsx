import { type FormEvent, useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setJoined(true)
    setEmail('')
  }

  return (
    <form onSubmit={onSubmit} className="pt-space-xs flex items-center gap-space-xs max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email for weekly drops"
        aria-label="Email address"
        className="bg-surface-container-low px-space-md py-space-sm rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/60 flex-1 min-w-0 focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <button
        type="submit"
        className="bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-space-md py-space-sm rounded-lg transition-colors whitespace-nowrap"
      >
        {joined ? "You're in!" : 'Join Movement'}
      </button>
    </form>
  )
}
