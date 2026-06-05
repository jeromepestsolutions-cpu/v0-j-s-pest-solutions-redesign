import {
  Shield,
  Bug,
  Search,
  TriangleAlert,
  CalendarCheck,
  Rat,
  type LucideIcon,
} from 'lucide-react'

export const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  bug: Bug,
  search: Search,
  'triangle-alert': TriangleAlert,
  'calendar-check': CalendarCheck,
  mouse: Rat,
}

export function ServiceIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = iconMap[name] ?? Bug
  return <Icon className={className} />
}
