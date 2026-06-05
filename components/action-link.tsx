import Link from 'next/link'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50'

const sizes = {
  default: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-base',
}

const variants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  clay: 'bg-clay text-clay-foreground hover:bg-clay/90',
  outline:
    'border border-primary/30 bg-transparent text-primary hover:bg-primary/5',
  onDark:
    'border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10',
}

type Props = {
  href: string
  children: React.ReactNode
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
}

export function ActionLink({
  href,
  children,
  variant = 'primary',
  size = 'default',
  className,
}: Props) {
  const isExternal = href.startsWith('tel:') || href.startsWith('sms:') || href.startsWith('mailto:')
  const classes = cn(base, sizes[size], variants[variant], className)

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
