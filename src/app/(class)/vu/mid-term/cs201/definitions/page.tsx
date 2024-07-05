import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import Link from 'next/link'

export default function Page() {
  return (
    <VUWrapper title="VU CS201 Mid Term MCQ's">
      <div className="my-20">
        <Definition
          title="What is pointer."
          para="Pointer is a special type of variable that contains a memory address. It is not a variable that contains a value, rather an address of the memory that is contained inside a pointer variable."
          slug="/vu/mid-term/cs201/definitions/what-is-pointer"
        />
        <Definition
          title="What is references."
          para="A reference can be considered as a special type of pointer as it also contains memory address."
          slug="/vu/mid-term/cs201/definitions/what-is-reference"
        />
      </div>
    </VUWrapper>
  )
}

export function Definition({
  title,
  para,
  slug,
}: {
  title: string
  para: string
  slug: string
}) {
  return (
    <div>
      <hr className="py-4" />
      <Link href={slug}><h2>{title}</h2></Link>
      <p className="text-medium"> {para}</p>
    </div>
  )
}
