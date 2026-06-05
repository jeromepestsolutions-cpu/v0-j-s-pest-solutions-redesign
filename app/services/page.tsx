import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { services, recurringPlan, business } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { ServiceCard } from '@/components/service-card'
import { ActionLink } from '@/components/action-link'
import { CtaSection } from '@/components/cta-section'
import { ServiceIcon } from '@/components/icon-map'

export const metadata: Metadata = {
  title: 'Pest Control Services | J\'s Pest Solutions',
  description:
    'General pest control, rodent control, ants, spiders, roaches, wasps, and termite and bed bug inspections for Arvada, Denver, and surrounding Colorado communities.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Practical pest control for Colorado homes and businesses"
        subtitle="We focus on what actually keeps pests out — inspection, entry points, and treatments matched to the situation. Here is how we can help."
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.short}
              icon={service.icon}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-clay/30 bg-clay/10">
          <div className="flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-clay/20 text-clay">
                <ServiceIcon name={recurringPlan.icon} className="size-6" />
              </span>
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  {recurringPlan.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {recurringPlan.short}
                </p>
              </div>
            </div>
            <ActionLink href="/pricing-estimator" variant="clay" className="shrink-0">
              Build a Plan
            </ActionLink>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
