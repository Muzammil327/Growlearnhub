import { MetadataRoute } from 'next'
import { supabase } from '@/src/util/db'
import { convertToLowercaseWithHyphen } from '../functions/slugify'

// Assuming SitemapFile is the correct type
type SitemapFile = {
  url: string
  lastModified?: string | Date
  changeFrequency?:
    | 'weekly'
    | 'hourly'
    | 'always'
    | 'daily'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: number
}

const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default async function sitemap(): Promise<SitemapFile[]> {
  try {
    // Fetch data from Supabase
    const { data: fetchedChapterBooksTopic, error } = await supabase
      .from('mcqs')
      .select('slug')

    if (error) {
      console.error('Error fetching data:', error)
      return []
    }

    // Generate routes for Introduction to Biology
    const IntroductionToBiologyRoutes: SitemapFile[] =
      fetchedChapterBooksTopic.map((product) => ({
        url: `${FRONTEND_URL}/mcqs-point/${convertToLowercaseWithHyphen(product.slug)}/`,
        lastModified: new Date().toISOString(),
        priority: 0.6,
        changeFrequency: 'weekly' as 'weekly', // Explicit type casting to match allowed literals
      }))

    // Example of another data source (commented out for now)
    // const response2 = await fetch(`${BACKEND_URL}/api/get/heading1`, {
    //   cache: "no-store", // This will bypass cache
    // });
    // const data2 = await response2.json();
    // const heading1routes: SitemapFile[] = data2.map((product: any) => ({
    //   url: `${FRONTEND_URL}/quiz/subject-wise/${convertToLowercaseWithHyphen(product.book.title)}/${convertToLowercaseWithHyphen(product.title)}/`,
    //   lastModified: new Date().toISOString(),
    //   priority: 0.9,
    //   changeFrequency: "hourly" as "hourly", // Explicit type casting to match allowed literals
    // }));

    // Combine all routes
    const routes: SitemapFile[] = [
      {
        url: `${FRONTEND_URL}/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: 'hourly' as 'hourly', // Explicit type casting to match allowed literals
      },
      ...IntroductionToBiologyRoutes,
      // ...heading1routes,
      // ...quizroutes,
      // ...heading2routes,
      // ...mcqsroutes,
    ]

    return routes
  } catch (error) {
    console.error('Error', error)
    return []
  }
}

// const route = [
//   'class-9/',
//   'class-10/',
//   'class-11/',
//   'class-12/',

//   'class-9/books/',
//   'class-9/books/punjab-board-physics/',
//   'class-9/books/punjab-board-math/',
//   'class-9/books/punjab-board-chemistry/',
//   'class-9/books/punjab-board-biology/',
//   'class-9/notes/',
//   'class-9/notes/punjab-board-physics/',
//   'class-9/notes/punjab-board-math/',
//   'class-9/notes/punjab-board-chemistry/',
//   'class-9/notes/punjab-board-biology/',
//   'class-9/past-papers/',

//   'class-9/mcqs/',
//   'class-9/mcqs/physics/',
//   'class-9/mcqs/math/',
//   'class-9/mcqs/chemistry/',

//   'class-9/mcqs/biology/',
//   'class-9/mcqs/biology/chapter-1/',
//   'class-9/mcqs/biology/chapter-1/introduction-to-biology/',
//   'class-9/mcqs/biology/chapter-1/levels-of-organization/',
//   'class-9/mcqs/biology/chapter-1/muslim-scientists/',
//   'class-9/mcqs/biology/chapter-2/',
//   'class-9/mcqs/biology/chapter-3/',
//   'class-9/mcqs/biology/chapter-4/',
//   'class-9/mcqs/biology/chapter-5/',
//   'class-9/mcqs/biology/chapter-6/',
//   'class-9/mcqs/biology/chapter-7/',
//   'class-9/mcqs/biology/chapter-8/',
//   'class-9/mcqs/biology/chapter-9/',

//   'class-9/online-test/',
//   'class-9/pairing-schemes/',

//   'class-10/books/',
//   'class-11/books/',
//   'class-12/books/',

//   'class-10/notes/',
//   'class-11/notes/',
//   'class-12/notes/',

//   'vu/',
//   'vu/handouts/',
//   'vu/handouts/cs101/',
//   'vu/handouts/cs201/',
//   'vu/handouts/cs302/',
//   'vu/handouts/eng201/',
//   'vu/handouts/mgt211/',
//   'vu/handouts/mth104/',
//   'vu/handouts/mth301/',
//   'vu/mid-term/',

//   'vu/mid-term/cs101/',
//   'vu/mid-term/cs101/abbreviation/',
//   'vu/mid-term/cs101/mcqs/',
//   'vu/mid-term/cs101/mcqs/chapter-1/',
//   'vu/mid-term/cs101/mcqs/chapter-2/',
//   'vu/mid-term/cs101/mcqs/chapter-3/',

//   'vu/mid-term/cs201/',
//   'vu/mid-term/cs201/abbreviation/',
//   'vu/mid-term/cs201/mcqs/',
//   'vu/mid-term/cs201/mcqs/chapter-1/',
//   'vu/mid-term/cs201/mcqs/chapter-2/',
//   'vu/mid-term/cs201/mcqs/chapter-3/',
//   'vu/mid-term/cs201/definitions/',
//   'vu/mid-term/cs201/definitions/what-is-pointer/',
//   'vu/mid-term/cs201/definitions/what-is-reference/',
//   'vu/mid-term/cs201/definitions/what-is-interpreter/',
//   'vu/mid-term/cs201/definitions/what-is-compiler/',
//   'vu/mid-term/cs201/definitions/what-is-program/',

//   'vu/mid-term/cs302/',
//   'vu/mid-term/cs302/abbreviation/',
//   'vu/mid-term/cs302/mcqs/',
//   'vu/mid-term/cs302/mcqs/chapter-1/',
//   'vu/mid-term/cs302/mcqs/chapter-2/',
//   'vu/mid-term/cs302/mcqs/chapter-3/',

//   'vu/mid-mark-calculator/',
// ]
