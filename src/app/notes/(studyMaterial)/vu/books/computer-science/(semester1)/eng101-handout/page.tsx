import React from "react";
import type { Metadata } from "next";
import BookPresentLayout from "@/src/components/books/bookPresentLayot";

const data = {
  title: "Download ENG101 Handout English Comprehension",
  description:
    "Free download the eng101 handout of vu english comprehension handout, all other handout of vu on computer science and other fields are available. Download NOW.",
  canonical: "/vu/books/computer-science/eng101-handout/",
  index: true,
  follow: true,
  url: "https://growlearnhub.com/vu/books/computer-science/eng101-handout/",
  keywords: [
    "eng101",
    "English Comprehension",
    "vu eng101",
    "eng101 handout",
    "eng101 English Comprehension",
    "vu eng101 English Comprehension",
    "vu eng101 handout English Comprehension",
  ],
  image:
    "/vu/book/semester1/eng101/Download-ENG101-Handout-English-Comprehension.webp",
  fileId:
    "/vu/book/semester1/eng101/Download-ENG101-Handout-English-Comprehension-pdf.pdf",
  fileName: "ENG101-handout-VU-English-Comprehension.pdf",
  heading2: "Download ENG101 Handout English Comprehension",
  buttontext: "Download ENG101 Handout",
  tabletd1: ["Handout Name", "ENG101 Handout English Comprehension"],
  tabletd2: ["Pages", "293"],
  tabletd3: ["University Name", "Virtual University"],
  tabletd4: ["Catgeory", "BS Computer Science"],
  b1: "Computer Science",
  b1Link: "/vu/books/computer-science/",
  b2: "ENG101 Handout English Comprehension",
  list: [
    {
      id: 0,
      title: "Download ENG101 English Comprehension Mid Term Past Paper",
      slug: "/",
    },
    {
      id: 1,
      title: "Download ENG101 English Comprehension Final Term Past Paper",
      slug: "/",
    },
    {
      id: 2,
      title: "Download ENG101 English Comprehension Highlighted Notes",
      slug: "/",
    },
    {
      id: 3,
      title:
        "Download ENG101 English Comprehension Most Important Abbreviartion Mid Term",
      slug: "/",
    },
    {
      id: 4,
      title: "Download ENG101 English Comprehension Most Important MCQS's",
      slug: "/",
    },
  ],
  paragraph1:
    "Growlearnhub is an educational platform that provides you with all the study material for various subjects like Information Technology, Software Engineering, Economics, <a href='/vu/books/computer-science/' title='computer science'>computer science</a>, Mass Communication, Psychology, Sociology, English (Applied Linguistics), and other related subjects. Here you can download the virtual university book <strong> ENG101 Handout: English Comprehension </strong> for free.",
  paragraph2:
    "You can also download the past paper of ENG101: English Comprehension, which is helpful for you in exam preparations. You can access and download other related books on computer science, like <a href='/vu/books/computer-science/ecs101-handout/' title='CS101 Handout Introducing To Computing'>CS101 Handout Introducing To Computing</a>, ETH202 Ethics (For Non-Muslims), <a href='/vu/books/computer-science/mth100-handout/' title='General Mathematics'>MTH100 General Mathematics</a>, ISL202 Islamic Studies, MTH101 Calculus And Analytical Geometry, PAK301 Pakistan Studies, PHY101 Physics, PHY301 Circuit Theory, and many more.",
};

export default function page() {
  return (
    <>
      <BookPresentLayout data={data} />
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
        url: `${data.image}`,
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
      url: `${data.image}`,
      alt: data.title,
    },
  },
};
