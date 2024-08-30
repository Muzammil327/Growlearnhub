import CardSmall from '@/src/components/card/cardSmall/cardSmall'

export default function DataClass11Notes() {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
      {MainDataClass11Notes.map((data: any) => {
        return (
          <CardSmall
            key={data.name}
            title={data.name}
            link={`/class-11/notes/${data.slug}`}
          />
        )
      })}
    </div>
  )
}

const MainDataClass11Notes = [
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
