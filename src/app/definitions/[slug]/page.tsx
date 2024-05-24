import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import RightPost from "@/src/components/post/rightPost/page";
import Image from "next/image";
// import BannerImageComponent from "@/src/components/elements/BannerImageComponent/page";
import Container from "@/src/components/element/container";
import SubHeader from "@/src/components/layout/header/subheader/page";

const getPostContent = (slug: string, directories: string[]) => {
  for (const directory of directories) {
    const folder = path.join(process.cwd(), directory);
    const file = path.join(folder, `${slug}.md`);

    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, "utf8");
      const matterResult = matter(content);
      return matterResult;
    }
  }

  return null;
};

// Example usage
const directories = [
  "src/app/definitions/docs",
  "src/app/definitions/docs/nextjs/api",

  "src/app/definitions/docs/mern/",
  "src/app/definitions/docs/mern/api",

  "src/app/definitions/docs/computer/",
  "src/app/definitions/docs/computer",
  "src/app/definitions/docs/download",
  "src/app/definitions/docs/download/vscode",
  "src/app/definitions/docs/download/git",
  "src/app/definitions/docs/download/nodejs",
  "src/app/definitions/docs/vscode/extension",
  "src/app/definitions/docs/fashion/",
  "src/app/definitions/docs/javascript/array/",
];
const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug, directories);

  return (
    <>
      <SubHeader title={post?.data.title} />

      <div className="lg:py-6">
        <Container>
          <div className="grid lg:grid-cols-8 grid-cols-1 lg:gap-6">
            <div className="md:col-span-6">
              <div className="my-6">
                {/* <BannerImageComponent
                  src={post?.data.image}
                  alt={post?.data.title}
                  height={882}
                  width={1568}
                /> */}
                <div className="flex mt-1">
                  <p className="t4"> {post?.data.date}</p>
                </div>
              </div>

              <article className="prose">
                <Markdown>{post?.content || ""}</Markdown>
                <p className="py-6">Thanks for reading.</p>
              </article>
            </div>

            <div className="md:col-span-2">
              <RightPost />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
//
// what is interpreter

export default PostPage;

export async function generateMetadata(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug, directories);
  return {
    title: post?.data.title,
    description: post?.data.para,
    keywords: post?.data.keyword,
    // keywords: data.keywords,
    alternates: {
      canonical: `posts/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: post?.data.title,
      description: post?.data.para,
      url: `posts/${slug}`,
      images: [
        {
          url: post?.data.image,
          alt: post?.data.para,
        },
      ],
    },
    twitter: {
      title: post?.data.title,
      description: post?.data.para,
      images: {
        url: post?.data.image,
        alt: post?.data.para,
      },
    },
  };
}
