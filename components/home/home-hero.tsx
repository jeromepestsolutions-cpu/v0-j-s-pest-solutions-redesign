import Image from 'next/image'
import { Phone, Star } from 'lucide-react'
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
    <section className="relative overflow-hidden border-b border-border bg-secondary/50">
      <div
        className="pointer-events-none absolute -left-32 top-0 size-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:py-28">
        <div>
          <p className="eyebrow">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Family-owned · Arvada &amp; Denver, CO
          </p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.98] text-balance text-foreground sm:text-6xl lg:text-7xl">
            Pest control built around{' '}
            <span className="relative whitespace-nowrap text-primary">
              Colorado homes
              <span
                className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-accent/80"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            {business.name} helps homeowners and businesses in Arvada, Denver,
            and nearby communities handle pests with honest guidance, practical
            treatments, and personal service.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/pricing-estimator" variant="clay" size="lg">
              Request an Estimate
            </ActionLink>
            <ActionLink href={business.phoneHref} variant="outline" size="lg">
              <Phone className="size-5" />
              Call or Text {business.phone}
            </ActionLink>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-soft">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card px-4 py-5">
                <dt className="font-serif text-xl font-semibold tracking-tight text-foreground">
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
          <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-lift">
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
            className="absolute -bottom-4 -left-4 -z-10 h-28 w-28 rounded-[1.75rem] bg-accent"
            aria-hidden="true"
          />
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-card backdrop-blur sm:left-6">
            <div className="flex items-center gap-0.5 text-clay" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="text-sm font-semibold text-foreground">
              Trusted by local neighbors
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <TrustBadges />
      </div>
    </section>
  )
}
