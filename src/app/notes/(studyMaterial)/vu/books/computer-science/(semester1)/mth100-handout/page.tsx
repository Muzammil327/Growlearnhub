import React from "react";
import type { Metadata } from "next";
import BookPresentLayout from "@/src/components/books/bookPresentLayot";

const data = {
  title: "Download MTH100 Handout General Mathematics",
  description:
    "Free download the MTH100 handout of vu General Mathematics handout, all other handout of vu on computer science and other fields are available. Download NOW.",
  canonical: "/vu/books/computer-science/mth100-handout/",
  index: true,
  follow: true,
  url: "https://growlearnhub.com/vu/books/computer-science/mth100-handout/",
  keywords: [
    "mth100",
    "General Mathematics",
    "vu mth100",
    "mth100 handout",
    "mth100 General Mathematics",
    "vu mth100 General Mathematics",
    "vu mth100 handout General Mathematics",
  ],
  image:
    "/vu/book/semester1/mth100/Download-MTH100-Handout-General-Mathematics.webp",
  fileId:
    "/vu/book/semester1/mth100/Download-MTH100-Handout-General-Mathematics-pdf.pdf",
  fileName: "MTH101-handout-VU-General-Mathematics.pdf",
  heading2: "Download MTH100 Handout General Mathematics",
  buttontext: "Download MTH100 Handout",
  tabletd1: ["Handout Name", "MTH100 General Mathematics"],
  tabletd2: ["University Name", "Virtual University"],
  tabletd3: ["Catgeory", "BS Computer Science"],
  tabletd4: ["Total Pages", "70"],
  b1: "Computer Science",
  b1Link: "/vu/books/computer-science/",
  b2: "MTH101 General Mathematics Handout",
  list: [
    {
      id: 0,
      title: "Download MTH101 General Mathematics Mid Term Past Paper",
      slug: "/",
    },
    {
      id: 1,
      title: "Download MTH101 General Mathematics Final Term Past Paper",
      slug: "/",
    },
    {
      id: 2,
      title: "Download MTH101 General Mathematics Highlighted Notes",
      slug: "/",
    },
    {
      id: 3,
      title: "Download MTH101 General Mathematics Most Important MCQS's",
      slug: "/",
    },
  ],
  paragraph1:
    "Growlearnhub is an educational platform that provides you with all the study material for various subjects like Information Technology, Software Engineering, <a href='/vu/books/computer-science/' title='computer science'>computer science</a>, Economics, Mass Communication, Psychology, Sociology, English (Applied Linguistics), and other related subjects. Here you can download the virtual university book <strong> MTH101 Handout: General Mathematics </strong> for free.",
  paragraph2:
    "You can also download the past paper of MTH101: General Mathematics, which is helpful for you in exam preparations. You can access and download other related books on computer science, like MTH101 General Mathematics, <a href='/vu/books/computer-science/eng101-handout/' title='ENG101 Handout English comprehension'>ENG101 English Comprehension</a>, ETH202 Ethics (For Non-Muslims), <a href='/vu/books/computer-science/cs101-handout/' title='CS101 Handout General Mathematics'>CS101 General Mathematics</a>, ISL202 Islamic Studies, MTH101 Calculus And Analytical Geometry, PAK301 Pakistan Studies, PHY101 Physics, PHY301 Circuit Theory, and many more.",
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
