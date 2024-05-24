import Link from "next/link";
import React from "react";
import PostMetadata from "@/src/components/post/PostMetadata/page";

export default function RightPostTag() {
  const postMetadata = PostMetadata();
  const uniqueCategories = [...new Set(postMetadata.map((item) => item.tag))];
  const uniqueTagSlug = [
    ...new Set(postMetadata.map((item) => item.tagslug)),
  ];
  return (
    <div className="rightpost mt-5">
      <div className="title">
        <h3>Tags</h3>
      </div>
      <div className="tag">
      <ul>
          {uniqueCategories.slice(0, 16).map((category,index) => (
            <li key={category}>
              <Link href={`/tag/${uniqueTagSlug[index]}`}>
                {category}                 
                <span className="pl-1">({postMetadata.filter(item => item.tag === category).length})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
