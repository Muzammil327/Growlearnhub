import CardSmall from '@/src/components/card/cardSmall/cardSmall'

export default function DataClass12OnlineTest() {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
      {MainDataClass12OnlineTest.map((data: any) => {
        return (
          <CardSmall
            key={data.name}
            title={data.name}
            link={`/class-12/mcqs/${data.slug}`}
          />
        )
      })}
    </div>
  )
}

const MainDataClass12OnlineTest = [
  {
    name: 'Biology',
    slug: 'biology',
  },
  {
    name: 'Chemistry',
    slug: 'chemistry',
  },
  {
    name: 'Physics',
    slug: 'physics',
  },
]