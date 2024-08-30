import CardSmall from '@/src/components/card/cardSmall/cardSmall'

export default function DataClass9Notes() {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
      {MainDataClass9Notes.map((data: any) => {
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
const MainDataClass9Notes = [
  {
    name: 'Biology',
    slug: '',
  },
  {
    name: 'Chemistry',
    slug: '',
  },
  {
    name: 'Physics',
    slug: '',
  },
]
