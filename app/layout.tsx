import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Great_Vibes, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const sans = Libre_Baskerville({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})
const script = Great_Vibes({
  variable: '--font-script',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'SMM Studio - Your Social Media Expert 🌸',
  description: 'Premium social media strategy, content creation, and growth for luxury brands✨',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F5F1ED',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable} scroll-smooth`}>
      <body className="bg-cream antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
