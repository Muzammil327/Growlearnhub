import React from "react"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import Heading2 from "@/src/components/ui/typography/Heading2/page"
import LinkComponent from "@/src/components/ui/typography/Links/page"
import VUhHandoutWrapper from "@/src/app/(main)/(class)/vu/handouts/VUhHandoutWrapper"

const PieChart = dynamic(() => import("@/src/components/element/PieChart"))
const Heading3 = dynamic(
  () => import("@/src/components/ui/typography/Heading3/page")
)
const Accordation = dynamic(() => import("@/src/components/element/accordion"))
const Table = dynamic(() => import("@/src/components/element/table"))
const UnorderedList = dynamic(
  () => import("@/src/components/ui/list/UnorderedList")
)
const UnorderedListLink = dynamic(
  () => import("@/src/components/ui/list/UnorderedListLink")
)
const PDFViewer = dynamic(() => import("@/src/components/element/PDFViewer"))

const data = {
  title: "ENG201 Handouts Free PDF Download | VU Students",
  description:
    "Download VU ENG201 handouts for free and get access to past papers, study guides, and exam preparation tips. Boost your learning with detailed notes.",
  canonical: "/vu/handouts/eng201/",
  index: true,
  follow: true,
  image: "/vu/handouts/eng201-handouts.webp",
  url: "https://growlearnhub.com/vu/handouts/eng201/",
  keywords: [
    "growlearnhub",
    "vu eng201 handouts",
    "growlearnhub eng201 handouts",
    "eng201 handouts",
    "virtual university eng201 handouts"
  ],
  clist: [
    { name: "Handouts", slug: "/vu/handouts/" },
    { name: "Mid Term Mcqs", slug: "/vu/mid-mcqs/" },
    { name: "Final Term Mcqs", slug: "/vu/final-mcqs/" },
    { name: "Mid Mark Calculator", slug: "/vu/mid-mark-calculator/" }
  ],
  fileId: "1sGLJuN5IQvqSOsoqVl64BEBoapsOFuGk",
  b1: "VU",
  b1Link: "/vu/",
  b2: "Handouts",
  b2Link: "/vu/handouts/",
  b3: "ENG201"
}

