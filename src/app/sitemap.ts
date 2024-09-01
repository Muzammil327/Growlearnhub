import { convertToLowercaseWithHyphen } from '../functions/slugify'
import { RandomData } from './(main)/mcqs-point/[slug]/data'
import { BiologyMcqsSkeletalSystemBonesMcqs } from './(main)/mcqs-point/biology/skeletal-system/bones/data'
import { BiologyMcqsSkeletalSystemCartilageMcqs } from './(main)/mcqs-point/biology/skeletal-system/cartilage/data'

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
// BiologyMcqsSkeletalSystemBonesMcqs
// BiologyMcqsSkeletalSystemCartilageMcqs
// BiologyMcqsSkeletalSystemJointsMcqs
// BiologyMcqsSkeletalSystemLigamentMcqs
// SkeletalSystemTypesMcqsDatasPage1
const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL

export default async function sitemap(): Promise<SitemapFile[]> {
  try {
    // Generate routes for Biology Skeletal Bones
    const BiologyMcqsSkeletalSystemBonesMcqsRoutes: SitemapFile[] =
      BiologyMcqsSkeletalSystemBonesMcqs.map((data) => ({
        url: `${FRONTEND_URL}/mcqs-point/${convertToLowercaseWithHyphen(data.slug)}/`,
        lastModified: new Date().toISOString(),
        priority: 0.7,
        changeFrequency: 'weekly',
      }))
    // Generate routes for Biology Skeletal Cartilage
    const RandomDataRoutes: SitemapFile[] = RandomData.map((data) => ({
      url: `${FRONTEND_URL}/mcqs-point/${convertToLowercaseWithHyphen(data.slug)}/`,
      lastModified: new Date().toISOString(),
      priority: 0.7,
      changeFrequency: 'weekly',
    }))

    // Generate routes for class 9
    const Class9Routes: SitemapFile[] = class9route.map((product) => ({
      url: `${FRONTEND_URL}/${product}`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      changeFrequency: 'daily' as 'daily',
    }))
    // Generate routes for class 10
    const Class10Routes: SitemapFile[] = class10route.map((product) => ({
      url: `${FRONTEND_URL}/${product}`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      changeFrequency: 'daily' as 'daily',
    }))
    // Generate routes for class 11
    const Class11Routes: SitemapFile[] = class11route.map((product) => ({
      url: `${FRONTEND_URL}/${product}`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      changeFrequency: 'daily' as 'daily',
    }))
    // Generate routes for class 12
    const Class12Routes: SitemapFile[] = class12route.map((product) => ({
      url: `${FRONTEND_URL}/${product}`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      changeFrequency: 'daily' as 'daily',
    }))
    // Generate routes for vu
    const VURoutes: SitemapFile[] = vuroute.map((product) => ({
      url: `${FRONTEND_URL}/${product}`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      changeFrequency: 'daily' as 'daily',
    }))
    // Generate routes for mcqs point
    const McqsPointRoutes: SitemapFile[] = mcqspointroute.map((product) => ({
      url: `${FRONTEND_URL}/${product}`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      changeFrequency: 'daily' as 'daily',
    }))
    // Generate routes for book point
    const BooksPointRoutes: SitemapFile[] = bookpointroute.map((product) => ({
      url: `${FRONTEND_URL}/${product}`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      changeFrequency: 'daily' as 'daily',
    }))
    // Generate routes for online test point
    const OnlineTestPointRoutes: SitemapFile[] = onlinetestpointroute.map(
      (product) => ({
        url: `${FRONTEND_URL}/${product}`,
        lastModified: new Date().toISOString(),
        priority: 0.9,
        changeFrequency: 'daily' as 'daily',
      })
    )

    // Combine all routes
    const routes: SitemapFile[] = [
      {
        url: `${FRONTEND_URL}/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: 'daily' as 'daily', // Explicit type casting to match allowed literals
      },
      ...Class9Routes,
      ...Class10Routes,
      ...Class11Routes,
      ...Class12Routes,
      ...VURoutes,
      ...McqsPointRoutes,
      ...BooksPointRoutes,
      ...OnlineTestPointRoutes,
      ...BiologyMcqsSkeletalSystemBonesMcqsRoutes,
      ...RandomDataRoutes,
    ]

    return routes
  } catch (error) {
    console.error('Error', error)
    return []
  }
}

const class9route = [
  'class-9/',
  'class-9/books/',
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
  'class-9/books/punjab-board-general-math/',
  'class-9/books/punjab-board-general-math/english-medium/',
  'class-9/books/punjab-board-general-math/urdu-medium/',
  'class-9/books/punjab-board-computer-science/',
  'class-9/books/punjab-board-computer-science/english-medium/',
  'class-9/books/punjab-board-computer-science/urdu-medium/',
  'class-9/books/punjab-board-pak-study/',
  'class-9/books/punjab-board-pak-study/english-medium/',
  'class-9/books/punjab-board-pak-study/urdu-medium/',
  'class-9/books/punjab-board-economics/',
  'class-9/books/punjab-board-english/',
  'class-9/books/punjab-board-urdu/',
  'class-9/books/punjab-board-ikhlaqiat/',
  'class-9/books/punjab-board-islamiat/',
  'class-9/books/punjab-board-tarjuma-tul-quran/',

  'class-9/notes/',

  'class-9/mcqs/',
  'class-9/mcqs/physics/',
  'class-9/mcqs/biology/',
  'class-9/mcqs/chemistry/',

  'class-9/online-test/',
  'class-9/online-test/physics/',
  'class-9/online-test/biology/',
  'class-9/online-test/chemistry/',

  'class-9/past-paper/',
  'class-9/past-paper/faisalabad-board-biology/',
  'class-9/past-paper/faisalabad-board-chemistry/',
  'class-9/past-paper/faisalabad-board-physics/',
  'class-9/past-paper/lahore-board-biology/',
  'class-9/past-paper/lahore-board-chemistry/',
  'class-9/past-paper/lahore-board-physics/',
]

const class10route = [
  'class-10/',
  'class-10/books/',
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
  'class-10/books/punjab-board-general-math/',
  'class-10/books/punjab-board-general-math/english-medium/',
  'class-10/books/punjab-board-general-math/urdu-medium/',
  'class-10/books/punjab-board-computer-science/',
  'class-10/books/punjab-board-computer-science/english-medium/',
  'class-10/books/punjab-board-computer-science/urdu-medium/',
  'class-10/books/punjab-board-pak-study/',
  'class-10/books/punjab-board-pak-study/english-medium/',
  'class-10/books/punjab-board-pak-study/urdu-medium/',
  'class-10/books/punjab-board-economics/',
  'class-10/books/punjab-board-english/',
  'class-10/books/punjab-board-urdu/',
  'class-10/books/punjab-board-ikhlaqiat/',
  'class-10/books/punjab-board-islamiat/',
  'class-10/books/punjab-board-tarjuma-tul-quran/',

  'class-10/notes/',

  'class-10/mcqs/',
  'class-10/mcqs/physics/',
  'class-10/mcqs/biology/',
  'class-10/mcqs/chemistry/',

  'class-10/online-test/',
  'class-10/online-test/physics/',
  'class-10/online-test/biology/',
  'class-10/online-test/chemistry/',

  'class-10/past-paper/',
  'class-10/past-paper/faisalabad-board-biology/',
  'class-10/past-paper/faisalabad-board-chemistry/',
  'class-10/past-paper/faisalabad-board-physics/',
  'class-10/past-paper/lahore-board-biology/',
  'class-10/past-paper/lahore-board-chemistry/',
  'class-10/past-paper/lahore-board-physics/',
]

const class11route = [
  'class-11/',
  'class-11/books/',
  // 'class-11/books/punjab-board-physics/',
  // 'class-11/books/punjab-board-physics/english-medium/',
  // 'class-11/books/punjab-board-physics/urdu-medium/',
  // 'class-11/books/punjab-board-math/',
  // 'class-11/books/punjab-board-math/english-medium/',
  // 'class-11/books/punjab-board-math/urdu-medium/',
  // 'class-11/books/punjab-board-chemistry/',
  // 'class-11/books/punjab-board-chemistry/english-medium/',
  // 'class-11/books/punjab-board-chemistry/urdu-medium/',
  // 'class-11/books/punjab-board-biology/',
  // 'class-11/books/punjab-board-biology/english-medium/',
  // 'class-11/books/punjab-board-biology/urdu-medium/',
  // 'class-11/books/punjab-board-general-math/',
  // 'class-11/books/punjab-board-general-math/english-medium/',
  // 'class-11/books/punjab-board-general-math/urdu-medium/',
  // 'class-11/books/punjab-board-computer-science/',
  // 'class-11/books/punjab-board-computer-science/english-medium/',
  // 'class-11/books/punjab-board-computer-science/urdu-medium/',
  // 'class-11/books/punjab-board-pak-study/',
  // 'class-11/books/punjab-board-pak-study/english-medium/',
  // 'class-11/books/punjab-board-pak-study/urdu-medium/',
  // 'class-11/books/punjab-board-economics/',
  // 'class-11/books/punjab-board-english/',
  // 'class-11/books/punjab-board-urdu/',
  // 'class-11/books/punjab-board-ikhlaqiat/',
  // 'class-11/books/punjab-board-islamiat/',
  // 'class-11/books/punjab-board-tarjuma-tul-quran/',

  'class-11/notes/',

  'class-11/mcqs/',
  'class-11/mcqs/physics/',
  'class-11/mcqs/biology/',
  'class-11/mcqs/chemistry/',

  'class-11/online-test/',
  'class-11/online-test/physics/',
  'class-11/online-test/biology/',
  'class-11/online-test/chemistry/',

  'class-11/past-paper/',
  'class-11/past-paper/faisalabad-board-biology/',
  'class-11/past-paper/faisalabad-board-chemistry/',
  'class-11/past-paper/faisalabad-board-physics/',
  'class-11/past-paper/lahore-board-biology/',
  'class-11/past-paper/lahore-board-chemistry/',
  'class-11/past-paper/lahore-board-physics/',
]

const class12route = [
  'class-12/',
  'class-12/books/',
  // 'class-12/books/punjab-board-physics/',
  // 'class-12/books/punjab-board-physics/english-medium/',
  // 'class-12/books/punjab-board-physics/urdu-medium/',
  // 'class-12/books/punjab-board-math/',
  // 'class-12/books/punjab-board-math/english-medium/',
  // 'class-12/books/punjab-board-math/urdu-medium/',
  // 'class-12/books/punjab-board-chemistry/',
  // 'class-12/books/punjab-board-chemistry/english-medium/',
  // 'class-12/books/punjab-board-chemistry/urdu-medium/',
  // 'class-12/books/punjab-board-biology/',
  // 'class-12/books/punjab-board-biology/english-medium/',
  // 'class-12/books/punjab-board-biology/urdu-medium/',
  // 'class-12/books/punjab-board-general-math/',
  // 'class-12/books/punjab-board-general-math/english-medium/',
  // 'class-12/books/punjab-board-general-math/urdu-medium/',
  // 'class-12/books/punjab-board-computer-science/',
  // 'class-12/books/punjab-board-computer-science/english-medium/',
  // 'class-12/books/punjab-board-computer-science/urdu-medium/',
  // 'class-12/books/punjab-board-pak-study/',
  // 'class-12/books/punjab-board-pak-study/english-medium/',
  // 'class-12/books/punjab-board-pak-study/urdu-medium/',
  // 'class-12/books/punjab-board-economics/',
  // 'class-12/books/punjab-board-english/',
  // 'class-12/books/punjab-board-urdu/',
  // 'class-12/books/punjab-board-ikhlaqiat/',
  // 'class-12/books/punjab-board-islamiat/',
  // 'class-12/books/punjab-board-tarjuma-tul-quran/',

  'class-12/notes/',

  'class-12/mcqs/',
  'class-12/mcqs/physics/',
  'class-12/mcqs/biology/',
  'class-12/mcqs/chemistry/',

  'class-12/online-test/',
  'class-12/online-test/physics/',
  'class-12/online-test/biology/',
  'class-12/online-test/chemistry/',

  'class-12/past-paper/',
  'class-12/past-paper/faisalabad-board-biology/',
  'class-12/past-paper/faisalabad-board-chemistry/',
  'class-12/past-paper/faisalabad-board-physics/',
  'class-12/past-paper/lahore-board-biology/',
  'class-12/past-paper/lahore-board-chemistry/',
  'class-12/past-paper/lahore-board-physics/',
]

const vuroute = [
  'vu/',

  'vu/mid-mark-calculator/',
  'vu/final-mcqs/',
  'vu/mid-mcqs/',
  'vu/handouts/',

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

  'vu/handouts/cs001/',
  'vu/handouts/cs101/',
  'vu/handouts/cs201/',
  'vu/handouts/cs202/',
  'vu/handouts/cs205/',
  'vu/handouts/cs206/',
  'vu/handouts/cs301/',
  'vu/handouts/cs302/',
  'vu/handouts/cs304/',
  'vu/handouts/cs310/',
  'vu/handouts/cs311/',
  'vu/handouts/cs312/',
  'vu/handouts/cs315/',
  'vu/handouts/cs401/',
  'vu/handouts/cs402/',
  'vu/handouts/cs403/',
  'vu/handouts/cs405/',
  'vu/handouts/cs407/',
  'vu/handouts/cs408/',
  'vu/handouts/cs410/',
  'vu/handouts/cs411/',
  'vu/handouts/cs432/',
  'vu/handouts/cs435/',
  'vu/handouts/eng201/',
  'vu/handouts/mgt211/',
  
  'vu/handouts/mth001/',
  'vu/handouts/mth100/',
  'vu/handouts/mth101/',
  'vu/handouts/mth102/',
  'vu/handouts/mth201/',
  'vu/handouts/mth202/',
  'vu/handouts/mth301/',
  'vu/handouts/mth302/',
  'vu/handouts/mth303/',
  'vu/handouts/mth401/',
  'vu/handouts/mth501/',
  'vu/handouts/mth601/',
  'vu/handouts/mth603/',
  'vu/handouts/mth621/',
  'vu/handouts/mth622/',
  'vu/handouts/mth631/',
  'vu/handouts/mth632/',
  'vu/handouts/mth633/',
  'vu/handouts/mth634/',
  'vu/handouts/mth641/',
  'vu/handouts/mth701/',
  'vu/handouts/mth706/',
  'vu/handouts/mth7123/',
  'vu/handouts/mth718/',
  'vu/handouts/mth721/',

  'vu/handouts/pak301/',
  'vu/handouts/pak302/',

  'vu/handouts/phy101/',
  'vu/handouts/phy301/',
]

const mcqspointroute = [
  'mcqs-point/',
  'mcqs-point/biology/',
  'mcqs-point/biology/skeletal-system/',
  'mcqs-point/biology/skeletal-system/types/',
  'mcqs-point/biology/skeletal-system/bones/',
  'mcqs-point/biology/skeletal-system/joints/',
  'mcqs-point/biology/skeletal-system/cartilage/',
  'mcqs-point/biology/skeletal-system/ligaments/',
  'mcqs-point/chemistry/',
  'mcqs-point/physics/',
  'mcqs-point/general-knowledge/',
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
]

const bookpointroute = ['book-point/']

const onlinetestpointroute = ['online-test-point/']
