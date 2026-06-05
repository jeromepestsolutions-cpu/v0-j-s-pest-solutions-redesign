import { Phone } from 'lucide-react'
import { business } from '@/lib/site-data'
import { ActionLink } from '@/components/action-link'

export function CtaSection({
  title = 'Need pest help this week?',
  subtitle = 'Tell us what you are seeing and a real local person will follow up. No national call center, no pressure.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="bg-ink text-ink-foreground ink-grid">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="eyebrow-ondark justify-center">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          Local · Family-owned
        </p>
        <h2 className="mt-5 font-serif text-3xl font-semibold text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-ink-foreground/80 leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ActionLink href="/pricing-estimator" variant="clay" size="lg">
            Request an Estimate
          </ActionLink>
          <ActionLink href={business.phoneHref} variant="onDark" size="lg">
            <Phone className="size-5" />
            Call or Text {business.phone}
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
