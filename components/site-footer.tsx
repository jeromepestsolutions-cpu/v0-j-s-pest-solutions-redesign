import Link from 'next/link'
import { Bug, Phone, Mail, Clock, ShieldCheck, Star } from 'lucide-react'
import { business, services, serviceAreas } from '@/lib/site-data'
import { ActionLink } from '@/components/action-link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground ink-grid">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                <Bug className="size-5" />
              </span>
              <span className="font-serif text-lg font-semibold">
                {business.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-foreground/75">
              {business.tagline}
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-ink-foreground/75">
              <ShieldCheck className="size-4 text-primary" />
              Licensed &amp; insured · 20+ years
            </div>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-foreground/75">
              <li>
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-ink-foreground"
                >
                  <Phone className="size-4 text-primary" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={business.emailHref}
                  className="flex items-center gap-2 break-all transition-colors hover:text-ink-foreground"
                >
                  <Mail className="size-4 text-primary" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-primary" />
                {business.hours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold">Quick links</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/75">
              <li>
                <Link href="/services" className="transition-colors hover:text-ink-foreground">
                  Services
                </Link>
              </li>
              {services.slice(0, 3).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="transition-colors hover:text-ink-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/pricing-estimator"
                  className="transition-colors hover:text-ink-foreground"
                >
                  Pricing Estimator
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-ink-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pest-library" className="transition-colors hover:text-ink-foreground">
                  Pest Library
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold">Service areas</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ink-foreground/75">
              {serviceAreas.map((a) => (
                <li key={a.name}>
                  {a.slug ? (
                    <Link
                      href={`/service-areas/${a.slug}`}
                      className="transition-colors hover:text-ink-foreground"
                    >
                      {a.name}
                    </Link>
                  ) : (
                    a.name
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <ActionLink href="/reviews" variant="onDark">
                <Star className="size-4" />
                Leave a Review
              </ActionLink>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-foreground/15 pt-6 text-xs text-ink-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. Family-owned pest
            control serving Arvada, Denver, and surrounding communities.
          </p>
          <p>Prototype site · Licensed &amp; insured in Colorado</p>
        </div>
      </div>
    </footer>
  )
}
