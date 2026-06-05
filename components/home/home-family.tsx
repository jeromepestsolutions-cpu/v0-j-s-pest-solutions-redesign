import Image from 'next/image'
import { Phone } from 'lucide-react'
import { business } from '@/lib/site-data'
import { ActionLink } from '@/components/action-link'

export function HomeFamily() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative">
          <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-lift">
            <Image
              src="/images/jerome-elizabeth.png"
              alt="Jerome and Elizabeth, the family behind J's Pest Solutions"
              width={800}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="absolute -top-4 -right-4 -z-10 h-28 w-28 rounded-[1.75rem] bg-primary/20"
            aria-hidden="true"
          />
        </div>
        <div>
          <p className="eyebrow">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            The family behind the business
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-balance text-foreground sm:text-4xl lg:text-5xl">
            A name, a face, and a family you can actually reach
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Jerome brings years of hands-on pest-control experience to Colorado
            homes and businesses. Elizabeth helps make sure the details are
            right before your appointment is confirmed, so nothing slips through
            the cracks.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Together they run J&apos;s Pest Solutions the way they would want to
            be treated as customers: honest, responsive, and respectful of your
            home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/about" variant="primary" size="lg">
              Meet the family
            </ActionLink>
            <ActionLink href={business.phoneHref} variant="outline" size="lg">
              <Phone className="size-5" />
              Call or Text
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  )
}
