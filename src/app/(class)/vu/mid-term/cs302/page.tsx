import Card3 from '@/src/components/card2/card3'
import VUWrapper from '../../VUWrapper'

export default function Page() {
  return (
    <VUWrapper title="VU CS302 Mid Term">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20">
        <Card3 title="CS302 - MCQ's" link="/vu/mid-term/cs302/mcqs/" />
        <Card3
          title="CS302 - Abbreviation"
          link="/vu/mid-term/cs302/abbreviation/"
        />
      </div>
    </VUWrapper>
  )
}
