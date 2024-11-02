import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Markdown from "markdown-to-jsx"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import "./article.scss"
import { ImageContainerLoading } from "@/src/components/ui/ImageContainer"

const getPostContent = (slug: string, directories: string[]) => {
  for (const directory of directories) {
    const folder = path.join(process.cwd(), directory)
    const file = path.join(folder, `${slug}.md`)

    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, "utf8")
      const matterResult = matter(content)
      return matterResult
    }
  }

  return null
}

// Example usage
const directories = [
  "src/app/(main)/blogs/docs/nextjs/",
  "src/app/(main)/blogs/docs/reactjs/",

  "src/app/(main)/blogs/docs/download",
  "src/app/(main)/blogs/docs/download/vscode",
  "src/app/(main)/blogs/docs/download/git",
  "src/app/(main)/blogs/docs/download/nodejs",
  "src/app/(main)/blogs/docs/vscode/extension",
  "src/app/(main)/blogs/docs/fashion/",
  "src/app/(main)/blogs/docs/javascript/array/"
]
const PostPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostContent(slug, directories)

  const data = {
    title: post?.data.title,
    url: `https://growlearnhub.com/blogs/${slug}/`,
    canonical: `/blogs/${slug}/`,
    breadcrumbs: [
      {
        title: "Home",
        link: "/"
      },
      {
        title: "Blogs",
        link: "/blogs"
      },
      {
        title: post?.data.title
      }
    ]
  }

  return (
    <SimpleWrapper data={data}>
      <div className="">
        <div className="my-3">
          <ImageContainerLoading
            image={post?.data.image}
            title={post?.data.title}
            height={882}
            width={1568}
          />
          <div className="flex md:mt-2">
            <p className="">
              by <span className="text-color1">{post?.data.author}</span>
            </p>
            <span className="mx-1">-</span>
            <p className=""> {post?.data.date}</p>
          </div>
        </div>

        <article className="prose">
          <Markdown>{post?.content || ""}</Markdown>
          <p className="py-6">Thanks for reading.</p>
        </article>
      </div>
    </SimpleWrapper>
  )
}

export default PostPage

export async function generateMetadata(props: any) {
  const slug = props.params.slug
  const post = getPostContent(slug, directories)
  return {
    title: post?.data.title,
    description: post?.data.para,
    keywords: post?.data.keyword,
    // keywords: data.keywords,
    alternates: {
      canonical: `blogs/${slug}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
    openGraph: {
      title: post?.data.title,
      description: post?.data.para,
      url: `blogs/${slug}`,
      images: [
        {
          url: post?.data.image,
          alt: post?.data.para
        }
      ]
    },
    twitter: {
      title: post?.data.title,
      description: post?.data.para,
      images: {
        url: post?.data.image,
        alt: post?.data.para
      }
    }
  }
}
