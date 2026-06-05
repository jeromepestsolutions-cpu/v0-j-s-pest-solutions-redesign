'use client'

import { useState } from 'react'
import { CheckCircle2, Send, Route } from 'lucide-react'
import {
  Field,
  TextInput,
  TextArea,
  Select,
  UploadPlaceholder,
} from '@/components/form-fields'
import { cn } from '@/lib/utils'

const preferredWindows = [
  { id: 'mon-pm', label: 'Monday afternoon', note: 'Best fit based on route' },
  { id: 'wed-am', label: 'Wednesday morning', note: 'Often available' },
  { id: 'fri-pm', label: 'Friday afternoon', note: 'Good for west metro' },
]

const initial = {
  existing: 'no',
  name: '',
  phone: '',
  address: '',
  pest: '',
  days: '',
  timePref: 'either',
  urgency: 'soon',
  window: '',
  notes: '',
}

export function ScheduleRequestForm() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)
  const set = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-primary" />
        <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
          Request received — thank you.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          This is a request, not a confirmed appointment yet. Elizabeth will
          review your location, pest issue, and route availability, then reach
          out to lock in the right window with you.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setForm(initial)
          }}
          className="mt-6 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
        if (typeof window !== 'undefined')
          window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      className="space-y-6"
    >
      <div className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <Field label="Are you an existing customer?" htmlFor="existing">
          <Select
            id="existing"
            value={form.existing}
            onChange={(e) => set('existing', e.target.value)}
          >
            <option value="no">No, I am new</option>
            <option value="yes">Yes, I am a current customer</option>
          </Select>
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" htmlFor="s-name" required>
            <TextInput
              id="s-name"
              required
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder="Your name"
            />
          </Field>
          <Field label="Phone" htmlFor="s-phone" required>
            <TextInput
              id="s-phone"
              type="tel"
              required
              value={form.phone}
              onChange={(e) => set('phone', e.target.value)}
              placeholder="(719) 000-0000"
            />
          </Field>
        </div>

        <Field label="Address" htmlFor="s-address">
          <TextInput
            id="s-address"
            value={form.address}
            onChange={(e) => set('address', e.target.value)}
            placeholder="123 Main St, Arvada, CO"
          />
        </Field>

        <Field label="Pest issue" htmlFor="s-pest">
          <TextInput
            id="s-pest"
            value={form.pest}
            onChange={(e) => set('pest', e.target.value)}
            placeholder="e.g. mice in the garage, ants in the kitchen"
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Preferred days" htmlFor="s-days">
            <TextInput
              id="s-days"
              value={form.days}
              onChange={(e) => set('days', e.target.value)}
              placeholder="e.g. Mon, Wed, or weekends"
            />
          </Field>
          <Field label="Time preference" htmlFor="s-time">
            <Select
              id="s-time"
              value={form.timePref}
              onChange={(e) => set('timePref', e.target.value)}
            >
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="either">Either</option>
            </Select>
          </Field>
        </div>

        <Field label="How urgent is it?" htmlFor="s-urgency">
          <Select
            id="s-urgency"
            value={form.urgency}
            onChange={(e) => set('urgency', e.target.value)}
          >
            <option value="flexible">Flexible, no rush</option>
            <option value="soon">Soon, within a week or two</option>
            <option value="urgent">Urgent, as soon as possible</option>
          </Select>
        </Field>

        <div>
          <p className="text-sm font-medium text-foreground">
            Preferred windows
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            These are request windows based on route availability, not confirmed
            appointments.
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {preferredWindows.map((w) => {
              const active = form.window === w.id
              return (
                <button
                  type="button"
                  key={w.id}
                  onClick={() => set('window', active ? '' : w.id)}
                  className={cn(
                    'rounded-xl border p-3 text-left transition-colors',
                    active
                      ? 'border-primary bg-primary/5 ring-1 ring-primary'
                      : 'border-border bg-background hover:border-primary/40',
                  )}
                >
                  <span className="block text-sm font-medium text-foreground">
                    {w.label}
                  </span>
                  <span className="mt-0.5 block text-xs text-primary">
                    {w.note}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <Field label="Notes" htmlFor="s-notes">
          <TextArea
            id="s-notes"
            value={form.notes}
            onChange={(e) => set('notes', e.target.value)}
            placeholder="Anything that helps us prepare — gate codes, pets, where you have seen activity, etc."
          />
        </Field>

        <UploadPlaceholder />

        <button
          type="submit"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Send className="size-5" />
          Request a Service Window
        </button>
      </div>

      <div className="flex gap-3 rounded-2xl border border-border bg-secondary/40 p-5">
        <Route className="mt-0.5 size-5 shrink-0 text-primary" />
        <div>
          <p className="font-medium text-foreground">Route-aware scheduling</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            We group nearby appointments when possible so our technicians spend
            less time driving and more time helping customers. Elizabeth will
            confirm the right window based on your location and our route.
          </p>
        </div>
      </div>
    </form>
  )
}
