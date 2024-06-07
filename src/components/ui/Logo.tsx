import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <>
      <Link href="/" className="-m-1.5 p-1.5 py-2">
        <Image
          src="/growlearnhub.png"
          alt="Muzammil Safdar"
          title="Muzammil Safdar"
          height="113"
          width="240"
          priority
        />
      </Link>
    </>
  )
}
