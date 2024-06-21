'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import styles from '@/src/app/dashboard/form.module.css'
import SimpleInput from '@/src/app/dashboard/components/Input/simpleInput'
import axios from 'axios'
import { GetSingleTags, UpdateTags } from '@/src/app/constant'
import slugify from 'slugify'

const KeywordUpdated = () => {
  const router = useRouter()
  const { id } = useParams()
  const [title, setTitle] = useState<string>('')

  const [loading, setLoading] = useState(true)
  const [Error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false)
        setLoading(true)
        const response = await axios.get(`${GetSingleTags}/${id}`)
        setTitle(response.data.title)
      } catch (error) {
        console.log('error:', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    if (id) {
      fetchData()
    }
  }, [id])

  const [loadingU, setLoadingU] = useState(false)
  const [ErrorU, setErrorU] = useState(false || '')

  const SubmitHandle = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoadingU(false)
      const response = await axios.put(`${UpdateTags}/${id}`, {
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
        setErrorU(response.data.message)
        setLoadingU(false)
      } else {
        setLoadingU(true)

        setErrorU(response.data.message)
        setTitle('')
        router.push('/dashboard/addtags')
      }
    } catch (error) {
      setErrorU('Error during Book Updating!')
    }
  }

  if (ErrorU) {
    return (
      <div className={`${styles.form}`}>
        <h1>Error ...</h1>
      </div>
    )
  }
  if (loadingU) {
    return (
      <div className={`${styles.form}`}>
        <h1>Loading ...</h1>
      </div>
    )
  }
  return (
    <div className="mb-8 mt-24">
      <h2 className={`${styles.heading}`}>Books Update Here</h2>

      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {Error && <span className="text-indigo-500">{Error}</span>}

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Title */}
          <SimpleInput
            label="Title"
            type="text"
            htmlFor="title"
            value={title}
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
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

export default KeywordUpdated
