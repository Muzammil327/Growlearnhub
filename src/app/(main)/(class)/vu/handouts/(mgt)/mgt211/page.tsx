import React from "react";
import { Metadata } from "next";
import SimpleWrapper from "@/src/components/elements/SimpleWrapper";
import Link from "next/link";
import Table from "@/src/components/elements/table";
import UnorderedList from "@/src/components/elements/list/UnorderedList";
import PieChart from "@/src/components/elements/PieChart";
import PDFViewer from "@/src/components/elements/PDFViewer";

const data = {
  title: "MGT211 Handouts Free PDF Download | VU Students",
  description:
    "Download VU MGT211 handouts for free and get access to past papers, study guides, and exam preparation tips. Boost your learning with detailed notes.",
  canonical: "/vu/handouts/mgt211/",
  index: true,
  follow: true,
  image: "/vu/handouts/mgt211_handouts.webp",
  url: "https://www.growlearnhub.com/vu/handouts/mgt211/",
  keywords: [
    "growlearnhub",
    "vu mgt211 handouts",
    "growlearnhub mgt211 handouts",
    "mgt211 handouts",
    "virtual university mgt211 handouts",
  ],
  fileId: "1Long1Eiq5Lhd1vtMgQ8ozlQ3SnSSPkRW",
};

const combinedData = [
  {
    id: 1,
    link: "/",
    title: "Chapter 1",
    content: "INTRODUCTION",
  },
  {
    id: 2,
    link: "/",
    title: "Chapter 2",
    content: "ORGANIZATIONAL BOUNDARIES AND ENVIRONMENTS",
  },
  {
    id: 3,
    link: "/",
    title: "Chapter 3",
    content: "BUSINESS ORGANIZATION & SOLE PROPRIETORSHIP",
  },
  { id: 4, link: "/", title: "Chapter 4", content: "PARTNERSHIP" },
  {
    id: 5,
    link: "/",
    title: "Chapter 5",
    content: "JOINT STOCK COMPANY",
  },
  { id: 6, link: "/", title: "Chapter 6", content: "JOINT STOCK COMPANY II" },
  {
    id: 7,
    link: "/",
    title: "Chapter 7",
    content: "WHAT IS A MEETING",
  },
  {
    id: 8,
    link: "/",
    title: "Chapter 8",
    content: "COOPERATIVE SOCIETY",
  },
  {
    id: 9,
    link: "/",
    title: "Chapter 9",
    content: "CONCEPT OF ENTREPRENEURSHIP",
  },
  {
    id: 10,
    link: "/",
    title: "Chapter 10",
    content: "FRANCHISING",
  },
  {
    id: 11,
    link: "/",
    title: "Chapter 11",
    content: "SUCCESS AND FAILURE OF BUSINESS",
  },
  {
    id: 12,
    link: "/",
    title: "Chapter 12",
    content: "FOREIGN TRADE & FOREIGN BUSINESS",
  },
  {
    id: 13,
    link: "/",
    title: "Chapter 13",
    content: "BARRIERS TO INTERNATIONAL TRADE",
  },
  {
    id: 14,
    link: "/",
    title: "Chapter 14",
    content: "STAKE HOLDERS",
  },
  {
    id: 15,
    link: "/",
    title: "Chapter 15",
    content: "SETTING GOALS AND FORMULATING STRATEGY",
  },
  {
    id: 16,
    link: "/",
    title: "Chapter 16",
    content: "HUMAN RESOURCE PLANNING",
  }, // Continue as needed
  {
    id: 17,
    link: "/",
    title: "Chapter 17",
    content: "INFRASTRUCTURE FOR TEST",
  },
  {
    id: 18,
    link: "/",
    title: "Chapter 18",
    content: "COMPENSATION AND BENEFITS",
  },
  {
    id: 19,
    link: "/",
    title: "Chapter 19",
    content: "CONTEMPORARY MOTIVATIONAL THEORIES",
  },
  {
    id: 20,
    link: "/",
    title: "Chapter 20",
    content: "TWO‐FACTOR THEORY OR HYGIENE THEORY",
  },
  {
    id: 21,
    link: "/",
    title: "Chapter 21",
    content: "STRATEGIES FOR ENHANCING JOB SATISFACTION AND MORALE",
  },
  { id: 22, link: "/", title: "Chapter 22", content: "WHAT IS MARKETING" },
  {
    id: 23,
    link: "/",
    title: "Chapter 23",
    content: "Difference between Marketing and Selling",
  },
  { id: 24, link: "/", title: "Chapter 24", content: "THE MARKETING MIX" },
  { id: 25, link: "/", title: "Chapter 25", content: "MARKETING RESEARCH" },
  {
    id: 26,
    link: "/",
    title: "Chapter 26",
    content: "CONSUMER BEHAVIOR & MARKETING RESEARCH",
  },
  {
    id: 27,
    link: "/",
    title: "Chapter 27",
    content: "PRODUCT, TYPES OF PRODUCTS & STEPS FOR PRODUCT DEVELOPMENT",
  },
  {
    id: 28,
    link: "/",
    title: "Chapter 28",
    content: "PRODUCT LIFE CYCLE, BRANDING, PACKAGING & LABELING",
  },
  {
    id: 29,
    link: "/",
    title: "Chapter 29",
    content: "PRICING & DISTRIBUTION MIX",
  },
  {
    id: 30,
    link: "/",
    title: "Chapter 30",
    content: "WHOLESALING, RETAILING & PHYSICAL DISTRIBUTION",
  },
  {
    id: 31,
    link: "/",
    title: "Chapter 31",
    content: "PROMOTION & ADVERTISEMENT",
  },
  {
    id: 32,
    link: "/",
    title: "Chapter 32",
    content: "PERSONAL SELLING",
  },
  {
    id: 33,
    link: "/",
    title: "Chapter 33",
    content: "PERSONAL SELLING II",
  },
  {
    id: 34,
    link: "/",
    title: "Chapter 34",
    content: "SALES PROMOTION",
  },
  { id: 35, link: "/", title: "Chapter 35", content: "THE PRODUCTIVITY" },
  {
    id: 36,
    link: "/",
    title: "Chapter 36",
    content: "TOOLS FOR PRODUCTION PLANNING",
  },
  {
    id: 37,
    link: "/",
    title: "Chapter 37",
    content: "TOTAL QUALITY MANAGEMENT",
  },
  {
    id: 38,
    link: "/",
    title: "Chapter 38",
    content: "TOTAL QUALITY MANAGEMENT II",
  },
  {
    id: 39,
    link: "/",
    title: "Chapter 39",
    content: "BENCHMARKING",
  },
  {
    id: 40,
    link: "/",
    title: "Chapter 40",
    content: "COMMUNICATION",
  },
  {
    id: 41,
    link: "/",
    title: "Chapter 41",
    content: "NON‐VERBAL COMMUNICATION",
  },
  {
    id: 42,
    link: "/",
    title: "Chapter 42",
    content: "APPLICATION OF INFORMATION SYSTEM IN THE ORGANIZATION",
  },
  {
    id: 43,
    link: "/",
    title: "Chapter 43",
    content: "ACCOUNTING",
  },
  {
    id: 44,
    link: "/",
    title: "Chapter 44",
    content: "TOOLS OF THE ACCOUNTING TRADE",
  },
  {
    id: 45,
    link: "/",
    title: "Chapter 45",
    content: "FINANCIAL MANAGEMENT",
  },
];

