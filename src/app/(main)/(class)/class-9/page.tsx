import React from 'react'
import SimpleWrapper from '@/src/components/Wrapper/SimpleWrapper'
import CardSmall from '@/src/components/card/cardSmall/cardSmall'

export default function Page() {
  return (
    <SimpleWrapper
      title="Complete Guide to Class 9 | Resources and Tips for 9th Class"
      url={''}
      b1="9th Class"
    >
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {mainData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/class-9/${data.slug}`}
            />
          )
        })}
      </div>
    </SimpleWrapper>
  )
}

const mainData = [
  {
    name: 'Online Test',
    slug: 'online-test',
  },
  {
    name: 'Mcqs',
    slug: 'mcqs',
  },
  {
    name: 'Books',
    slug: 'books',
  },
]