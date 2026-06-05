import type { Metadata } from 'next'
import { Phone, MessageSquare, Mail, Clock, MapPin } from 'lucide-react'
import { business } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { ServiceAreaMap } from '@/components/service-area-map'

export const metadata: Metadata = {
  title: 'Contact | J\'s Pest Solutions',
  description:
    'Get in touch with J\'s Pest Solutions. Call or text for honest, local pest control in Arvada, Denver, and the surrounding Colorado communities.',
}

const contactItems = [
  {
    icon: Phone,
    label: 'Call us',
    value: business.phone,
    href: business.phoneHref,
  },
  {
    icon: MessageSquare,
    label: 'Text us',
    value: business.phone,
    href: business.smsHref,
  },
  {
    icon: Mail,
    label: 'Email',
    value: business.email,
    href: business.emailHref,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your pest problem"
        subtitle="Reach out however is easiest. You will always connect with a real local person who can give you honest guidance."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Send us a message
            </h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Tell us what is going on and we will follow up — usually the same
              day during business hours.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-serif text-lg font-semibold text-foreground">
                  Get in touch directly
                </h2>
                <ul className="mt-5 space-y-4">
                  {contactItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="flex items-start gap-3 group"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                          <item.icon className="size-5" />
                        </span>
                        <span>
                          <span className="block text-sm text-muted-foreground">
                            {item.label}
                          </span>
                          <span className="block font-medium text-foreground group-hover:text-primary">
                            {item.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Clock className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted-foreground">
                        Hours
                      </span>
                      <span className="block font-medium text-foreground">
                        {business.hours}
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <MapPin className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted-foreground">
                        Service area
                      </span>
                      <span className="block font-medium text-foreground">
                        Arvada, Denver &amp; the Denver metro
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12">
          <ServiceAreaMap />
        </div>
      </section>
    </>
  )
}
