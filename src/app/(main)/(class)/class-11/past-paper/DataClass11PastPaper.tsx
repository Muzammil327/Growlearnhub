import CardSmall from '@/src/components/card/cardSmall/cardSmall'

export default function DataClass11PastPaper() {
  return (
    <div className="grid gap-4 grid-cols-1 my-10">
      {MainDataClass11PastPaper.map((data: any) => {
        return (
          <div key={data.title}>
            <h2 className="">{data.title}</h2>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
              {data.child.map((data: any) => {
                return (
                  <CardSmall
                    key={data.name}
                    title={data.name}
                    link={`/class-11/past-paper/${data.slug}`}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
const MainDataClass11PastPaper = [
  {
    title: 'Faisalbad Board',
    child: [
      {
        name: 'Biology',
        slug: 'faisalbad-board-biology',
      },
      {
        name: 'Chemistry',
        slug: 'faisalbad-board-chemistry',
      },
      {
        name: 'Physics',
        slug: 'faisalbad-board-physics',
      },
    ],
  },
  {
    title: 'Lahore Board',
    child: [
      {
        name: 'Biology',
        slug: 'lahore-board-biology',
      },
      {
        name: 'Chemistry',
        slug: 'lahore-board-chemistry',
      },
      {
        name: 'Physics',
        slug: 'lahore-board-physics',
      },
    ],
  },
]