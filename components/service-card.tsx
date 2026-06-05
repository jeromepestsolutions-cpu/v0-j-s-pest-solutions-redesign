import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ServiceIcon } from '@/components/icon-map'

type Props = {
  title: string
  description: string
  icon: string
  href?: string
}

export function ServiceCard({ title, description, icon, href }: Props) {
  const content = (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
      <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
        <ServiceIcon name={icon} className="size-6" />
      </span>
      <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="group block h-full">
        {content}
      </Link>
    )
  }
  return content
}
