import React from "react"
import SimpleWrapper from "@/src/components/Wrapper/SimpleWrapper"
import CardSmall from "@/src/components/card/cardSmall/cardSmall"
import VuHighlightedHandoutsData from "@/src/app/(main)/(class)/vu/highlight-handouts/data"

export default function VUHighlightedHandoutWrapper({
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
        {VuHighlightedHandoutsData.map((data: any) => {
          return (
            <CardSmall
              key={data.name}
              title={data.name}
              link={`/vu/highlight-handouts/${data.slug}`}
            />
          )
        })}
      </div>
    </SimpleWrapper>
  )
}
