import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import Link from 'next/link'

export default function Page() {
  return (
    <VUWrapper title="VU CS201 Mid Term MCQ's Chapter 3">
      <div className="my-20">
        <div className="flex justify-between items-center">
          <Link className="btn" href="/vu/mid-term/cs201/mcqs/chapter-3/">
            Chapter 3
          </Link>
          <Link className="btn" href="/vu/mid-term/cs201/mcqs/">
            Chapter 4
          </Link>
        </div>
      </div>
    </VUWrapper>
  )
}
