import CardSmall from '@/src/components/card/cardSmall/cardSmall'
import { MainDataClass10Book } from './data'

export default function DataClass10Book() {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
      {MainDataClass10Book.map((data: any) => {
        return (
          <div key={data.title}>
            <h2 className="">{data.title}</h2>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-5">
              {data.child.map((data: any) => {
                return (
                  <CardSmall
                    key={data.name}
                    title={data.name}
                    link={`/class-10/books/${data.slug}`}
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
