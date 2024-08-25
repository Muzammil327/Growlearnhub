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
        priority: 0.7,
        changeFrequency: 'weekly', // Explicit type casting to match allowed literals
      }))

    const routes21: SitemapFile[] = route.map((product) => ({
      url: `${FRONTEND_URL}/${product}`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      changeFrequency: 'hourly' as 'hourly', // Explicit type casting to match allowed literals
    }))

    // Combine all routes
    const routes: SitemapFile[] = [
      {
        url: `${FRONTEND_URL}/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: 'hourly' as 'hourly', // Explicit type casting to match allowed literals
      },
      ...routes21,
      // ...IntroductionToBiologyRoutes,
    ]

    return routes
  } catch (error) {
    console.error('Error', error)
    return []
  }
}

const route = [
  'class-9/',
  'class-10/',
  'class-11/',
  'class-12/',
  'vu/',
  'book-point/',
  'mcqs-point/',
  'online-test-point/',

  'class-9/books/',
  'class-9/online-test/',
  'class-9/mcqs/',

  'class-10/books/',
  'class-10/online-test/',
  'class-10/mcqs/',
  
  'class-11/books/',
  'class-11/online-test/',
  'class-11/mcqs/',
  
  'class-12/books/',
  'class-12/online-test/',  
  'class-12/mcqs/',

  'mcqs-point/biology/',
  'mcqs-point/chemistry/',
  'mcqs-point/physics/',
  'mcqs-point/general-knowledge/',

  'vu/mid-mark-calculator/',
  'vu/final-mcqs/',
  'vu/mid-mcqs/',
  'vu/handouts/',

  'mcqs-point/biology/skeletal-system/',
  'mcqs-point/biology/skeletal-system/types/',
  'mcqs-point/biology/skeletal-system/bones/',
  'mcqs-point/biology/skeletal-system/joints/',
  'mcqs-point/biology/skeletal-system/cartilage/',
  'mcqs-point/biology/skeletal-system/ligaments/',
  
  'mcqs-point/general-knowledge/india/',
  'mcqs-point/general-knowledge/india/river/',
  'mcqs-point/general-knowledge/india/dam/',
  'mcqs-point/general-knowledge/india/largest/',
  'mcqs-point/general-knowledge/india/longest/',
  'mcqs-point/general-knowledge/pakistan/',
  'mcqs-point/general-knowledge/pakistan/river/',
  'mcqs-point/general-knowledge/pakistan/dam/',
  'mcqs-point/general-knowledge/pakistan/largest/',
  'mcqs-point/general-knowledge/pakistan/longest/',
  'mcqs-point/general-knowledge/world-knowledge/',
  'mcqs-point/general-knowledge/world-knowledge/river/',
  'mcqs-point/general-knowledge/world-knowledge/dam/',
  'mcqs-point/general-knowledge/world-knowledge/largest/',
  'mcqs-point/general-knowledge/world-knowledge/longest/',

  'vu/final-mcqs/cs101/',
  'vu/final-mcqs/cs201/',
  'vu/final-mcqs/cs302/',
  'vu/final-mcqs/eng201/',
  'vu/final-mcqs/mgt211/',

  'vu/mid-mcqs/cs101/',
  'vu/mid-mcqs/cs201/',
  'vu/mid-mcqs/cs302/',
  'vu/mid-mcqs/eng201/',
  'vu/mid-mcqs/mgt211/',

  'vu/handouts/cs101/',
  'vu/handouts/cs201/',
  'vu/handouts/cs302/',
  'vu/handouts/eng201/',
  'vu/handouts/mgt211/',
  'vu/handouts/mth104/',
  'vu/handouts/mth301/',

  'class-9/books/punjab-board-physics/',
  'class-9/books/punjab-board-physics/english-medium/',
  'class-9/books/punjab-board-physics/urdu-medium/',
  'class-9/books/punjab-board-math/',
  'class-9/books/punjab-board-math/english-medium/',
  'class-9/books/punjab-board-math/urdu-medium/',
  'class-9/books/punjab-board-chemistry/',
  'class-9/books/punjab-board-chemistry/english-medium/',
  'class-9/books/punjab-board-chemistry/urdu-medium/',
  'class-9/books/punjab-board-biology/',
  'class-9/books/punjab-board-biology/english-medium/',
  'class-9/books/punjab-board-biology/urdu-medium/',

  'class-10/books/punjab-board-physics/',
  'class-10/books/punjab-board-physics/english-medium/',
  'class-10/books/punjab-board-physics/urdu-medium/',
  'class-10/books/punjab-board-math/',
  'class-10/books/punjab-board-math/english-medium/',
  'class-10/books/punjab-board-math/urdu-medium/',
  'class-10/books/punjab-board-chemistry/',
  'class-10/books/punjab-board-chemistry/english-medium/',
  'class-10/books/punjab-board-chemistry/urdu-medium/',
  'class-10/books/punjab-board-biology/',
  'class-10/books/punjab-board-biology/english-medium/',
  'class-10/books/punjab-board-biology/urdu-medium/',

  'class-11/books/punjab-board-physics/',
  'class-11/books/punjab-board-physics/english-medium/',
  'class-11/books/punjab-board-physics/urdu-medium/',
  'class-11/books/punjab-board-math/',
  'class-11/books/punjab-board-math/english-medium/',
  'class-11/books/punjab-board-math/urdu-medium/',
  'class-11/books/punjab-board-chemistry/',
  'class-11/books/punjab-board-chemistry/english-medium/',
  'class-11/books/punjab-board-chemistry/urdu-medium/',
  'class-11/books/punjab-board-biology/',
  'class-11/books/punjab-board-biology/english-medium/',
  'class-11/books/punjab-board-biology/urdu-medium/',

  'class-12/books/punjab-board-physics/',
  'class-12/books/punjab-board-physics/english-medium/',
  'class-12/books/punjab-board-physics/urdu-medium/',
  'class-12/books/punjab-board-math/',
  'class-12/books/punjab-board-math/english-medium/',
  'class-12/books/punjab-board-math/urdu-medium/',
  'class-12/books/punjab-board-chemistry/',
  'class-12/books/punjab-board-chemistry/english-medium/',
  'class-12/books/punjab-board-chemistry/urdu-medium/',
  'class-12/books/punjab-board-biology/',
  'class-12/books/punjab-board-biology/english-medium/',
  'class-12/books/punjab-board-biology/urdu-medium/',

  'class-9/mcqs/physics/',
  'class-9/mcqs/biology/',
  'class-9/mcqs/chemistry/',
  
  'class-10/mcqs/physics/',
  'class-10/mcqs/biology/',
  'class-10/mcqs/chemistry/',

  'class-11/mcqs/physics/',
  'class-11/mcqs/biology/',
  'class-11/mcqs/chemistry/',

  'class-12/mcqs/physics/',
  'class-12/mcqs/biology/',
  'class-12/mcqs/chemistry/',

  'class-9/online-test/physics/',
  'class-9/online-test/biology/',
  'class-9/online-test/chemistry/',
  
  'class-10/online-test/physics/',
  'class-10/online-test/biology/',
  'class-10/online-test/chemistry/',

  'class-11/online-test/physics/',
  'class-11/online-test/biology/',
  'class-11/online-test/chemistry/',

  'class-12/online-test/physics/',
  'class-12/online-test/biology/',
  'class-12/online-test/chemistry/',
]
