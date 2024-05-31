import Link from "next/link";
import React from "react";

interface ChapterIProps {
  id: number;
  title: string;
  slug: string;
}

export default function page() {
  return (
    <>
      <ul>
        {data.map(
          (
            item // Changed 'data: any' to 'item: any'
          ) => (
            <li key={item.id}>
              <Link href={`/vu/computer-science/cs-201/${item.slug}`} >
                <span>{item.title}</span>
                <span> &gt; </span>
              </Link>{" "}
            </li>
          )
        )}
      </ul>
    </>
  );
}

const data: ChapterIProps[] = [
  {
    id: 0,
    title: "Lecture No. 1",
    slug: "lecture-1",
  },
  {
    id: 1,
    title: "Lecture No. 2",
    slug: "lecture-2",
  },
];
