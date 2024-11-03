import CardSmall from '@/src/components/card/cardSmall/cardSmall'

export default function DataClass12Book() {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
      {MainDataClass11Book.map((data: any) => {
        return (
          <div key={data.title}>
            <h2 className="">{data.title}</h2>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
              {data.child.map((data: any) => {
                return (
                  <CardSmall
                    key={data.name}
                    title={data.name}
                    link={`/class-12/books/${data.slug}/`}
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

const MainDataClass11Book = [
  {
    title: 'Punjab Board',
    child: [
      {
        name: 'Biology',
        slug: 'punjab-board-biology',
      },
      {
        name: 'Chemistry',
        slug: 'punjab-board-chemistry',
      },
      {
        name: 'Physics',
        slug: 'punjab-board-physics',
      },
      {
        name: 'Math',
        slug: 'punjab-board-math',
      },
      {
        name: 'English',
        slug: 'punjab-board-english',
      },
      {
        name: 'Urdu',
        slug: 'punjab-board-urdu',
      },
      {
        name: 'Economics',
        slug: 'punjab-board-economics',
      },
      {
        name: 'Tarjuma Tul Quran',
        slug: 'punjab-board-tarjuma-tul-quran',
      },
      {
        name: 'Pak Study',
        slug: 'punjab-board-pak-study',
      },
      {
        name: 'Computer Science',
        slug: 'punjab-board-computer-science',
      },
    ],
  },
]
