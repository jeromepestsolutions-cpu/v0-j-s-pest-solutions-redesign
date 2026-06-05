import type { Metadata } from 'next'
import { Phone, Star } from 'lucide-react'
import { reviews, business } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { ReviewCard } from '@/components/review-card'
import { ActionLink } from '@/components/action-link'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Reviews | J\'s Pest Solutions',
  description:
    'See what neighbors across Arvada, Denver, and the Denver metro say about J\'s Pest Solutions — honest, local, family-owned pest control.',
}

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our neighbors are saying"
        subtitle="We are proud of the relationships we have built across the Denver metro. Here is a sample of feedback from local homeowners and businesses."
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm ring-1 ring-border">
            <span className="flex items-center gap-0.5 text-clay">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-medium text-foreground">
              Loved by local families
            </span>
          </div>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.initials + review.text} review={review} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-clay/30 bg-clay/10 p-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Worked with us before?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            We would be grateful if you shared your experience. A quick review
            helps other neighbors find honest, local pest control.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ActionLink href={business.phoneHref} variant="clay">
              <Phone className="size-5" />
              Call or Text to Share
            </ActionLink>
            <ActionLink href="/contact" variant="outline">
              Send Us a Note
            </ActionLink>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
