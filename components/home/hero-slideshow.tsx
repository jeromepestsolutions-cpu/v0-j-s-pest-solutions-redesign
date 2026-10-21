'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export type HeroSlide = {
  src: string
  alt: string
}

// Add or remove photos here. Each photo is shown for a few seconds,
// then fades into the next one.
export const heroSlides: HeroSlide[] = [
  {
    src: '/images/hero-technician-homeowner.png',
    alt: "A J's Pest Solutions technician talking with a homeowner outside a Colorado home",
  },
]

const SLIDE_SECONDS = 5

export function HeroSlideshow({ slides = heroSlides }: { slides?: HeroSlide[] }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (slides.length < 2 || paused) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return
    const timer = setInterval(
      () => setCurrent((i) => (i + 1) % slides.length),
      SLIDE_SECONDS * 1000,
    )
    return () => clearInterval(timer)
  }, [slides.length, paused])

  return (
    <div
      className="relative aspect-square w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={i === 0}
          aria-hidden={i !== current}
          className={cn(
            'object-cover transition-opacity duration-1000 ease-in-out',
            i === current ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}

      {slides.length > 1 && (
        <div className="absolute right-4 top-4 flex gap-2 rounded-full bg-black/25 px-2.5 py-2 backdrop-blur-sm">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Show photo ${i + 1} of ${slides.length}`}
              aria-current={i === current}
              className={cn(
                'h-2 rounded-full bg-white/70 shadow transition-all',
                i === current ? 'w-6 bg-white' : 'w-2 hover:bg-white',
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
