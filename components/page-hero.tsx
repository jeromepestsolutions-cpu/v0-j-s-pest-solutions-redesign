type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {eyebrow && (
          <p className="eyebrow">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold text-balance text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
