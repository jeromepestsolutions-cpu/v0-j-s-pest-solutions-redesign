'use client'

import { useMemo, useState } from 'react'
import { Phone, Send, CheckCircle2, Info, HelpCircle } from 'lucide-react'
import { business } from '@/lib/site-data'
import { ActionLink } from '@/components/action-link'
import { Field, TextInput, Select, UploadPlaceholder } from '@/components/form-fields'

type PestKey =
  | 'ants'
  | 'spiders'
  | 'roaches'
  | 'rodents'
  | 'wasps'
  | 'termite'
  | 'bedbug'
  | 'mosquitoes'
  | 'general'
  | 'not-sure'

const pestOptions: { value: PestKey; label: string }[] = [
  { value: 'ants', label: 'Ants' },
  { value: 'spiders', label: 'Spiders' },
  { value: 'roaches', label: 'Roaches' },
  { value: 'rodents', label: 'Rodents' },
  { value: 'wasps', label: 'Wasps / hornets / yellow jackets' },
  { value: 'termite', label: 'Termite concern' },
  { value: 'bedbug', label: 'Bed bug concern' },
  { value: 'mosquitoes', label: 'Mosquitoes' },
  { value: 'general', label: 'General prevention' },
  { value: 'not-sure', label: 'Not sure' },
]

const baseRanges: Record<PestKey, [number, number] | null> = {
  ants: [129, 189],
  spiders: [129, 189],
  roaches: [149, 249],
  rodents: [199, 349],
  wasps: [149, 239],
  mosquitoes: [99, 179],
  general: [129, 199],
  'not-sure': [129, 299],
  termite: null,
  bedbug: null,
}

const severityFactor: Record<string, number> = {
  one: 0.9,
  occasional: 1,
  frequent: 1.25,
  heavy: 1.6,
  'not-sure': 1.1,
}

const sizeAdd: Record<string, number> = {
  small: 0,
  medium: 20,
  large: 55,
  xlarge: 110,
  'not-sure': 25,
}

const suggestedService: Record<PestKey, string> = {
  ants: 'Ants, Spiders & Roaches treatment',
  spiders: 'Ants, Spiders & Roaches treatment',
  roaches: 'Ants, Spiders & Roaches treatment',
  rodents: 'Rodent Control with exclusion',
  wasps: 'Wasps & Stinging Insects service',
  termite: 'Termite Inspection',
  bedbug: 'Bed Bug Inspection',
  mosquitoes: 'Seasonal Mosquito treatment',
  general: 'General Pest Control',
  'not-sure': 'Inspection & General Pest Control',
}

const initial = {
  name: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  zip: '',
  pest: '' as PestKey | '',
  propertyType: '',
  size: '',
  severity: '',
  coverage: 'both',
  frequency: 'one-time',
  contactMethod: 'call',
}

