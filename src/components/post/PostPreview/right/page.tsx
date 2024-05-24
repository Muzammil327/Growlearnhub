import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PostCard } from "@/src/types/post/page";

interface Iprops {
  datas: PostCard;
}

export default function RHeroPostPreview({ datas }: Iprops) {
  return (
    <div className="card">
      <div className="img md:h-[300px]">
        <Image
          src="/h.png"
          alt="hjkh"
          width={500}
          height={500}
          className="mb-2"
        />
        <div className="cat md:block hidden">
          <a href={`/catgeory/${datas.catslug}`}>{datas.cat}</a>
        </div>
        <div className="tag md:block hidden">
          <a href={`/tag/${datas.tagslug}`}>{datas.tag}</a>
        </div>
      </div>
      <div className="content absolute bottom-0 !p-4">
      <Link href={`/posts/${datas.slug}`} className="!text-white">
          {datas.title}
        </Link>

        <div className="inner">
          <a href={`/team/${datas.authorslug}`}>
            <span className="!text-gray-400">by </span>{datas.author}
          </a>
          <span className="!text-gray-400">{datas.date}</span>
        </div>
        <p className="!text-white md:block hidden">{datas.para}</p>
      </div>
    </div>
  );
}
