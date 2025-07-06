import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jesus is king',
  description: 'Get your daily bible verse'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
