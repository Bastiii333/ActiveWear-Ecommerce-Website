import NewsletterForm from './NewsletterForm'

export default function FooterBrand() {
  return (
    <div className="lg:col-span-2 space-y-space-md pr-space-lg">
      <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface block">ActiveWear</span>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
        High-performance precision gear engineered for relentless movement, endurance, and everyday athletic utility.
      </p>
      <NewsletterForm />
    </div>
  )
}
