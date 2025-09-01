import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Business Insights Dashboard',
  description: 'Enterprise-level data visualization and analytics dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark"> {/* ← Agregar clase dark */}
      <body className={`${inter.className} antialiased`}> {/* ← Agregar antialiased */}
        {children}
      </body>
    </html>
  )
}