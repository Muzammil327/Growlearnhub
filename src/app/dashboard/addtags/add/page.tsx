'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/src/app/dashboard/form.module.css'
import SimpleInput from '@/src/app/dashboard/components/Input/simpleInput'
import { PostTags } from '@/src/app/constant'
import axios from 'axios'
import slugify from 'slugify'

export default function Page() {
  const navigate = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [title, setTitle] = useState<string>('')

  // submit data
  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setLoading(false)
      const response = await axios.post(PostTags, {
        title,
        slug: slugify(title, {
          replacement: '-', // replace spaces with replacement character, defaults to `-`
          remove: undefined, // remove characters that match regex, defaults to `undefined`
          lower: true, // convert to lower case, defaults to `false`
          strict: false, // strip special characters except replacement, defaults to `false`
          locale: 'vi', // language code of the locale to use
          trim: true, // trim leading and trailing replacement chars, defaults to `true`
        }),
      })

      if (response.data.status === '400' || response.data.status === '500') {
        setError(response.data.message)
        setLoading(false)
      } else {
        setLoading(true)
        setError(response.data.message)
        setTitle('')

        navigate.push('/dashboard/addtags')
        setLoading(false)
      }
    } catch (error) {
      setError('Error during Book Posting!')
    }
  }

  return (
    <div className="mb-8 mt-24">
      <h2 className={`${styles.heading}`}>Books Add Here</h2>
      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {error && <span className="text-indigo-500">{error}</span>}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Title */}
          <div className="sm:col-span-2">
            <SimpleInput
              label="Title"
              type="text"
              htmlFor="title"
              value={title}
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
            />{' '}
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className={`${styles.submitBTN}`}>
            {loading ? 'Loading ...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  )
}
