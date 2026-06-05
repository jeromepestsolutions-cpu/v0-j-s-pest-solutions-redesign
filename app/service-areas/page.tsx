import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { serviceAreas, business } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { ServiceAreaCard } from '@/components/service-area-card'
import { ServiceAreaMap } from '@/components/service-area-map'
import { ActionLink } from '@/components/action-link'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Service Areas | J\'s Pest Solutions',
  description:
    'Family-owned pest control serving Arvada, Denver, Wheat Ridge, Westminster, Lakewood, Thornton, Golden, and the surrounding Denver metro.',
}

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Local pest control across the Denver metro"
        subtitle="We are a family business serving our own neighbors. We keep our service area focused so we can stay responsive and group nearby appointments."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ActionLink href="/pricing-estimator" size="lg">
            Get a Price Estimate
          </ActionLink>
          <ActionLink href={business.phoneHref} variant="outline" size="lg">
            <Phone className="size-5" />
            Call or Text {business.phone}
          </ActionLink>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <ServiceAreaMap />

        <h2 className="mt-14 font-serif text-2xl font-semibold text-foreground">
          Communities we serve
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
          Explore our local pages for Arvada and Denver, or reach out about any
          of the surrounding areas below.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <ServiceAreaCard key={area.name} area={area} />
          ))}
        </div>
      </section>

      <CtaSection
        title="Not sure if we cover your area?"
        subtitle="Reach out and we will let you know right away. If we are not the right fit, we will try to point you in the right direction."
      />
    </>
  )
}
