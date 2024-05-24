import Link from "next/link";
import React from "react";
import PostMetadata from "@/src/components/post/PostMetadata/page";

export default function RightPostCatgeory() {
  const postMetadata = PostMetadata();
  const uniqueCategories = [...new Set(postMetadata.map((item) => item.cat))];

  const uniqueCategoriesSlug = [
    ...new Set(postMetadata.map((item) => item.catslug)),
  ];

  return (
    <div className="rightpost mt-5">
      <div className="title">
        <h3>CATEGORIES</h3>
      </div>
      <div className="catgeory">
        <ul>
          {uniqueCategories.slice(0, 8).map((category, index) => (
            <li key={category}>
              <Link href={`/catgeory/${uniqueCategoriesSlug[index]}`}>
                {category}
                <span>
                  ({postMetadata.filter((item) => item.cat === category).length}
                  )
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
