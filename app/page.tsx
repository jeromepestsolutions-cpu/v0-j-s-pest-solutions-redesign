import Link from 'next/link'
import { ArrowRight, Calculator } from 'lucide-react'
import { services, recurringPlan, reviews } from '@/lib/site-data'
import { HomeHero } from '@/components/home/home-hero'
import { HomeDifference } from '@/components/home/home-difference'
import { HomeHowItWorks } from '@/components/home/home-how-it-works'
import { HomeFamily } from '@/components/home/home-family'
import { ServiceCard } from '@/components/service-card'
import { ReviewCard } from '@/components/review-card'
import { ServiceAreaMap } from '@/components/service-area-map'
import { CtaSection } from '@/components/cta-section'
import { ActionLink } from '@/components/action-link'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeDifference />

      {/* Common services */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                Common services
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-balance text-foreground sm:text-4xl lg:text-5xl">
                Practical help for the pests we see most
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              View all services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                description={s.short}
                icon={s.icon}
                href={`/services/${s.slug}`}
              />
            ))}
            <ServiceCard
              title={recurringPlan.title}
              description={recurringPlan.short}
              icon={recurringPlan.icon}
              href="/services"
            />
          </div>
        </div>
      </section>

      <HomeHowItWorks />

      {/* Pricing guidance */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-card">
          <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <span className="flex size-12 items-center justify-center rounded-xl bg-clay/15 text-clay ring-1 ring-clay/20">
                <Calculator className="size-6" />
              </span>
              <h2 className="mt-5 font-serif text-3xl font-semibold text-balance text-foreground sm:text-4xl">
                Understand pricing before you call
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Not every pest issue is the same, but we can help you understand
                what affects price before you call. Answer a few quick questions
                and get a ballpark range.
              </p>
              <div className="mt-7">
                <ActionLink href="/pricing-estimator" variant="clay" size="lg">
                  Try the Pricing Estimator
                </ActionLink>
              </div>
            </div>
            <ul className="grid gap-3 rounded-2xl border border-border bg-secondary/40 p-6 text-sm">
              {[
                'Pest type and how much activity you are seeing',
                'Property type and approximate size',
                'Interior, exterior, or both',
                'One-time help or recurring protection',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-clay" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                Service area
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-balance text-foreground sm:text-4xl lg:text-5xl">
                Local to Arvada, Denver, and the surrounding metro
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                We serve homes and businesses across the west and north Denver
                metro. If you are nearby, there is a good chance we already work
                in your neighborhood.
              </p>
              <div className="mt-7">
                <Link
                  href="/service-areas"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  See all service areas
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <ServiceAreaMap />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            What neighbors say
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-balance text-foreground sm:text-4xl lg:text-5xl">
            Trusted by homeowners and businesses across the metro
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <ReviewCard key={r.initials + r.location} review={r} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/reviews"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            Read more reviews
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <HomeFamily />
      <CtaSection />
    </>
  )
}
