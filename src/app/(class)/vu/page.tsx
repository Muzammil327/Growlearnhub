import Card3 from '@/src/components/card2/card3'
import VUWrapper from './VUWrapper'

export default function Page() {
  return (
    <VUWrapper title="VU">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5">
        <Card3 title="Vu Marks Calculator" link="/vu/mid-mark-calculator/" />
        <Card3 title="Vu Mid Term" link="/vu/mid-term/" />
        <Card3 title="Vu Final Term" link="/vu/final-term/" />
      </div>
    </VUWrapper>
  )
}
