import type { Metadata } from "next"
import dynamic from "next/dynamic"
import localFont from "next/font/local"
import "./globals.scss"
import ThemeSwitcher from "@/src/components/provider/ThemeSwitcher"
import QueryProvider from "@/src/components/provider/QueryProvider"
import Navbar from "@/src/components/layout/navbar/page"
const Footer = dynamic(() => import("@/src/components/layout/footer/page"))

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "growlearnhub",
  keywords: ["Codebloglab"],
  openGraph: {
    title: "growlearnhub"
  },
  metadataBase: new URL("https://growlearnhub.com"),
  twitter: {
    title: "growlearnhub"
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeSwitcher>
          <QueryProvider>
            <Navbar />
            {children}
            <Footer />
          </QueryProvider>
        </ThemeSwitcher>
      </body>
    </html>
  )
}
