import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import { CardProps } from "@/src/app/(studyMaterial)/type";
import Form from "@/src/components/element/form/page";

const data = {
  title: "Virtual University Notes",
  description:
    "Main purpose of Codebloglab is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.",
  canonical: "/study-material/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/study-material/",
  keywords: ["growlearnhub quiz", "quiz"],
};

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />

      <Container>
        <div className="studyMateriala">
          <div className="c1">
            <div className="col">
              {punjabBook.map((data: CardProps) => (
                <Card2 key={data.id} title={data.title} link={data.link} />
              ))}
            </div>
            <Form url={data.url} />
          </div>
          <div className="c2">
            <Sidebar title={data.title} url={data.url} />
          </div>
        </div>
      </Container>
    </div>
  );
}

const punjabBook: CardProps[] = [
  {
    id: 0,
    title: "CS-201 Introducing to Programming",
    link: "/vu/notes/cs-201/",
  },
];