export default function Page() {
  return (
    <SimpleWrapper data={data}>
      <p className="p5">
        Welcome to your one-stop source for <em>MGT211 Handouts</em> from
        <Link href="https://www.vu.edu.pk/">Virtual University (VU)</Link>.
        Download the handouts in PDF format for free and study at your own pace.
      </p>
      <h2>
        Download <strong>MGT211 handouts</strong> PDF
      </h2>
      <p className="p5">
        Access the complete MGT211 - INTRODUCTION TO BUSINESS handouts in PDF
        format by clicking the download link below. Be sure to download and
        review the materials to prepare effectively for your assessments.
      </p>

      <Table
        chapterTitleArray={[
          "Name",
          "Category",
          "Credit Hours",
          "Code",
          "Total Pages",
          "Total Chapter",
          "Mid Exam Coverage",
          "Final Exam Coverage",
        ]}
        contentArray={[
          "INTRODUCTION TO BUSINESS",
          "Business",
          "3 Credit",
          "211",
          "198",
          "45",
          "1 to 21",
          "22 to 45",
        ]}
        headingArray={["Course Title", "MGT211"]}
      />

      <h3>Assessment Scheme:</h3>

      <UnorderedList
        items={[
          {
            title: "Assignments (4%)",
            description: "",
          },
          {
            title: "Quizzes (4%)",
            description: "",
          },
          {
            title: "GDB (2%)",
            description:
              "Ability to convey ideas clearly, and the effective use of oral communication strategies.",
          },
          {
            title: "Mid Term (30%)",
            description:
              "Exam will consist of multiple-choice questions, short-answer questions, and practical writing tasks.",
          },
          {
            title: "Mid Term (60%)",
            description: "",
          },
        ]}
      />

      <PieChart
        labels={["GDB", "Assignments", "Quizzes", "Mid Term", "Final Term"]}
        dataValues={[2, 4, 4, 30, 60]}
        bookName="MGT211"
      />

      <PDFViewer pdfUrl={data.fileId} />

      <h2>
        Topics Covered in Business and Technical English (MGT211 Handouts)
      </h2>
      <p className="p5">
        Here are the key topics you&apos;ll find in the MGT211 handouts:
      </p>
      <Table
        chapterTitleArray={combinedData.map((item) => item.title)}
        contentArray={combinedData.map((item) => item.content)}
        chapterDATA={combinedData.map((item) => ({
          id: item.id,
          link: item.link,
        }))}
        headingArray={["MGT211 Chapter", "MGT211 Topics"]}
      />
    </SimpleWrapper>
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
        url: data.image,
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
      url: data.image,
      alt: data.title,
    },
  },
};
