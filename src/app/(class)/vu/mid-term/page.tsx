import Card3 from '@/src/components/card2/card3'
import VUWrapper from '../VUWrapper'

export default function Page() {
  return (
    <VUWrapper title="VU Mid Term">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5">
      <Card3 title="MCQS - Multiple Choice" link="/vu/mid-term/mcqs/" />
      </div>
    </VUWrapper>
  )
}
