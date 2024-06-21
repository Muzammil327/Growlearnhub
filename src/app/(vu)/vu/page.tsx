import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='px-8'>
      <h1>Virtual University</h1>
      <Link href="/vu/notes/">Notes</Link> <br />
      <Link href="/vu/handouts/">Handouts</Link>
    </div>
  )
}
