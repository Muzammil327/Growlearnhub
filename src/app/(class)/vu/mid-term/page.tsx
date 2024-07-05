import Card3 from '@/src/components/card2/card3'
import VUWrapper from '../VUWrapper'

export default function Page() {
  return (
    <VUWrapper title="VU Mid Term">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20">
        <Card3
          title="CS101 - Introduction to Computing"
          link="/vu/mid-term/cs101/"
        />
        <Card3
          title="CS201 - Introduction to Programming"
          link="/vu/mid-term/cs201/"
        />
        <Card3
          title="CS302 - Digital Logic Design"
          link="/vu/mid-term/cs302/"
        />
      </div>
    </VUWrapper>
  )
}
