import { Star } from 'lucide-react'
import type { Review } from '@/lib/site-data'

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-card">
      <div className="flex items-center gap-0.5 text-clay" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary ring-1 ring-primary/15">
          {review.initials}
        </span>
        <span className="text-sm">
          <span className="block font-medium text-foreground">
            Verified customer
          </span>
          <span className="block text-muted-foreground">{review.location}</span>
        </span>
      </figcaption>
    </figure>
  )
}
