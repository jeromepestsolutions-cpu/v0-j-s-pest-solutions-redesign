import { MapPin } from 'lucide-react'
import { serviceAreas } from '@/lib/site-data'

export function ServiceAreaMap() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-primary p-8 text-primary-foreground">
      {/* Stylized map backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-primary-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-primary-foreground) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 size-48 rounded-full border border-primary-foreground/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-2 top-24 size-24 rounded-full border border-primary-foreground/20"
      />

      <div className="relative">
        <p className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-sm font-medium">
          <MapPin className="size-4" />
          Denver metro &amp; foothills
        </p>
        <h3 className="mt-4 font-serif text-2xl font-semibold">
          Proudly serving these communities
        </h3>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {serviceAreas.map((a) => (
            <li
              key={a.name}
              className="rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-sm font-medium ring-1 ring-primary-foreground/15"
            >
              {a.name}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/80">
          Not sure if you are in our area? Reach out and we will let you know.
          We group nearby appointments to keep service efficient and practical.
        </p>
      </div>
    </div>
  )
}
