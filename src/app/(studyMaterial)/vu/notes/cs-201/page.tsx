import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";

const data = {
  title: "CS-201 Introducing to Programming Notes",
  description:
    "Main purpose of Codebloglab is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.",
  canonical: "/study-material/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/study-material/",
  keywords: ["growlearnhub quiz", "quiz"],
};
interface ChapterIProps {
  id: number;
  title: string;
  slug: string;
}
export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />

      <Container>
        <div className="grid lg:grid-cols-11 gap-2 mb-12">
          <div className="col-span-8">
            <div className="grid grid-cols-1 gap-y-4 mb-10 mt-4">
              {datas.map((item) => (
                <Card2 title={item.title} link={item.slug} key={item.id} />
              ))}
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque debitis odit blanditiis iure itaque rem odio officiis
              recusandae quae, ipsa nihil deserunt corrupti placeat? Quisquam
              laudantium aliquid at, ad quasi reprehenderit ullam tempora quidem
              qui maxime consequuntur nulla sint excepturi dolore, quibusdam
              animi similique nobis?
            </p>
          </div>
          <div className="col-span-3">
            <Sidebar title={data.title} url={data.url} />
          </div>
        </div>
      </Container>
    </div>
  );
}

const datas: ChapterIProps[] = [
  {
    id: 0,
    title: "Lecture No. 1",
    slug: "/vu/notes/cs-201/lecture-1/",
  },
  {
    id: 1,
    title: "Lecture No. 2",
    slug: "lecture-2",
  },
];
