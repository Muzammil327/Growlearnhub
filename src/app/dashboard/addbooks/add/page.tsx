'use client'
import React, { useState } from 'react'
import styles from '@/src/app/dashboard/form.module.css'
import SimpleInput from '@/src/app/dashboard/components/Input/simpleInput'
import slugify from 'slugify'
import { supabase } from '@/src/util/db'

export default function Page() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const [name, setName] = useState('')

  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setLoading(true)

      const slug = slugify(name, {
        replacement: '-',
        lower: false,
        strict: false,
        locale: 'vi',
        trim: true,
      })

      const { data, error } = await supabase
        .from('book')
        .insert({ name, slug })

      if (error) {
        console.error('Supabase Error:', error)
        setMessage(`Error: ${error.message}`)
      } else {
        setMessage('Data successfully posted!')
        setName('')
      }
    } catch (error) {
      console.error('Catch Error:', error)
      setError('Error during Book Posting!')
    } finally {
      setLoading(false)
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
              label="Name"
              type="text"
              htmlFor="title"
              value={name}
              placeholder="Enter Book Name"
              onChange={(e) => setName(e.target.value)}
            />{' '}
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className={`${styles.submitBTN}`}>
            {loading ? 'Loading ...' : 'Submit'}
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
