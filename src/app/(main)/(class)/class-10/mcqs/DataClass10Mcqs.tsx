import CardSmall from '@/src/components/card/cardSmall/cardSmall'

export default function DataClass10Mcqs() {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
      {MainDataClass10Mcqs.map((data: any) => {
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

const MainDataClass10Mcqs = [
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
