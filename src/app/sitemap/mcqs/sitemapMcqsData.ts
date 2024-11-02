import { convertToLowercaseWithHyphen } from "@/src//functions/slugify"

const FRONTEND_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"

type SitemapFile = {
  url: string
  lastModified?: string | Date
  changeFrequency?:
    | "weekly"
    | "hourly"
    | "always"
    | "daily"
    | "monthly"
    | "yearly"
    | "never"
  priority?: number
}

const sitemapMcqsData: () => Promise<SitemapFile[]> = async () => {
  const response = await fetch(`${FRONTEND_URL}/api/mcqs/sitemap`)
  const datas = await response.json()

  try {
    // Return the mapped data
    return datas.data.map((data: any) => ({
      url: `${FRONTEND_URL}/mcqs-point/${convertToLowercaseWithHyphen(data.slug)}/`,
      lastModified: new Date().toISOString(),
      priority: 0.7,
      changeFrequency: "weekly"
    }))
  } catch (error) {
    console.error("Error fetching or mapping data:", error)
    return [] // Return an empty array in case of error
  }
}

export default sitemapMcqsData
