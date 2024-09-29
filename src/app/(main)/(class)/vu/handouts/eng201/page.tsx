import React from "react"
import { Metadata } from "next"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import { VuHandoutsData } from "../data"
import PDFViewer from "@/src/components/element/PDFViewer"
import Table from "@/src/components/element/table"
import Accordation from "@/src/components/element/accordion"
import { UnorderedList, UnorderedListLink } from "@/src/components/ui/list"

const data = {
  title: "VU ENG201 Handouts Pdf Download",
  description:
    "Access ENG201 handouts and highlighted notes for VU students. Download English 201 handouts in PDF format to prepare for exams. Free and easy to download!",
  canonical: "/vu/handouts/eng201/",
  index: true,
  follow: true,
  image: "/vu/handouts/eng201_handouts.webp",
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
  fileId: "1sGLJuN5IQvqSOsoqVl64BEBoapsOFuGk"
}

const headingArray = ["ENG201 Chapter", "ENG201 Topics"]

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
    <SimpleWrapper
      title={data.title}
      url={data.canonical}
      b1="Handouts"
      b1Link="/vu/handouts/"
      b2="ENG201"
      image={data.image}
      clist={data.clist}
    >
      <p>
        Welcome to your one-stop source for <em>ENG201 Handouts</em> from
        Virtual University (VU). Download the handouts in PDF format for free
        and study at your own pace.
      </p>

      {/* PDF Viewer  */}
      <h3>Download ENG201 Handouts PDF</h3>
      <p>
        You can access the complete <strong>ENG201 handouts</strong> in PDF
        format by clicking the download link below.
      </p>
      <PDFViewer pdfUrl={data.fileId} />

      {/* Table  */}
      <h3>Topics Covered in ENG201 Handouts</h3>
      <p>Here are the key topics you&apos;ll find in the ENG201 handouts:</p>
      <Table
        chapterTitleArray={combinedData.map((item) => item.title)}
        contentArray={combinedData.map((item) => item.content)}
        chapterDATA={combinedData.map((item) => ({
          id: item.id,
          link: item.link
        }))} // Pass the modified chapterDATA
        headingArray={headingArray}
      />

      {/* Tips  */}
      <h3>How to Study ENG201 Effectively?</h3>
      <p>Here are some tips on how to make the most of your ENG201 handouts:</p>
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
      <h3>Frequently Asked Questions (FAQs)</h3>
      <Accordation
        data={[
          {
            title: "Can I download ENG201 handouts for free?",
            para: "Yes, you can download the ENG201 handouts in PDF format for free from this page."
          },
          {
            title: "Are these handouts enough to pass the exam?",
            para: "The ENG201 handouts provide all the key material required for the exam. However, it’s recommended to also practice past papers and do additional reading to perform well."
          }
        ]}
      />

      {/* Related Resources  */}
      <h3>Related Resources</h3>
      <p>
        If you're looking for more resources to ace your ENG201 course, check
        out the following:
      </p>
      <UnorderedListLink
        items={[
          {
            title: "ENG201 Highlight Handouts",
            link: "/vu/handouts/eng201/"
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

      {/* Related Links  */}
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {VuHandoutsData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/vu/handouts/${data.slug}`}
            />
          )
        })}
      </div>
    </SimpleWrapper>
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
