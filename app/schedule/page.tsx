import type { Metadata } from 'next'
import { Phone, MessageSquare, Clock } from 'lucide-react'
import { business } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { ScheduleRequestForm } from '@/components/schedule-request-form'

export const metadata: Metadata = {
  title: 'Schedule Service | J\'s Pest Solutions',
  description:
    'Request pest control service in Arvada, Denver, and surrounding Colorado communities. Tell us what you are seeing and we will follow up to confirm a time.',
}

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Schedule Service"
        title="Request a visit and we will follow up"
        subtitle="Send us a few details about what is going on. We will reach out to confirm timing — usually the same day during business hours."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ScheduleRequestForm />
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-border bg-secondary/40 p-6">
                <h2 className="font-serif text-lg font-semibold text-foreground">
                  Rather reach out directly?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  You will always talk with a local person, not a call center.
                </p>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="size-5 shrink-0 text-primary" />
                    <a href={business.phoneHref} className="font-medium text-foreground hover:text-primary">
                      {business.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageSquare className="size-5 shrink-0 text-primary" />
                    <a href={business.smsHref} className="font-medium text-foreground hover:text-primary">
                      Text us anytime
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="size-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{business.hours}</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
