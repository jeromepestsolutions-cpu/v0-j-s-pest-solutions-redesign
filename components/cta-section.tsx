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
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-balance sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-primary-foreground/85 leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
