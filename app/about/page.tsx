import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Heart, ShieldCheck, MessageCircle, MapPin } from 'lucide-react'
import { business } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { ActionLink } from '@/components/action-link'
import { TrustBadges } from '@/components/trust-badges'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'About | J\'s Pest Solutions',
  description:
    'J\'s Pest Solutions is a family-owned pest control company serving Arvada, Denver, and the surrounding Colorado communities with honest, neighborly service.',
}

const values = [
  {
    icon: Heart,
    title: 'Family-owned, personally run',
    body: 'When you call, you reach us — not a national call center. We treat your home the way we treat our own.',
  },
  {
    icon: MessageCircle,
    title: 'Honest, no-pressure advice',
    body: 'If you do not need treatment, we will tell you. Straight answers build the kind of trust that earns repeat neighbors.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed, insured, experienced',
    body: 'With 20+ years of experience, we bring practical, environmentally conscious solutions to every visit.',
  },
  {
    icon: MapPin,
    title: 'Truly local',
    body: 'We live and work here. Knowing the area and its seasons helps us solve pest problems the right way.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A family business that treats neighbors like neighbors"
        subtitle="J's Pest Solutions was built on a simple idea: honest pest control from people who actually live and work in your community."
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
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/jerome-elizabeth.png"
              alt="The owners of J's Pest Solutions standing together outside their Colorado home"
              width={800}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground text-balance">
              Run by Jerome&apos;s family
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                We started J&apos;s Pest Solutions because we believed pest
                control could feel different — less like a hard sell and more
                like a neighbor lending a hand. Jerome handles the work in the
                field with 20+ years of hands-on experience while teaching his
                boys, Jerome Jr and Tre. Elizabeth and Crystalle keep scheduling
                and communication clear and personal.
              </p>
              <p>
                We are not a giant franchise. That means when you have a
                question, you talk to one of us. It means we take the time to
                explain what we find and recommend only what you actually need.
              </p>
              <p>
                Most of all, it means we stake our name on every visit. We want
                to be the company your family calls for years — and the one you
                feel good recommending to a neighbor.
              </p>
            </div>
            <TrustBadges className="mt-6" />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-foreground text-balance">
            What we stand for
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <value.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
