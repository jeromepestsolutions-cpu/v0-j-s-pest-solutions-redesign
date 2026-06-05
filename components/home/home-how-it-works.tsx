const steps = [
  {
    n: '01',
    title: 'Tell us what you’re seeing',
    body: 'Share the pest, where it shows up, and how long it has been going on. A quick photo helps too.',
  },
  {
    n: '02',
    title: 'We review the issue and location',
    body: 'We look at the details and your area to understand the likely cause and the right approach.',
  },
  {
    n: '03',
    title: 'Elizabeth helps confirm the right window',
    body: 'Elizabeth makes sure the details are right and helps line up a service window that fits your schedule and our route.',
  },
  {
    n: '04',
    title: 'Jerome or a trusted technician treats it',
    body: 'An experienced local technician handles the treatment and explains what was done and what to watch for.',
  },
]

export function HomeHowItWorks() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            How it works
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-balance text-foreground sm:text-4xl">
            Simple, personal, and clear from the first call
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-serif text-3xl font-semibold text-clay">
                {s.n}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
