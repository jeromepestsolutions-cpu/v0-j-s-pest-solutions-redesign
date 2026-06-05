import { Heart, PhoneCall, Handshake, MapPinned } from 'lucide-react'

const points = [
  {
    icon: PhoneCall,
    title: 'Talk to a real local person',
    body: 'You will not get pushed through a national call center. You reach people who actually service Colorado homes.',
  },
  {
    icon: Handshake,
    title: 'Honest guidance first',
    body: 'We help you understand what is going on before recommending treatment — even if that means less work for us.',
  },
  {
    icon: Heart,
    title: 'Personal accountability',
    body: 'When Jerome puts the family name on the work, he stands behind it. That is the whole point of staying local.',
  },
  {
    icon: MapPinned,
    title: 'Built around your neighborhood',
    body: 'We know the pests and pressures common to Arvada, Denver, and the surrounding metro through the seasons.',
  },
]

export function HomeDifference() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          The difference
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-balance text-foreground sm:text-4xl">
          Pest help without the corporate runaround
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Jerome started J&apos;s Pest Solutions after years inside big
          corporate pest companies. This business is built to feel like the
          opposite: personal, honest, and genuinely local.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <p.icon className="size-5" />
            </span>
            <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
