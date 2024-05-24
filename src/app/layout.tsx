import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "growlearnhub",
  keywords: ["Codebloglab"],
  openGraph: {
    title: "growlearnhub",
  },
  metadataBase: new URL("https://growlearnhub.com"),
  twitter: {
    title: "growlearnhub",
  },
};

const data = {
  applicationName: "Next.js",
  authorName: "Muhammad Muzammil Safdar",
  domain: "growlearnhub.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content={data.applicationName} />
        <meta name="author" content={data.authorName} />
        <link rel="author" href="https://growlearnhub.com/" />
        <meta name="generator" content={data.applicationName} />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="light" />
        <meta name="creator" content={data.domain} />
        <meta name="publisher" content={data.domain} />
        {/* og */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={data.domain} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* icon */}
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
        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@growlearnhub" />
        <meta property="twitter:domain" content={data.domain} />
        {/* ahref  */}
        <meta
          name="ahrefs-site-verification"
          content="234939215ab82c4e0069a4dfb6f90dcda6f5777af678e3dffac7654efdddbf42"
        />
        {/* google search console  */}
        <meta
          name="google-site-verification"
          content="1VFdWs-EKGhKENv4V6Weuup3qg0kkJGDwoI2gzRryEI"
        />
      </head>
      <body className={inter.className}>{children}</body>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
  `}
      </Script>
    </html>
  );
}
