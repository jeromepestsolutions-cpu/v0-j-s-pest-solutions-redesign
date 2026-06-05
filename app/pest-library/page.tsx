import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { pestLibrary, fieldNotes, business } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { PestLibraryCard } from '@/components/pest-library-card'
import { ActionLink } from '@/components/action-link'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Pest Library | J\'s Pest Solutions',
  description:
    'A simple guide to the common pests around Colorado homes — what to look for, why they show up, and when to call for help.',
}

export default function PestLibraryPage() {
  return (
    <>
      <PageHero
        eyebrow="Pest Library"
        title="Know what you are dealing with"
        subtitle="A plain-English guide to the pests we see most around Colorado homes. Spot the signs early and know when it is worth a call."
      >
        <ActionLink href={business.phoneHref} variant="outline" size="lg">
          <Phone className="size-5" />
          Call or Text {business.phone}
        </ActionLink>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pestLibrary.map((entry) => (
            <PestLibraryCard key={entry.name} entry={entry} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-foreground text-balance">
            Field notes
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
            Practical guidance from the field on common Colorado pest situations.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {fieldNotes.map((note) => (
              <article
                key={note.title}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground text-balance">
                  {note.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {note.blurb}
                </p>
                <span className="mt-4 text-sm font-medium text-muted-foreground">
                  Guide coming soon
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Not sure what you are seeing?"
        subtitle="Send us a photo or description and we will help you identify it — no obligation."
      />
    </>
  )
}
