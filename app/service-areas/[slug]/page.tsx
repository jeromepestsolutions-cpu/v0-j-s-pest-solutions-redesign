import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Phone, MapPin, Check } from 'lucide-react'
import { areaDetails, services, reviews, business } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { ActionLink } from '@/components/action-link'
import { ServiceCard } from '@/components/service-card'
import { ReviewCard } from '@/components/review-card'
import { TrustBadges } from '@/components/trust-badges'
import { CtaSection } from '@/components/cta-section'

export function generateStaticParams() {
  return areaDetails.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = areaDetails.find((a) => a.slug === slug)
  if (!area) return { title: 'Area Not Found' }
  return {
    title: `Pest Control in ${area.name} | J's Pest Solutions`,
    description: area.intro,
  }
}

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = areaDetails.find((a) => a.slug === slug)
  if (!area) notFound()

  const localReviews = reviews
    .filter((r) => r.location.toLowerCase().includes(area.name.toLowerCase()))
    .slice(0, 2)
  const shownReviews = localReviews.length > 0 ? localReviews : reviews.slice(0, 2)
  const topServices = services.slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={`Service Area`}
        title={`Pest control in ${area.name}, Colorado`}
        subtitle={area.intro}
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
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Common pests in {area.name}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {area.commonPests.map((pest) => (
                  <div
                    key={pest.name}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <h3 className="font-medium text-foreground">{pest.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {pest.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                What we see locally
              </h2>
              <ul className="mt-5 space-y-3">
                {area.localNotes.map((note) => (
                  <li
                    key={note}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Check className="size-5 shrink-0 text-primary" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                What neighbors say
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {shownReviews.map((review) => (
                  <ReviewCard key={review.initials + review.text} review={review} />
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-border bg-secondary/40 p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-card text-primary">
                  <MapPin className="size-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  Areas we cover in {area.name}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {area.neighborhoods.map((n) => (
                    <li
                      key={n}
                      className="rounded-full bg-card px-3 py-1.5 text-sm text-foreground ring-1 ring-border"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Do not see your neighborhood? We likely still cover it — just
                  reach out.
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
                  Why neighbors choose us
                </h3>
                <TrustBadges className="mt-4" />
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Popular services in {area.name}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topServices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.short}
                icon={service.icon}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaSection title={`Need pest help in ${area.name}?`} />
    </>
  )
}
