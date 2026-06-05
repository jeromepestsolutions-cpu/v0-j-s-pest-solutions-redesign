import Image from 'next/image'
import { Phone } from 'lucide-react'
import { business } from '@/lib/site-data'
import { ActionLink } from '@/components/action-link'
import { TrustBadges } from '@/components/trust-badges'

const stats = [
  { value: 'Local', label: 'Arvada-based' },
  { value: 'Family', label: 'Owned & operated' },
  { value: 'Same-week', label: 'Scheduling' },
]

export function HomeHero() {
  return (
    <section className="border-b border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:py-24">
        <div>
          <p className="eyebrow">
            <span className="h-2 w-2 bg-accent" aria-hidden="true" />
            Family-owned · Arvada &amp; Denver, CO
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.04] text-balance text-foreground sm:text-5xl lg:text-6xl">
            Pest control built around{' '}
            <span className="relative whitespace-nowrap">
              Colorado homes
              <span
                className="absolute -bottom-1 left-0 h-1.5 w-full bg-accent"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            {business.name} helps homeowners and businesses in Arvada, Denver,
            and nearby communities handle pests with honest guidance, practical
            treatments, and personal service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/pricing-estimator" variant="clay" size="lg">
              Request an Estimate
            </ActionLink>
            <ActionLink href={business.phoneHref} variant="outline" size="lg">
              <Phone className="size-5" />
              Call or Text {business.phone}
            </ActionLink>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card px-4 py-4">
                <dt className="text-xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-0.5 text-xs text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/hero-technician-homeowner.png"
              alt="A J's Pest Solutions technician talking with a homeowner outside a Colorado home"
              width={900}
              height={700}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-2xl bg-accent"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <TrustBadges />
      </div>
    </section>
  )
}
