import React from "react";
import { Class9McqsDataChapter } from "@/src/data/class9";
import CardSmall from "@/src/components/card/cardSmall/cardSmall";

const data = [
  {
    item: "class-9",
    submenu: [
      { item: "biology", count: 9 },
      { item: "chemistry", count: 8 },
      { item: "physics", count: 9 },
    ],
  },
  {
    item: "class-10",
    submenu: [
      { item: "biology", count: 15 },
      { item: "chemistry", count: 18 },
      { item: "physics", count: 4 },
    ],
  },
];

export default function ShowChapter({
  className,
  book,
}: {
  className: string;
  book: string;
}) {
  const chapters = [...Class9McqsDataChapter];

  const submenu = data.find((item) => item.item === className)?.submenu;
  const chapterCount = submenu?.find((item) => item.item === book)?.count;

  if (chapterCount !== undefined) {
    const chaptersToShow = chapters.slice(0, chapterCount);
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {chaptersToShow.map((data: any) => (
          <CardSmall
            key={data.name}
            title={data.name}
            link={`${className}/mcqs/${book}/${data.slug}`}
          />
        ))}
      </div>
    );
  }

  return null;
}
