import CardSmall from "@/src/components/card/cardSmall/cardSmall"

export function Class9OnlineTestChapterData({ slug }: { slug: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
      {data.map((data: any) => {
        return (
          <CardSmall
            key={data.name}
            title={data.name}
            link={`/class-9/online-test/${slug}/${data.slug}`}
          />
        )
      })}
    </div>
  )
}
export function Class9OnlineTestChemistryChapterData({
  slug
}: {
  slug: string
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
      {dataC.map((data: any) => {
        return (
          <CardSmall
            key={data.name}
            title={data.name}
            link={`/class-9/online-test/${slug}/${data.slug}`}
          />
        )
      })}
    </div>
  )
}

const data = [
  { name: "Chapter 1", slug: "chapter-1" },
  { name: "Chapter 2", slug: "chapter-2" },
  { name: "Chapter 3", slug: "chapter-3" },
  { name: "Chapter 4", slug: "chapter-4" },
  { name: "Chapter 5", slug: "chapter-5" },
  { name: "Chapter 6", slug: "chapter-6" },
  { name: "Chapter 7", slug: "chapter-7" },
  { name: "Chapter 8", slug: "chapter-8" },
  { name: "Chapter 9", slug: "chapter-9" }
]
const dataC = [
  { name: "Chapter 1", slug: "chapter-1" },
  { name: "Chapter 2", slug: "chapter-2" },
  { name: "Chapter 3", slug: "chapter-3" },
  { name: "Chapter 4", slug: "chapter-4" },
  { name: "Chapter 5", slug: "chapter-5" },
  { name: "Chapter 6", slug: "chapter-6" },
  { name: "Chapter 7", slug: "chapter-7" },
  { name: "Chapter 8", slug: "chapter-8" },
]
