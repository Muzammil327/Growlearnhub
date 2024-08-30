import CardSmall from '@/src/components/card/cardSmall/cardSmall'

export default function DataClass11Mcqs() {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
      {MainDataClass11Mcqs.map((data: any) => {
        return (
          <CardSmall
            key={data.name}
            title={data.name}
            link={`/class-11/mcqs/${data.slug}`}
          />
        )
      })}
    </div>
  )
}

const MainDataClass11Mcqs = [
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
