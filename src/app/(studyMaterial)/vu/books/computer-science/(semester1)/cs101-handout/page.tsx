import React from "react";
import type { Metadata } from "next";
import BookPresentLayout from "@/src/components/books/bookPresentLayot";

const data = {
  title: "Download CS101 Handout Introducing to Computing",
  description:
    "Free download the cs101 handout of vu introducing to Computing handout, all other handout of vu on computer science.",
  canonical: "/vu/books/computer-science/cs101-handout/",
  index: true,
  follow: true,
  url: "https://growlearnhub.com/vu/books/computer-science/cs101-handout/",
  keywords: [
    "cs101",
    "Introducing to Computing",
    "vu cs101",
    "cs101 handout",
    "cs101 Introducing to Computing",
    "vu cs101 Introducing to Computing",
    "vu cs101 handout Introducing to Computing",
  ],
  image:
    "/vu/book/semester1/cs101/Download-Handout-CS101-Introducing-To-Computing.webp",
  fileId:
    "/vu/book/semester1/cs101/Download-CS101-Handout-Introducing-To-Computing-pdf.pdf",
  fileName: "Download-CS101-handout-VU-introduction-to-programing.pdf",
  heading2: "Download CS101 Handout Introducing to Computing",
  buttontext: "Download CS101 Handout",
  tabletd1: ["Handout Name", "CS101 Handout Introducing to Computing"],
  tabletd2: ["Pages", "381"],
  tabletd3: ["University Name", "Virtual University"],
  tabletd4: ["Catgeory", "BS Computer Science"],
  b1: "Computer Science",
  b1Link: "/vu/books/computer-science/",
  b2: "CS101 Handout Download Introducing To Computing",
  list: [
    {
      id: 0,
      title: "Download CS101 Introducing To Computing Mid Term Past Paper",
      slug: "/",
    },
    {
      id: 1,
      title: "Download CS101 Introducing To Computing Final Term Past Paper",
      slug: "/",
    },
    {
      id: 2,
      title: "Download CS101 Introducing To Computing Highlighted Notes",
      slug: "/",
    },
    {
      id: 3,
      title:
        "Download CS101 Introducing To Computing Most Important Abbreviartion Mid Term",
      slug: "/",
    },
    {
      id: 4,
      title: "Download CS101 Introducing To Computing Most Important MCQS's",
      slug: "/",
    },
  ],
  paragraph1:
    "Growlearnhub is an educational platform that provides you with all the study material for various subjects like <a href='/vu/books/computer-science/' title='computer science'>computer science</a>, Information Technology, Software Engineering, Economics, Mass Communication, Psychology, Sociology, English (Applied Linguistics), and other related subjects. Here you can download the virtual university book <strong> CS101 Handout: Introduction to Programming </strong> for free.",
  paragraph2:
    "You can also download the past paper of CS101: Introduction to Computing, which is helpful for you in exam preparations. You can access and download other related books on computer science, like CS101 Introducing To Computing, <a href='/vu/books/computer-science/eng-101-handout/' title='English comprehension'>ENG101 English Comprehension</a>, ETH202 Ethics (For Non-Muslims), <a href='/vu/books/computer-science/mth100-handout/' title='General Mathematics'>MTH100 General Mathematics</a>, ISL202 Islamic Studies, MTH101 Calculus And Analytical Geometry, PAK301 Pakistan Studies, PHY101 Physics, PHY301 Circuit Theory, and many more.",
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
