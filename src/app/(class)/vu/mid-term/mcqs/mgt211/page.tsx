import Card3 from '@/src/components/card2/card3'
import VUWrapper from '../../../VUWrapper'

export default function Page() {
  return (
    <VUWrapper title="VU Mid Term MGT211 MCQ's">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5">
        <Card3 title="Chapter 1" link="/vu/mid-term/mcqs/mgt211/" />
        <Card3 title="Chapter 2" link="/vu/mid-term/mcqs/mgt211/" />
        <Card3 title="Chapter 3" link="/vu/mid-term/mcqs/mgt211/" />
      </div>
    </VUWrapper>
  )
}