const combinedData = [
  {
    id: 1,
    link: "/",
    title: "Chapter 1",
    content: "INTRODUCTION TO BUSINESS & TECHNICAL COMMUNICATION"
  },
  { id: 2, link: "/", title: "Chapter 2", content: "ORAL COMMUNICATION" },
  { id: 3, link: "/", title: "Chapter 3", content: "READER-CENTERED WRITING" },
  { id: 4, link: "/", title: "Chapter 4", content: "AUDIENCE ANALYSIS" },
  {
    id: 5,
    link: "/",
    title: "Chapter 5",
    content: "EFFECTIVE COMMUNICATION DEFINING OBJECTIVES-I"
  },
  { id: 6, link: "/", title: "Chapter 6", content: "DEFINING OBJECTIVES-II" },
  {
    id: 7,
    link: "/",
    title: "Chapter 7",
    content: "ACCURACY, CLARITY, CONCISENESS AND COHERENCE"
  },
  {
    id: 8,
    link: "/",
    title: "Chapter 8",
    content: "THE SEVEN C’S OF EFFECTIVE COMMUNICATION-I"
  },
  {
    id: 9,
    link: "/",
    title: "Chapter 9",
    content: "THE SEVEN C’S OF EFFECTIVE COMMUNICATION II"
  },
  {
    id: 10,
    link: "/",
    title: "Chapter 10",
    content: "THE SEVEN C’S OF EFFECTIVE COMMUNICATION III"
  },
  {
    id: 11,
    link: "/",
    title: "Chapter 11",
    content: "THE SEVEN C’S OF EFFECTIVE COMMUNICATION"
  },
  {
    id: 12,
    link: "/",
    title: "Chapter 12",
    content: "PLANNING BUSINESS MESSAGES"
  },
  {
    id: 13,
    link: "/",
    title: "Chapter 13",
    content: "COMPOSING BUSINESS MESSAGES"
  },
  {
    id: 14,
    link: "/",
    title: "Chapter 14",
    content: "REVISING BUSINESS MESSAGES"
  },
  {
    id: 15,
    link: "/",
    title: "Chapter 15",
    content: "MEMORANDUMS, MEETING DOCUMENTS AND PROPOSALS"
  },
  { id: 16, link: "/", title: "Chapter 16", content: "LETTERS" }, // Continue as needed
  { id: 17, link: "/", title: "Chapter 17", content: "LETTERS II" },
  {
    id: 18,
    link: "/",
    title: "Chapter 18",
    content: "WRITING DIRECT REQUESTS"
  },
  {
    id: 19,
    link: "/",
    title: "Chapter 19",
    content: "WRITING ROUTINE, GOOD-NEWS AND GOODWILL MESSAGES"
  },
  {
    id: 20,
    link: "/",
    title: "Chapter 20",
    content: "WRITING BAD-NEWS MESSAGES"
  },
  {
    id: 21,
    link: "/",
    title: "Chapter 21",
    content: "WRITING PERSUASIVE MESSAGES"
  },
  { id: 22, link: "/", title: "Chapter 22", content: "WRITING SHORT REPORTS" },
  { id: 23, link: "/", title: "Chapter 23", content: "PLANNING LONG REPORTS" },
  { id: 24, link: "/", title: "Chapter 24", content: "WRITING LONG REPORTS" },
  { id: 25, link: "/", title: "Chapter 25", content: "GENERAL REPORTS" },
  {
    id: 26,
    link: "/",
    title: "Chapter 26",
    content: "EMPIRICAL RESEARCH REPORT"
  },
  { id: 27, link: "/", title: "Chapter 27", content: "FEASIBILITY REPORTS" },
  { id: 28, link: "/", title: "Chapter 28", content: "PROGRESS REPORTS" },
  { id: 29, link: "/", title: "Chapter 29", content: "PROPOSALS" },
  { id: 30, link: "/", title: "Chapter 30", content: "INSTRUCTIONS" },
  { id: 31, link: "/", title: "Chapter 31", content: "USING VISUAL AIDS" },
  {
    id: 32,
    link: "/",
    title: "Chapter 32",
    content: "CREATING TWELVE TYPES OF VISUAL AIDS"
  },
  {
    id: 33,
    link: "/",
    title: "Chapter 33",
    content: "WRITING SPECIFICATIONS AND ANALYSIS REPORTS"
  },
  {
    id: 34,
    link: "/",
    title: "Chapter 34",
    content: "HOW TO AVOID COMMON WRITING PROBLEMS"
  },
  { id: 35, link: "/", title: "Chapter 35", content: "LANGUAGE REVIEW" },
  {
    id: 36,
    link: "/",
    title: "Chapter 36",
    content: "LANGUAGE REVIEW: SENTENCES"
  },
  {
    id: 37,
    link: "/",
    title: "Chapter 37",
    content: "LANGUAGE REVIEW: SENTENCES II"
  },
  { id: 38, link: "/", title: "Chapter 38", content: "LANGUAGE REVIEW" },
  {
    id: 39,
    link: "/",
    title: "Chapter 39",
    content: "LANGUAGE REVIEW: PUNCTUATION II "
  },
  {
    id: 40,
    link: "/",
    title: "Chapter 40",
    content: "LANGUAGE REVIEW: MECHANICS "
  },
  {
    id: 41,
    link: "/",
    title: "Chapter 41",
    content: "LISTENING AND INTERVIEWING"
  },
  {
    id: 42,
    link: "/",
    title: "Chapter 42",
    content: "PLANNING INTERVIEWS AND CONDUCTING MEETINGS"
  },
  {
    id: 43,
    link: "/",
    title: "Chapter 43",
    content: "GIVING SPEECHES AND ORAL PRESENTATIONS II"
  },
  {
    id: 44,
    link: "/",
    title: "Chapter 44",
    content: "REVIEW WRITTEN COMMUNICATION"
  },
  {
    id: 45,
    link: "/",
    title: "Chapter 45",
    content: "GIVING SPEECHES AND ORAL PRESENTATIONS I"
  }
]

