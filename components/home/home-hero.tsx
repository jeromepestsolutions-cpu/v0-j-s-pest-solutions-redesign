import Image from 'next/image'
import { Phone } from 'lucide-react'
import { business } from '@/lib/site-data'
import { ActionLink } from '@/components/action-link'
import { TrustBadges } from '@/components/trust-badges'

export function HomeHero() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-sm font-medium text-primary shadow-sm ring-1 ring-border">
            Family-owned · Arvada &amp; Denver, Colorado
          </p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-balance text-foreground sm:text-5xl lg:text-6xl">
            Local pest control from a family business that knows Colorado homes
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
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
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <Image
              src="/images/hero-technician-homeowner.png"
              alt="A J's Pest Solutions technician talking with a homeowner outside a Colorado home"
              width={900}
              height={700}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <TrustBadges />
      </div>
    </section>
  )
}
