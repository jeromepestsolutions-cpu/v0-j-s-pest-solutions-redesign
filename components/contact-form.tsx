'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { Field, TextInput, TextArea, Select } from '@/components/form-fields'

const initial = {
  name: '',
  phone: '',
  email: '',
  city: '',
  topic: '',
  message: '',
}

export function ContactForm() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)

  const set = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-primary" />
        <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
          Thanks for reaching out, {form.name || 'neighbor'}.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          We will get back to you personally — usually the same day during
          business hours. No call center, no runaround.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setForm(initial)
          }}
          className="mt-6 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" htmlFor="c-name" required>
          <TextInput
            id="c-name"
            required
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone" htmlFor="c-phone" required>
          <TextInput
            id="c-phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            placeholder="(719) 000-0000"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" htmlFor="c-email">
          <TextInput
            id="c-email"
            type="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="City" htmlFor="c-city">
          <TextInput
            id="c-city"
            value={form.city}
            onChange={(e) => set('city', e.target.value)}
            placeholder="Arvada"
          />
        </Field>
      </div>

      <Field label="What can we help with?" htmlFor="c-topic">
        <Select
          id="c-topic"
          value={form.topic}
          onChange={(e) => set('topic', e.target.value)}
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option value="estimate">Pricing or estimate</option>
          <option value="schedule">Scheduling a visit</option>
          <option value="identify">Help identifying a pest</option>
          <option value="existing">Question about existing service</option>
          <option value="other">Something else</option>
        </Select>
      </Field>

      <Field label="Message" htmlFor="c-message" required>
        <TextArea
          id="c-message"
          required
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          placeholder="Tell us a bit about what you are seeing and where."
          rows={5}
        />
      </Field>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <Send className="size-5" />
        Send Message
      </button>
    </form>
  )
}
