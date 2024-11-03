import React from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import VuHandoutsData from "@/src/app/(main)/(class)/vu/handouts/data"

export default function VUhHandoutWrapper({
  children,
  data
}: {
  children: React.ReactNode
  data: any
}) {
  return (
    <SimpleWrapper data={data}>
      {children}
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
        {VuHandoutsData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/vu/handouts/${data.slug}`}
            />
          )
        })}
      </div>
    </SimpleWrapper>
  )
}
