import CardSmall from "@/src/components/card/cardSmall/cardSmall"

export default function Class12OnlineTestBookData() {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-10">
      {data.map((data: any) => {
        return (
          <CardSmall
            key={data.name}
            title={data.name}
            link={`/class-12/online-test/${data.slug}`}
          />
        )
      })}
    </div>
  )
}

const data = [
  {
    name: "Biology",
    slug: "biology"
  },
  {
    name: "Chemistry",
    slug: "chemistry"
  },
  {
    name: "Physics",
    slug: "physics"
  }
]
