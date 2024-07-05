import Card3 from '@/src/components/card2/card3'
import VUWrapper from '@/src/app/(class)/vu/VUWrapper'

export default function Page() {
  return (
    <VUWrapper title="VU CS201 Mid Term MCQ's">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20">
        <Card3
          title="CS201 - Chapter 1 MCQ's"
          link="/vu/mid-term/cs201/mcqs/chapter-1/"
        />
        <Card3
          title="CS201 - Chapter 2 MCQ's"
          link="/vu/mid-term/cs201/mcqs/chapter-2/"
        />
        <Card3
          title="CS201 - Chapter 3 MCQ's"
          link="/vu/mid-term/cs201/mcqs/chapter-3/"
        />
      </div>
    </VUWrapper>
  )
}
