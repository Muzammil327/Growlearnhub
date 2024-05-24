import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";

const data = {
  title: "11th class Books",
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
        <div className="grid lg:grid-cols-11 gap-2 mb-12">
          <div className="col-span-8">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque debitis odit blanditiis iure itaque rem odio officiis
              recusandae quae, ipsa nihil deserunt corrupti placeat? Quisquam
              laudantium aliquid at, ad quasi reprehenderit ullam tempora quidem
              qui maxime consequuntur nulla sint excepturi dolore, quibusdam
              animi similique nobis?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque debitis odit blanditiis iure itaque rem odio officiis
              recusandae quae, ipsa nihil deserunt corrupti placeat? Quisquam
              laudantium aliquid at, ad quasi reprehenderit ullam tempora quidem
              qui maxime consequuntur nulla sint excepturi dolore, quibusdam
              animi similique nobis?
            </p>
            <h2 className="text-xl font-semibold py-2">Punjab Board Class 11 Books</h2>
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-10 mt-4">
              {punjabBook.map(
                (
                  data // Changed 'data: any' to 'item: any'
                ) => (
                  <Card2 key={data.id} title={data.title} link={data.link} />
                )
              )}
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

const punjabBook = [
  { id: 0, title: "Physics Books", link: "/11th/books/" },
  { id: 1, title: "Biology Books", link: "/11th/books/" },
];
