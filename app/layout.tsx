import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AppProvider } from './utils/AppContext';
config.autoAddCss = false
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MetaLoot - Blockchain API For Gaming',
  description: 'Ship faster, cheaper and better with our API.',
  openGraph: {
    title: 'MetaLoot - Blockchain API For Gaming',
    description: 'Ship faster, cheaper and better with our API.',
    url: 'https://www.metaloot.dev/',
    images: [
      {
        url: 'https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/banner.png',
        alt: 'MetaLoot blockchain API For Gaming',
      },
    ],
  },
  icons: {
    icon: '/logo.png',
    // You can also specify different sizes
    apple: [
      { url: '/logo.png' },
      { url: '/apple_pic.png', sizes: '180x180' }
    ],
    shortcut: '/favicon.ico'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <Head>
        {/* General Meta Tags */}
        <meta name="title" content="MetaLoot - Gaming Digital Asset Register" />
        <meta name="description" content="Ship faster, cheaper and better with our API." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.metaloot.dev/" />
        <meta property="og:title" content="MetaLoot - Gaming Digital Asset Register" />
        <meta property="og:description" content="Ship faster, cheaper and better with our API." />
        <meta property="og:image" content="https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/metaloot/webmetadata/metaloot.png" />
        <meta property="og:image:alt" content="A stunning preview of MetaLoot's multiverse gaming platform" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.metaloot.dev/" />
        <meta name="twitter:title" content="MetaLoot - Gaming Digital Asset Register" />
        <meta name="twitter:description" content="Ship faster, cheaper and better with our API." />
        <meta name="twitter:image" content="https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/metaloot/webmetadata/metaloot.png" />
        <meta name="twitter:image:alt" content="A stunning preview of MetaLoot's multiverse gaming platform" />
        <meta name="twitter:site" content="@playmetaloot" />
        <meta name="twitter:creator" content="@playmetaloot" />

        {/* Telegram */}
        <meta property="og:title" content="MetaLoot - Gaming Digital Asset Register" />
        <meta property="og:description" content="Ship faster, cheaper and better with our API." />
        <meta property="og:image" content="https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/metaloot/webmetadata/metaloot.png" />
        <meta property="og:url" content="https://www.metaloot.dev/" />

        {/* Discord */}
        <meta property="og:title" content="MetaLoot - Gaming Digital Asset Register" />
        <meta property="og:description" content="Ship faster, cheaper and better with our API." />
        <meta property="og:image" content="https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/metaloot/webmetadata/metaloot.png" />
        <meta property="og:type" content="website" />
      </Head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
        <Analytics />
      </body>
    </html>
  )
} 