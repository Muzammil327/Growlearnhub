import React from "react";
import Link from "next/link";

export interface Article {
  id: string;
  date: string;
  title: string;
  slug: String;
  para: string;
}
interface Iprops {
  datas: Article;
}

export default function PostCard({ datas }: Iprops) {
  return (
    <div className="border p-3 relative rounded-md bg-white">
      <div className="content">
        <Link
          href={`/definitions/${datas.slug}`}
          className="text-xl sm:text-2xl font-semibold inline-block hover:text-red-600 transition duration-500 ease-in-out"
        >
          {datas.title}
        </Link>

        <div className="flex items-center gap-4 py-2">
          <span>{datas.date}</span>
        </div>
        <p className="text-gray-700 text-base leading-6">{datas.para}</p>
      </div>
    </div>
  );
}
