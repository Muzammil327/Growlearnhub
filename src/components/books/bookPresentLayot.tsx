import React from "react";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import FileDownloader from "@/src/components/element/FileDownloader";
import PDFViewer from "@/src/components/element/PDFViewer";
import Form from "@/src/components/element/form/page";
import Image from "next/image";
import BreadCrumb from "../element/breadcrumb";

interface List {
  id: number;
  title: string;
  slug: string;
}
interface datas {
  title: string;
  image: string;
  fileId: string;
  fileName: string;
  url: string;
  b1: string;
  b2: string;
  b1Link: string;
  heading2: string;
  buttontext: string;
  tabletd1?: string[];
  tabletd2?: string[];
  tabletd3?: string[];
  tabletd4?: string[];
  tabletd5?: string[];
  list?: List[];
  paragraph1?: string;
  paragraph2?: string;
}
interface Iprops {
  data: datas;
}

export default function BookPresentLayout({ data }: Iprops) {
  return (
    <div>
      <SubHeader title={data.title} />
      <Container>
        <div className="grid md:grid-cols-7 mb-28 gap-6">
          <div className="md:col-span-5">
            <BreadCrumb b1={data.b1} b2={data.b2} b1Link={data.b1Link} />
            {data.paragraph1 && (
              <p dangerouslySetInnerHTML={{ __html: data.paragraph1 }} />
            )}
            {data.paragraph2 && (
              <p dangerouslySetInnerHTML={{ __html: data.paragraph2 }} />
            )}
            <div className="img mt-5">
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
            <h2 className="text-xl font-semibold py-3">{data.heading2}</h2>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <tbody>
                  {data.tabletd1 && (
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">{data.tabletd1[0]}</td>
                      <td className="px-6 py-4">{data.tabletd1[1]}</td>
                    </tr>
                  )}
                  {data.tabletd2 && (
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">{data.tabletd2[0]}</td>
                      <td className="px-6 py-4">{data.tabletd2[1]}</td>
                    </tr>
                  )}
                  {data.tabletd3 && (
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">{data.tabletd3[0]}</td>
                      <td className="px-6 py-4">{data.tabletd3[1]}</td>
                    </tr>
                  )}
                  {data.tabletd4 && (
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">{data.tabletd4[0]}</td>
                      <td className="px-6 py-4">{data.tabletd4[1]}</td>
                    </tr>
                  )}
                  {data.tabletd5 && (
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">{data.tabletd5[0]}</td>
                      <td className="px-6 py-4">{data.tabletd5[1]}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <PDFViewer pdfUrl={data.fileId} />

            <FileDownloader
              fileId={data.fileId}
              fileName={data.fileName}
              buttonText={data.buttontext}
            />

            <Form url={data.url} />
          </div>

          <div className="md:col-span-2">
            <Sidebar title={data.title} url={data.url} list={data.list} />
          </div>
        </div>
      </Container>
    </div>
  );
}
