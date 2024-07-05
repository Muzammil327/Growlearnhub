import VUWrapper from '@/src/app/(class)/vu/VUWrapper'
import Link from 'next/link'

export default function Page() {
  return (
    <VUWrapper title="What is Pointer">
      <div className="my-20">
        <h2>What is Pointer.</h2>
        <p>
          Pointer is a special type of variable that contains a memory address.
          It is not a variable that contains a value, rather an address of the
          memory that is contained inside a pointer variable.
        </p>
      </div>
    </VUWrapper>
  )
}
