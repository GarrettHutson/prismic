import './globals.css'
import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import clsx from 'clsx'
import { createClient } from '@/prismicio'

const nunito = Nunito({
  subsets: ['latin'],
  variable: "--font-nunito",
  display: 'swap',
});

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  variable: "--font-nunito-san",
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {

  const client = createClient();
const page = await client.getSingle('settings');
  return {
    title: page.data.site_title || "Fall Back",
    description: page.data.meta_description || "Meta Back up Fall back",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={clsx(nunito.variable, nunito_sans.variable)} lang="en">
      <body >
        <header>Header!</header>
        {children}
        <footer>Footer!</footer>
        </body>
    </html>
  )
}
