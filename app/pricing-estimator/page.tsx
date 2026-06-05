import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { PricingEstimator } from '@/components/pricing-estimator'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Pricing Estimator | J\'s Pest Solutions',
  description:
    'Get a quick, no-obligation pest control price range for your Colorado home or business. Answer a few questions and we will follow up with a firm quote.',
}

export default function PricingEstimatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing Estimator"
        title="Get a ballpark price in about a minute"
        subtitle="Answer a few quick questions and we will show you an honest estimated range. There is no obligation — share your details and a real local person follows up with a firm quote."
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <PricingEstimator />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          This is an estimate to set expectations, not a final quote. Final pricing depends on an
          inspection of your specific property.
        </p>
      </section>

      <CtaSection
        title="Prefer to just talk it through?"
        subtitle="Call or text and we will give you a straight answer. No national call center, no pressure."
      />
    </>
  )
}
