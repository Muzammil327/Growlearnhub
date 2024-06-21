import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="px-8">
      <h1>Virtual University Notes</h1>
      <Link href="/vu/notes/cs101/">CS101</Link> <br />
      <Link href="/vu/notes/">CS201</Link>
    </div>
  )
}
