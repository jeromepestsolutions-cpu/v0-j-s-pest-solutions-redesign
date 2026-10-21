'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export type HeroSlide = {
  src: string
  alt: string
}

// Add or remove photos here. The first photo always shows first;
// the rest are shuffled into a new order on every visit.
export const heroSlides: HeroSlide[] = [
  {
    src: '/images/hero-truck.jpg',
    alt: "Jerome standing by the J's Pest Solutions truck outside a Colorado home",
  },
  {
    src: '/images/hero-patio.jpg',
    alt: "Two J's Pest Solutions technicians treating a restaurant patio",
  },
  {
    src: '/images/hero-wasp-nest-1.jpg',
    alt: 'A technician in a protective suit treating a ground wasp nest',
  },
  {
    src: '/images/hero-team-selfie.jpg',
    alt: "Jerome and a teammate in J's Pest Solutions gear",
  },
  {
    src: '/images/hero-kitchen.jpg',
    alt: 'Technicians checking rodent stations in a commercial kitchen',
  },
  {
    src: '/images/hero-job-selfie.jpg',
    alt: "The J's Pest Solutions crew at a home service visit",
  },
  {
    src: '/images/hero-lamp-post.jpg',
    alt: 'A technician treating the base of a parking lot light post',
  },
  {
    src: '/images/hero-window-sweep.jpg',
    alt: 'A technician clearing webs from upper windows of a home',
  },
  {
    src: '/images/hero-wasp-nest-2.jpg',
    alt: 'Treating a wasp nest along a garden border',
  },
]

function shuffleAfterFirst<T>(items: T[]): T[] {
  const [first, ...rest] = items
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[rest[i], rest[j]] = [rest[j], rest[i]]
  }
  return first ? [first, ...rest] : []
}

const SLIDE_SECONDS = 5

export function HeroSlideshow({ slides: initialSlides = heroSlides }: { slides?: HeroSlide[] }) {
  const [slides, setSlides] = useState(initialSlides)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  // Mix up the order on each visit (after the page loads, so the
  // server and browser agree on the first render).
  useEffect(() => {
    setSlides(shuffleAfterFirst(initialSlides))
  }, [initialSlides])

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