export default function Page() {
  return (
    <VUhHandoutWrapper data={data}>
      <p className="p5">
        Welcome to your one-stop source for <em>ENG201 Handouts</em> from
        <LinkComponent slug="https://www.vu.edu.pk/" className="ml-1">
          Virtual University (VU)
        </LinkComponent>
        . Download the handouts in PDF format for free and study at your own
        pace.
      </p>

      {/* PDF Viewer  */}
      <Heading2 variant="black">
        Download <strong>ENG201 handouts</strong> PDF
      </Heading2>
      <p className="p5">
        Access the complete ENG201 - Business and Technical English Writing
        handouts in PDF format by clicking the download link below. Be sure to
        download and review the materials to prepare effectively for your
        assessments.
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
          "Final Exam Coverage"
        ]}
        contentArray={[
          "Business and Technical English",
          "English",
          "3 Credit",
          "201",
          "245",
          "45",
          "1 to 21",
          "22 to 45"
        ]}
        headingArray={["Course Title", "ENG201"]}
      />

      <Heading3 variant="black">Assessment Scheme:</Heading3>
      <UnorderedList
        items={[
          {
            title: "Assignments (4%)",
            description: ""
          },
          {
            title: "Quizzes (4%)",
            description: ""
          },
          {
            title: "GDB (2%)",
            description:
              "Ability to convey ideas clearly, and the effective use of oral communication strategies."
          },
          {
            title: "Mid Term (30%)",
            description:
              "Exam will consist of multiple-choice questions, short-answer questions, and practical writing tasks."
          },
          {
            title: "Mid Term (60%)",
            description: ""
          }
        ]}
      />

      <PieChart
        labels={["GDB", "Assignments", "Quizzes", "Mid Term", "Final Term"]}
        dataValues={[2, 4, 4, 30, 60]}
        bookName="ENG 201"
      />

      <PDFViewer pdfUrl={data.fileId} />

      {/* Table  */}
      <Heading3 variant="black">Course Synopsis</Heading3>
      <UnorderedList
        items={[
          {
            description:
              "Identifying and addressing the communication needs of the audience."
          },
          {
            description:
              "Developing persuasive, clear, and concise written messages, reports, proposals, memos, and other business documents."
          },
          {
            description:
              "Understanding and implementing visual aids to support effective presentations."
          }
        ]}
      />

      <Heading2 variant="black">
        Topics Covered in Business and Technical English (ENG201 Handouts)
      </Heading2>
      <p className="p5">
        Here are the key topics you&apos;ll find in the ENG201 handouts:
      </p>
      <Table
        chapterTitleArray={combinedData.map((item) => item.title)}
        contentArray={combinedData.map((item) => item.content)}
        chapterDATA={combinedData.map((item) => ({
          id: item.id,
          link: item.link
        }))}
        headingArray={["ENG201 Chapter", "ENG201 Topics"]}
      />

      {/* Tips  */}
      <Heading3 variant="black">How to Study ENG201 Effectively?</Heading3>
      <p className="p5">
        Here are some tips on how to make the most of your ENG201 handouts:
      </p>
      <UnorderedList
        items={[
          {
            title: "Read Handouts Thoroughly",
            description:
              "Go through each chapter and highlight key points. Make notes of important sections."
          },
          {
            title: "Practice Past Papers",
            description:
              "Use the handouts to revise and then practice past papers for better retention."
          }
        ]}
      />

      {/* FAQ  */}
      <Heading3 variant="black">Frequently Asked Questions (FAQs)</Heading3>
      <Accordation
        data={[
          {
            title: "Can I download ENG201 handouts for free?",
            para: "Yes, you can download the ENG201 handouts in PDF format for free from this page."
          },
          {
            title: "Are these handouts enough to pass the exam?",
            para: "The ENG201 handouts provide all the key material required for the exam. However, it’s recommended to also practice past papers and do additional reading to perform well."
          },
          {
            title:
              "How can I prepare for ENG201 final exams using these handouts?",
            para: "For final exam preparation, go through each chapter in the handouts, take notes, and focus on key topics that are frequently covered in exams. Combine this with solving past papers to familiarize yourself with the exam pattern."
          },
          {
            title: "Can I access these handouts on my mobile device?",
            para: "Yes, the handouts are in PDF format and can be accessed on any device, including smartphones, tablets, and computers, for convenient study on the go."
          }
        ]}
      />

      {/* Related Resources  */}
      <Heading3 variant="black">Related Resources:</Heading3>
      <p className="p5">
        If you&apos;re looking for more resources to ace your ENG201 course,
        check out the following:
      </p>
      <UnorderedListLink
        items={[
          {
            title: "ENG201 Highlight Handouts",
            link: "/vu/highlight-handouts/eng201/"
          },
          {
            title: "ENG201 Mid Term Solved Papers",
            link: "/vu/handouts/eng201/"
          },
          {
            title: "ENG201 Mid Term Mcqs",
            link: "/vu/handouts/eng201/"
          },
          {
            title: "ENG201 Mid Term Online Test",
            link: "/vu/handouts/eng201/"
          },
          {
            title: "ENG201 Final Term Solved Papers",
            link: "/vu/handouts/eng201/"
          },
          {
            title: "ENG201 Final Term Mcqs",
            link: "/vu/handouts/eng201/"
          },
          {
            title: "ENG201 Final Term Online Test",
            link: "/vu/handouts/eng201/"
          }
        ]}
      />
    </VUhHandoutWrapper>
  )
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
        alt: data.title
      }
    ]
  },
  alternates: {
    canonical: data.canonical
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow
    }
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title
    }
  }
}
