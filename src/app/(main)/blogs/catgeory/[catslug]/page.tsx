import BlogCatgeorySlugView from "@/src/components/blogs/BlogCatgeorySlugView"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import { convertToUppercaseAndReplaceHyphens } from "@/src/functions/convertToUppercaseAndReplaceHyphens"

function Page({ params }: { params: { catslug: string } }) {
  const data = {
    title: `Blog ${convertToUppercaseAndReplaceHyphens(params.catslug)} Categories | Growlearnhub`,
    url: `https://growlearnhub.com/blogs/catgeory/${params.catslug}`,
    canonical: `/blogs/catgeory/${params.catslug}`,
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
        title: "Blog Categories",
        link: "/blogs/catgeory"
      },
      {
        title: convertToUppercaseAndReplaceHyphens(params.catslug)
      }
    ]
  }
  return (
    <SimpleWrapper data={data}>
      <BlogCatgeorySlugView params={params} />
    </SimpleWrapper>
  )
}

export default Page

export async function generateMetadata({
  params
}: {
  params: { catslug: string }
}) {
  const slug = params.catslug

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const textWithoutHyphens = slug.replace(/-/g, " ")
  const title =
    "Blog" + capitalize(textWithoutHyphens) + " Categories" + " | Growlearnhub"

  return {
    title: title,
    alternates: {
      canonical: `/blogs/category/${slug}/` // Ensure the canonical URL is correct
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
      url: `/blogs/category/${slug}/` // Ensure the URL is correct
    },
    twitter: {
      title: title
    }
  }
}
