import React from 'react';
import type { Metadata } from 'next';
import SubHeader from '@/src/components/layout/header/subheader/page';

const data = {
  title: 'Mcqs || Grow Learn Hub',
  description:
    'Main purpose of Codebloglab is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.',
  canonical: '/mcqs',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://growlearnhub.com/mcqs',
  keywords: ['growlearnhub', 'growlearn'],
};

export default function Page() {
  return (
    <>
      <SubHeader title="Mcqs Grow Learn Hub" />
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
        url: 'https://nextjs.org/og.png',
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
      url: 'https://nextjs.org/og.png',
      alt: data.title,
    },
  },
};
