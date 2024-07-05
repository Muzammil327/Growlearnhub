import Card3 from '@/src/components/card2/card3'
import VUWrapper from './VUWrapper'

export default function Page() {
  return (
    <VUWrapper title="VU">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20">
        <Card3 title="Vu Marks Calculator" link="/vu/mid-mark-calculator/" />
        <Card3 title="Vu Mid Term" link="/vu/mid-term/" />
      </div>
    </VUWrapper>
  )
}
