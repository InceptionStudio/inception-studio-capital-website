import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inception Studio Capital',
  description: 'Backing the most experienced AI founders from day zero.',
  metadataBase: new URL('https://inceptionstudio.capital'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
