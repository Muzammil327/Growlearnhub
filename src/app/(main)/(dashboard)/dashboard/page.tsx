import React from 'react'

interface Iprops {
  id: number
  name: string
  count: number
}

export default function Page() {
  return (
    <div className="mt-4 mx-7 bg-gray-50/50">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {data.map((data: Iprops) => {
          return (
            <div
              className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
              key={data.id}
            >
              <div className="p-4">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  {data.name}
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {data.count}
                </h4>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const data: Iprops[] = [
  {
    id: 0,
    name: 'Books',
    count: 5,
  },
  {
    id: 1,
    name: 'Mcqs',
    count: 5,
  },
]
