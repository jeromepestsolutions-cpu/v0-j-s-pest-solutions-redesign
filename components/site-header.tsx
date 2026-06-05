'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Bug } from 'lucide-react'
import { business, navLinks } from '@/lib/site-data'
import { ActionLink } from '@/components/action-link'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${business.name} home`}>
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft ring-1 ring-primary/20">
            <Bug className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
              {business.name}
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Family-owned · Colorado
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/75 hover:bg-muted hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ActionLink href={business.phoneHref} variant="outline">
            <Phone className="size-4" />
            Call or Text
          </ActionLink>
          <ActionLink href="/pricing-estimator" variant="clay">
            Request Estimate
          </ActionLink>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <ActionLink href={business.phoneHref} variant="outline" size="lg">
                <Phone className="size-4" />
                Call or Text {business.phone}
              </ActionLink>
              <ActionLink href="/pricing-estimator" variant="clay" size="lg">
                Request an Estimate
              </ActionLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
