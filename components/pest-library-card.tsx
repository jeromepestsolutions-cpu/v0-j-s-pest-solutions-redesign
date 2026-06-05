import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { PestLibraryEntry } from '@/lib/site-data'

export function PestLibraryCard({ entry }: { entry: PestLibraryEntry }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <h3 className="font-serif text-xl font-semibold text-foreground">
        {entry.name}
      </h3>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-medium text-foreground">Signs you may have it</dt>
          <dd className="mt-0.5 text-muted-foreground">{entry.signs}</dd>
        </div>
        <div>
          <dt className="font-medium text-foreground">Why it happens</dt>
          <dd className="mt-0.5 text-muted-foreground">{entry.why}</dd>
        </div>
        <div>
          <dt className="font-medium text-foreground">When to call</dt>
          <dd className="mt-0.5 text-muted-foreground">{entry.whenToCall}</dd>
        </div>
      </dl>
      <Link
        href={`/services/${entry.serviceSlug}`}
        className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
      >
        Related service
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  )
}
