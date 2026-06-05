import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: "J's Pest Solutions | Family-Owned Pest Control in Arvada & Denver, CO",
  description:
    "J's Pest Solutions is a family-owned pest control company serving Arvada, Denver, and surrounding Colorado communities with honest guidance, practical treatments, and personal service.",
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        <main className="min-h-screen pb-16 md:pb-0">{children}</main>
        <SiteFooter />
        <MobileCtaBar />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
