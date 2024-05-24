import React from "react";
import type { Metadata } from "next";
import HomeView from "@/src/views/homeView/page";
import Navbar from "@/src/components/layout/navbar/page";
import Footer from "@/src/components/layout/footer/page";
import Header from "@/src/components/layout/header/page";

const data = {
  title: "Grow Learn Hub",
  description:
    "Main purpose of Codebloglab is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.",
  canonical: "/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/",
  keywords: ["growlearnhub quiz", "quiz"],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header title="Grow Learn Hub." />
      <main>
        <HomeView />
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: "https://nextjs.org/og.png",
        alt: data.title,
      },
    ],
  },
  alternates: {
    canonical: data.canonical,
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow,
    },
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: "https://nextjs.org/og.png",
      alt: data.title,
    },
  },
};