import React from 'react'
import Link from 'next/link'
import styles from "./Sidebar.module.scss"

interface IProps {
  list?: RelatedProps[]
}
interface RelatedProps {
  id: string
  name: string
  slug: string
}

export default function RelatedSidebar({ list }: IProps) {
  return (
    <div className="menu my-5">
      <div className={styles.title}>
        <h3 className={styles.h3}>Related Links:</h3>
      </div>
      <ul className="">
        {list &&
          list.map((data: RelatedProps) => {
            return (
              <li className="flex flex-col gap-y-4" key={data.name}>
                <Link
                  href={data.slug}
                  title={data.name}
                  className="text-indigo-600 dark:text-white hover:underline transition-all mb-3 capitalize"
                  aria-label={data.name}
                >
                  {data.name}
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