export function PricingEstimator() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)

  const set = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  const estimate = useMemo(() => {
    if (!form.pest) return null

    const pest = form.pest as PestKey
    const base = baseRanges[pest]

    // Inspection-first pests
    if (base === null) {
      return {
        inspection: true,
        low: 0,
        high: 0,
        confidence: 'Low' as const,
        nextStep:
          'These pests need a careful inspection before any pricing. We will schedule a look first and explain what we find.',
        service: suggestedService[pest],
      }
    }

    const sev = severityFactor[form.severity] ?? 1.1
    const add = sizeAdd[form.size] ?? 25
    let low = Math.round((base[0] * sev + add) / 5) * 5
    let high = Math.round((base[1] * sev + add) / 5) * 5

    if (form.frequency === 'recurring') {
      // Recurring shows a lower per-visit range
      low = Math.round((low * 0.7) / 5) * 5
      high = Math.round((high * 0.8) / 5) * 5
    }
    if (form.coverage === 'both') {
      high = Math.round((high * 1.1) / 5) * 5
    }

    const known = [form.severity, form.size, form.propertyType].filter(
      (v) => v && v !== 'not-sure',
    ).length
    const confidence =
      known >= 3 ? 'High' : known === 2 ? 'Medium' : 'Low'

    return {
      inspection: false,
      low,
      high,
      confidence: confidence as 'Low' | 'Medium' | 'High',
      nextStep:
        form.frequency === 'recurring'
          ? 'This reflects an approximate per-visit range on a recurring plan. Elizabeth will confirm visit frequency and final pricing.'
          : 'This is a ballpark for a one-time service. Elizabeth will confirm details and final pricing after a quick review.',
      service: suggestedService[pest],
    }
  }, [form])

  const confidenceColor =
    estimate?.confidence === 'High'
      ? 'bg-primary/10 text-primary'
      : estimate?.confidence === 'Medium'
        ? 'bg-clay/15 text-clay'
        : 'bg-muted text-muted-foreground'

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* Form */}
      <form
        className="lg:col-span-3"
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
          if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        {submitted ? (
          <div className="rounded-2xl border border-primary/30 bg-card p-8 text-center">
            <CheckCircle2 className="mx-auto size-12 text-primary" />
            <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
              Thanks, {form.name || 'neighbor'} — we got it.
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Elizabeth will review your details and reach out by{' '}
              {form.contactMethod} to confirm the right service and final
              pricing. No automated runaround — a real local person follows up.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false)
                setForm(initial)
              }}
              className="mt-6 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Start a new estimate
            </button>
          </div>
        ) : (
          <div className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" required>
                <TextInput
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  placeholder="Your name"
                />
              </Field>
              <Field label="Phone" htmlFor="phone" required>
                <TextInput
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  placeholder="(719) 000-0000"
                />
              </Field>
            </div>

            <Field label="Email" htmlFor="email">
              <TextInput
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => set('email', e.target.value)}
                placeholder="you@example.com"
              />
            </Field>

            <Field label="Street address" htmlFor="address">
              <TextInput
                id="address"
                value={form.address}
                onChange={(e) => set('address', e.target.value)}
                placeholder="123 Main St"
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="City" htmlFor="city">
                <TextInput
                  id="city"
                  value={form.city}
                  onChange={(e) => set('city', e.target.value)}
                  placeholder="Arvada"
                />
              </Field>
              <Field label="ZIP" htmlFor="zip">
                <TextInput
                  id="zip"
                  value={form.zip}
                  onChange={(e) => set('zip', e.target.value)}
                  placeholder="80004"
                />
              </Field>
            </div>

            <Field label="What pest issue are you dealing with?" htmlFor="pest" required>
              <Select
                id="pest"
                required
                value={form.pest}
                onChange={(e) => set('pest', e.target.value)}
              >
                <option value="" disabled>
                  Select a pest issue
                </option>
                {pestOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </Select>
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Property type" htmlFor="propertyType">
                <Select
                  id="propertyType"
                  value={form.propertyType}
                  onChange={(e) => set('propertyType', e.target.value)}
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option value="single">Single-family home</option>
                  <option value="townhome">Townhome / condo</option>
                  <option value="apartment">Apartment</option>
                  <option value="commercial">Commercial</option>
                  <option value="other">Other</option>
                </Select>
              </Field>
              <Field label="Approximate size" htmlFor="size">
                <Select
                  id="size"
                  value={form.size}
                  onChange={(e) => set('size', e.target.value)}
                >
                  <option value="" disabled>
                    Select size
                  </option>
                  <option value="small">Under 1,500 sq ft</option>
                  <option value="medium">1,500–2,500 sq ft</option>
                  <option value="large">2,500–4,000 sq ft</option>
                  <option value="xlarge">4,000+ sq ft</option>
                  <option value="not-sure">Not sure</option>
                </Select>
              </Field>
            </div>

            <Field label="How much activity are you seeing?" htmlFor="severity">
              <Select
                id="severity"
                value={form.severity}
                onChange={(e) => set('severity', e.target.value)}
              >
                <option value="" disabled>
                  Select severity
                </option>
                <option value="one">I saw one or two</option>
                <option value="occasional">Occasional activity</option>
                <option value="frequent">Frequent activity</option>
                <option value="heavy">Heavy infestation</option>
                <option value="not-sure">Not sure</option>
              </Select>
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Where is the issue?" htmlFor="coverage">
                <Select
                  id="coverage"
                  value={form.coverage}
                  onChange={(e) => set('coverage', e.target.value)}
                >
                  <option value="interior">Interior</option>
                  <option value="exterior">Exterior</option>
                  <option value="both">Both</option>
                </Select>
              </Field>
              <Field label="Service type" htmlFor="frequency">
                <Select
                  id="frequency"
                  value={form.frequency}
                  onChange={(e) => set('frequency', e.target.value)}
                >
                  <option value="one-time">One-time help</option>
                  <option value="recurring">Recurring protection</option>
                </Select>
              </Field>
            </div>

            <Field label="Preferred contact method" htmlFor="contactMethod">
              <Select
                id="contactMethod"
                value={form.contactMethod}
                onChange={(e) => set('contactMethod', e.target.value)}
              >
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="email">Email</option>
              </Select>
            </Field>

            <UploadPlaceholder />

            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Send className="size-5" />
              Send this to J&apos;s Pest Solutions
            </button>
          </div>
        )}
      </form>

      {/* Output card */}
      <div className="lg:col-span-2">
        <div className="sticky top-20 space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Your ballpark estimate
            </h3>

            {!estimate ? (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Choose a pest issue and answer a few questions to see an
                estimated range. The more you share, the more confident the
                estimate.
              </p>
            ) : estimate.inspection ? (
              <div className="mt-4">
                <p className="font-serif text-3xl font-semibold text-foreground">
                  Inspection first
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {estimate.nextStep}
                </p>
              </div>
            ) : (
              <div className="mt-4">
                <p className="font-serif text-4xl font-semibold text-foreground">
                  ${estimate.low}
                  <span className="text-muted-foreground"> – </span>${estimate.high}
                  {form.frequency === 'recurring' && (
                    <span className="block text-sm font-sans font-normal text-muted-foreground">
                      approx. per recurring visit
                    </span>
                  )}
                </p>
              </div>
            )}

            {estimate && (
              <div className="mt-5 space-y-4 border-t border-border pt-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-foreground">
                    Confidence
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${confidenceColor}`}
                  >
                    {estimate.confidence}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground">
                    Suggested service
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {estimate.service}
                  </p>
                </div>

                <div className="flex gap-2 rounded-xl bg-secondary/50 p-3">
                  <Info className="mt-0.5 size-4 shrink-0 text-primary" />
                  <p className="text-sm text-secondary-foreground">
                    {estimate.nextStep}
                  </p>
                </div>

                <div>
                  <p className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <HelpCircle className="size-4 text-primary" />
                    Questions Elizabeth may ask
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    <li>How long have you noticed the activity?</li>
                    <li>Are there pets, kids, or sensitive areas to plan around?</li>
                    <li>Is there easy access to the affected areas?</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <ActionLink
            href={business.phoneHref}
            variant="outline"
            size="lg"
            className="w-full"
          >
            <Phone className="size-5" />
            Call or Text Now
          </ActionLink>

          <p className="rounded-xl bg-muted/60 p-4 text-xs leading-relaxed text-muted-foreground">
            This estimate is for planning only. Final pricing depends on
            inspection details, severity, access, treatment type, and service
            frequency.
          </p>
        </div>
      </div>
    </div>
  )
}
