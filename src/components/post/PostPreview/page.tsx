import React from "react";
import Link from "next/link";
import ImageComponent from "../../elements/ImageComponent/page";

export interface Article {
  tagslug: string;
  authorslug: string;
  id: string;
  date: string;
  title: string;
  slug: String;
  para: string;
  cat: string;
  author: string;
  tag: string;
  catslug: string;
  image: string;
}
interface Iprops {
  datas: Article;
}

export default function PostCard({ datas }: Iprops) {
  return (
    <div className="postcard">
      <div className="img">
        <ImageComponent src={datas.image} alt="hjkh" width={500} height={500} />
        <div className="cat">
          <a href={`/catgeory/${datas.catslug}`}>{datas.cat}</a>
        </div>
        <div className="tag">
          <a href={`/tag/${datas.tagslug}`}>{datas.tag}</a>
        </div>
      </div>
      <div className="content">
        <Link href={`/posts/${datas.slug}`} className="">
          {datas.title}
        </Link>

        <div className="inner">
          <a href={`/author/${datas.authorslug}`}>
            <span>by </span>
            {datas.author}
          </a>
          <span>{datas.date}</span>
        </div>
        <p>{datas.para}</p>
      </div>
    </div>
  );
}
