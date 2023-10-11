import './globals.css'
import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import clsx from 'clsx'
import { createClient } from '@/prismicio'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
  const settings = await client.getSingle('settings');
  return {
    title: settings.data.site_title || "Fall Back",
    description: settings.data.meta_description || "Meta Back up Fall back",
    openGraph: {
      images: [settings.data.og_image.url || ""],
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
