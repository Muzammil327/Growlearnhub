import CardSmall from '@/src/components/card/cardSmall/cardSmall'

export default function DataClass10OnlineTest() {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
      {MainDataClass10OnlineTest.map((data: any) => {
        return (
          <CardSmall
            key={data.name}
            title={data.name}
            link={`/class-10/mcqs/${data.slug}`}
          />
        )
      })}
    </div>
  )
}

const MainDataClass10OnlineTest = [
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
