import Card3 from '@/src/components/card2/card3'
import VUWrapper from '../../VUWrapper'

export default function Page() {
  return (
    <VUWrapper title="VU CS101 Mid Term">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5">
        <Card3 title="CS101 - MCQ's" link="/vu/mid-term/cs101/" />
        <Card3 title="CS101 - Abbreviation" link="/vu/mid-term/cs101/" />
      </div>
    </VUWrapper>
  )
}
