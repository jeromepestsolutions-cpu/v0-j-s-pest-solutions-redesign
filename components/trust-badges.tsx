import { Check } from 'lucide-react'
import { trustBadges } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function TrustBadges({
  className,
  variant = 'light',
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  return (
    <ul className={cn('flex flex-wrap gap-2.5', className)}>
      {trustBadges.map((badge) => (
        <li
          key={badge}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium',
            variant === 'light'
              ? 'bg-card text-foreground shadow-sm ring-1 ring-border'
              : 'bg-primary-foreground/10 text-primary-foreground ring-1 ring-primary-foreground/20',
          )}
        >
          <Check
            className={cn(
              'size-4',
              variant === 'light' ? 'text-primary' : 'text-primary-foreground',
            )}
          />
          {badge}
        </li>
      ))}
    </ul>
  )
}
