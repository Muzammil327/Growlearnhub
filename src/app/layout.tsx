import type { Metadata } from "next";
import "./globals.scss";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/provider/page";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Roboto } from "next/font/google";

const Roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "growlearnhub",
  keywords: ["Codebloglab"],
  openGraph: {
    title: "growlearnhub",
  },
  metadataBase: new URL("https://www.growlearnhub.com"),
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
    <html lang="en" className="dark scroll-smooth">
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
          content={process.env.NEXT_PUBLIC_AHREFS_SITE_VERIFICATION}
        />

        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION}
        />

        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_VERIFICATION || ""}
        />
      </head>
      <body className={` ${Roboto_init.variable} antialiased`}>
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
