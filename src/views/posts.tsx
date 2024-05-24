import React from "react";
import PostMetadata from "@/src/components/post/PostMetadata/page";
import LatestPostPreview from "@/src/components/post/PostPreview/LatestPost/page";
import Container from "../components/element/container";
import SubHeader from "../components/layout/header/subheader/page";

export default function ViewPost() {
  const postMetadata = PostMetadata();
  return (
    <>
      {/* <Hero /> */}
      <SubHeader title="Blogs Posts" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {postMetadata.map((data: any) => (
            <LatestPostPreview datas={data} key={data.id} />
          ))}
        </div>
      </Container>
    </>
  );
}
