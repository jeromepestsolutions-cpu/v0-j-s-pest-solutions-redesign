import Link from 'next/link'
import { Phone, MessageSquare, ClipboardList } from 'lucide-react'
import { business } from '@/lib/site-data'

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={business.phoneHref}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-medium text-foreground"
        >
          <Phone className="size-5 text-primary" />
          Call
        </a>
        <a
          href={business.smsHref}
          className="flex flex-col items-center justify-center gap-0.5 border-x border-border py-2.5 text-xs font-medium text-foreground"
        >
          <MessageSquare className="size-5 text-primary" />
          Text
        </a>
        <Link
          href="/pricing-estimator"
          className="flex flex-col items-center justify-center gap-0.5 bg-clay py-2.5 text-xs font-semibold text-clay-foreground"
        >
          <ClipboardList className="size-5" />
          Estimate
        </Link>
      </div>
    </div>
  )
}
