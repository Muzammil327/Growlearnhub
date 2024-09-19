import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import '@/src/app/(main)/globals.scss'
import Script from 'next/script'
import ThemeSwitcher from '@/src/components/provider/ThemeSwitcher'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'growlearnhub',
  keywords: ['Codebloglab'],
  openGraph: {
    title: 'growlearnhub',
  },
  metadataBase: new URL('https://growlearnhub.com'),
  twitter: {
    title: 'growlearnhub',
  },
}

const data = {
  applicationName: 'Next.js',
  authorName: 'Muhammad Muzammil Safdar',
  domain: 'growlearnhub.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        {/* -- Metadata -- */}
        <meta name="application-name" content={data.applicationName} />
        <meta name="author" content={data.authorName} />
        <meta name="generator" content={data.applicationName} />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="light" />
        <meta name="creator" content={data.domain} />
        <meta name="publisher" content={data.domain} />

        {/* -- OG (Open Graph) -- */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={data.domain} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* -- Theme and Icons -- */}
        <meta name="theme-color" content="#f73e3e" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />

        {/* -- Twitter -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@growlearnhub" />
        <meta property="twitter:domain" content={data.domain} />

        {/* -- Verification -- */}
        <meta
          name="ahrefs-site-verification"
          content="234939215ab82c4e0069a4dfb6f90dcda6f5777af678e3dffac7654efdddbf42"
        />
        <meta name="ahrefs-site-verification" content="88f1bd9eeacba509beb6e3f35c2652b474e7cbf87e9f808540f588fe1dcd4eef" />

        <meta
          name="google-site-verification"
          content="1VFdWs-EKGhKENv4V6Weuup3qg0kkJGDwoI2gzRryEI"
        />

        {/* -- Preconnect -- */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>

      <body className={inter.className}>
        <ThemeSwitcher>{children}</ThemeSwitcher>
      </body>

      <Script id="google-analytics">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
  `}
      </Script>
    </html>
  )
}
