import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import type { ServiceArea } from '@/lib/site-data'

export function ServiceAreaCard({ area }: { area: ServiceArea }) {
  const inner = (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
      <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
        <MapPin className="size-5" />
      </span>
      <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
        {area.name}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {area.blurb}
      </p>
      {area.slug && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          View {area.name} page
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      )}
    </div>
  )

  if (area.slug) {
    return (
      <Link href={`/service-areas/${area.slug}`} className="group block h-full">
        {inner}
      </Link>
    )
  }
  return inner
}
