import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, Check, ArrowRight } from 'lucide-react'
import { services, business } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { ActionLink } from '@/components/action-link'
import { FaqAccordion } from '@/components/faq-accordion'
import { CtaSection } from '@/components/cta-section'
import { ServiceIcon } from '@/components/icon-map'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: `${service.title} | J's Pest Solutions`,
    description: service.short,
  }
}

function InfoCard({
  title,
  items,
  numbered,
}: {
  title: string
  items: string[]
  numbered?: boolean
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            {numbered ? (
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                {i + 1}
              </span>
            ) : (
              <Check className="size-5 shrink-0 text-primary" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} subtitle={service.short}>
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
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Signs you might be dealing with this
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.signs.map((sign) => (
                  <li
                    key={sign}
                    className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Check className="size-5 shrink-0 text-primary" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Our approach
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <InfoCard title="How we handle it" items={service.approach} numbered />
                <InfoCard title="What to expect" items={service.expect} />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <InfoCard title="How to prepare" items={service.prep} />
              <InfoCard title="What affects pricing" items={service.pricingFactors} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Common questions
              </h2>
              <div className="mt-5">
                <FaqAccordion items={service.faqs} />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-border bg-secondary/40 p-6">
                <span className="flex size-12 items-center justify-center rounded-xl bg-card text-primary">
                  <ServiceIcon name={service.icon} className="size-6" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                  Ready to get a straight answer?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Tell us what you are seeing and we will give you honest guidance and a fair estimate.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <ActionLink href="/pricing-estimator">Get a Price Estimate</ActionLink>
                  <ActionLink href={business.phoneHref} variant="outline">
                    <Phone className="size-5" />
                    Call or Text
                  </ActionLink>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Other services
                </h3>
                <ul className="mt-4 space-y-1">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/services/${o.slug}`}
                        className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary/50"
                      >
                        {o.title}
                        <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection title={`Dealing with ${service.title.toLowerCase()}?`} />
    </>
  )
}
