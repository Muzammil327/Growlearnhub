import CardSmall from '@/src/components/card/cardSmall/cardSmall'

export default function DataClass12Notes() {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
      {MainDataClass12Notes.map((data: any) => {
        return (
          <CardSmall
            key={data.name}
            title={data.name}
            link={`/class-12/notes/${data.slug}`}
          />
        )
      })}
    </div>
  )
}

const MainDataClass12Notes = [
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
