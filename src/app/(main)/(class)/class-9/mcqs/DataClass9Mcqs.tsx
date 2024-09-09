import CardSmall from '@/src/components/card/cardSmall/cardSmall'

export default function DataClass9Mcqs() {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
      {MainDataClass9Mcqs.map((data: any) => {
        return (
          <CardSmall
            key={data.name}
            title={data.name}
            link={`/class-9/mcqs/${data.slug}`}
          />
        )
      })}
    </div>
  )
}
const MainDataClass9Mcqs = [
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
