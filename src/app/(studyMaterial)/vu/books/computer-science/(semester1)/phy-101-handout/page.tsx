import React from "react";
import type { Metadata } from "next";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import FileDownloader from "@/src/components/element/FileDownloader";
import PDFViewer from "@/src/components/element/PDFViewer";
import Form from "@/src/components/element/form/page";
import Image from "next/image";

const data = {
  title: "Download CS-101 Introducing to Computing Handout",
  description:
    "Free download the cs101 handout of vu introducing to Computing handout, all other handout of vu on computer science and other fields are available. Download NOW.",
  canonical: "/vu/books/computer-science/cs-101-handout/",
  index: true,
  follow: true,
  url: "https://growlearnhub.com/vu/books/computer-science/cs-101-handout/",
  keywords: ["cs101", "Introducing to Computing", "vu cs101"],
  image: "/vu/book/cs101/Download-CS-101-Introducing-To-Computing-Handout.webp",
  fileId: "/vu/book/cs101/Download-CS-101-Introducing-To-Computing-Handout-pdf.pdf",
  fileName: "CS-101-VU-introduction-to-programing-handout.pdf",
};

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />
      <Container>
        <div className="grid md:grid-cols-7 mb-28 gap-6">
          <div className="md:col-span-5">
            <div className="img">
              <Image
                src={data.image}
                alt={data.title}
                title={data.title}
                height={1280}
                className="h-auto w-full"
                width={720}
                priority
              />
            </div>
            <h2 className="text-xl font-semibold py-3">
              Download CS-201 Introducing to Computing Handout
            </h2>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">Handout Name</td>
                    <td className="px-6 py-4">
                      CS-201 Introducing to Computing
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">University Name</td>
                    <td className="px-6 py-4">Virtual University</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">Catgeory</td>
                    <td className="px-6 py-4">BS Computer Science</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <PDFViewer pdfUrl={data.fileId} />

            <FileDownloader
              fileId={data.fileId}
              fileName={data.fileName}
              buttonText="Download CS-201 Introducing to Computing Handout"
            />

            <Form url={data.url} />
          </div>

          <div className="md:col-span-2">
            <Sidebar title={data.title} url={data.url} />
          </div>
        </div>
      </Container>
    </div>
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
