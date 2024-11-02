import BlogTagSlugView from "@/src/components/blogs/BlogTagSlugView"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { convertToUppercaseAndReplaceHyphens } from "@/src/functions/convertToUppercaseAndReplaceHyphens"

function Page({ params }: { params: { tagslug: string } }) {
  const data = {
    title: `Blog ${convertToUppercaseAndReplaceHyphens(params.tagslug)} Tags | Growlearnhub`,
    url: `https://growlearnhub.com/blogs/catgeory/${params.tagslug}`,
    canonical: `/blogs/catgeory/${params.tagslug}`,
    breadcrumbs: [
      {
        title: "Home",
        link: "/"
      },
      {
        title: "Blogs",
        link: "/blogs/"
      },
      {
        title: "Blog Tags",
        link: "/blogs/tag/"
      },
      {
        title: convertToUppercaseAndReplaceHyphens(params.tagslug)
      }
    ]
  }
  return (
    <SimpleWrapper data={data}>
      <BlogTagSlugView params={params} />
    </SimpleWrapper>
  )
}

export default Page

export async function generateMetadata({
  params
}: {
  params: { tagslug: string }
}) {
  const slug = params.tagslug

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const textWithoutHyphens = slug.replace(/-/g, " ")
  const title = "Blog " + capitalize(textWithoutHyphens) + " Tags" + " | Growlearnhub"

  return {
    title: title,
    alternates: {
      canonical: `/blogs/tag/${slug}` // Ensure the canonical URL is correct
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
      title: title,
      url: `/blogs/tag/${slug}` // Ensure the URL is correct
    },
    twitter: {
      title: title
    }
  }
}
