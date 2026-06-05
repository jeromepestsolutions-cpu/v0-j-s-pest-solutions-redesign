type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold text-balance text-foreground sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  )
}
