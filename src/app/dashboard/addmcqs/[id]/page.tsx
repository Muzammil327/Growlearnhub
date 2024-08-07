'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import styles from '@/src/app/dashboard/form.module.css'
import SimpleInput from '@/src/app/dashboard/components/Input/simpleInput'
import axios from 'axios'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import Dropdown from '../../components/Input/dropdown'
// import { getMcqs } from '@/src/views/api/mcqs/page'
import slugify from 'slugify'
import Select from 'react-select'
import MultiSelectComponent from '../../../../components/dashboard/MultiSelectComponent'
import { GetTag } from '@/src/app/constant'
import { Heading1TypesGet } from '@/src/types/page'

interface Tag {
  id: string
  text: string
}

export default function Page() {
  const router = useRouter()
  const { id } = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const [options, setOptions] = useState<string[]>([])
  const [correctOption, setCorrectOption] = useState<string>('')

  const [bookId, setBookId] = useState<string>('')
  const [keywords, setKeywords] = useState<string[]>([])
  const [keywords2, setKeywords2] = useState<string[]>([])
  const [keywords3, setKeywords3] = useState<string[]>([])
  const [relatedId, setRelatedId] = useState<Tag[]>([])

  useEffect(() => {
    const fetchMcqsData = async () => {
      try {
        // const mcqs = await getMcqs()
        // setData(mcqs) // Setting only the options to the relatedId state
      } catch (error) {
        console.log('Error fetching MCQs:', error)
      }
    }

    fetchMcqsData()
  }, [])

  // Handle select change function
  const handleSelectChange = (selectedOptions: any) => {
    setRelatedId(selectedOptions)
  }

  const [UError, setUError] = useState(false)

  const handleTagsChange = (tags: string[]) => {
    setOptions(tags)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false)
        setLoading(true)

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get/smcqs/${id}`
        )
        const data = response.data[0]
        setTitle(data.title)
        setDescription(data.description)
        setCorrectOption(data.correctOption)
        setOptions(data.options)

        setBookId(data.book._id)
        setKeywords(data.heading1.map((data: any) => data._id))
        setKeywords2(data.heading2.map((data: any) => data._id))
        setKeywords3(data.tags.map((data: any) => data._id))
        const transformedRelatedId = data.relatedId.map(
          ({ _id, title }: any) => ({
            value: _id,
            label: title,
          })
        )
        setRelatedId(transformedRelatedId)
        setLoading(false)
      } catch (error) {
        console.log('error:', error)
        setError(true)
        setLoading(false)
      }
    }
    if (id) {
      fetchData()
    }
  }, [id])

  // book fetch
  const [fetchUser1, setFetchUser1] = useState([])
  const fetchData1 = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get/book`
      )
      setFetchUser1(response.data)
    } catch (error) {
      console.log('Error during Book Getting!', error)
    }
  }

  // heading 1 fetch
  const [fetchUser2, setFetchUser2] = useState([])
  const heading1Filter = fetchUser2.filter(
    (data: any) => data.book._id === bookId
  )

  const fetchData2 = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get/heading1`
      )
      setFetchUser2(response.data)
    } catch (error) {
      console.log('Error during Heading 1 Getting!', error)
    }
  }

  // heading 2 fetch
  const [fetchUser3, setFetchUser3] = useState([])
  const heading2Filter = fetchUser3.filter(
    (data: any) => data.book._id === bookId
  )

  const fetchData3 = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get/heading2`
      )
      setFetchUser3(response.data)
    } catch (error) {
      console.log('Error during Heading 1 Getting!', error)
    }
  }

  // set Fetch Tags
  const [fetchTags, setFetchTags] = useState<Heading1TypesGet[]>([])

  const fetchTags2Data = async () => {
    try {
      const response = await axios.get(GetTag)
      setFetchTags(response.data)
    } catch (error) {
      console.log('Error during Heading 1 Getting!', error)
    }
  }

  useEffect(() => {
    fetchData1()
    fetchData2()
    fetchData3()
    fetchTags2Data()
  }, [])

  const SubmitHandle = async (e: React.FormEvent) => {
    e.preventDefault()
    const mappedRelatedIds: any[] = relatedId.map((data: any) => data.value)

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/update/mcqs/${id}`,
        {
          title,
          description,
          correctOption,
          bookId,
          options,
          keywords,
          keywords2,
          keywords3,
          relatedId: mappedRelatedIds,
          slug: slugify(title, {
            replacement: '-', // replace spaces with replacement character, defaults to `-`
            remove: undefined, // remove characters that match regex, defaults to `undefined`
            lower: true, // convert to lower case, defaults to `false`
            strict: false, // strip special characters except replacement, defaults to `false`
            locale: 'vi', // language code of the locale to use
            trim: true, // trim leading and trailing replacement chars, defaults to `true`
          }),
        }
      )

      if (response.data === '400' && response.data === '500') {
        setUError(response.data.message)
      } else {
        setUError(response.data.message)
        router.push('/dashboard/addmcqs')
      }
    } catch (error) {
      console.log(error)
    }
  }
  // suggestions

  if (error) {
    return (
      <div className={`${styles.form}`}>
        <h1>Error ...</h1>
      </div>
    )
  }
  if (loading) {
    return (
      <div className={`${styles.form}`}>
        <h1>Loading ...</h1>
      </div>
    )
  }
  return (
    <div className="mb-8 mt-24">
      <h2 className={`${styles.heading}`}>Mcqs Add Here</h2>
      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {error && <span className="text-indigo-500">{error}</span>}

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

          {/* book name  */}
          <Dropdown
            bookId={bookId}
            label="Book Name"
            setBookId={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setBookId(e.target.value)
            }
            booksData={fetchUser1}
          />

          {/*  Option Correct */}
          <div className="">
            <label htmlFor=" Option Correct" className={`${styles.label}`}>
              Option Correct
            </label>
            <div className="mt-2.5">
              <select
                id="Option Correct"
                name="Option Correct"
                className={`${styles.select}`}
                value={correctOption}
                onChange={(e) => setCorrectOption(e.target.value)}
              >
                <option value="">Select Correct Option</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 mt-3">
          <div className="my-5">
            <label
              htmlFor="description"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Description
            </label>
            <textarea
              name=""
              id=""
              className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={description}
              placeholder="Enter Description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* heading 1 */}
          <MultiSelectComponent
            options={heading1Filter}
            selectedOptions={keywords}
            setSelectedOptions={(selectedOptions: any) =>
              setKeywords(selectedOptions)
            }
          />

          {/* heading 2 */}
          <MultiSelectComponent
            options={heading2Filter}
            selectedOptions={keywords2}
            setSelectedOptions={(selectedOptions: any) =>
              setKeywords2(selectedOptions)
            }
          />

          {/* Tags */}
          <MultiSelectComponent
            options={fetchTags}
            selectedOptions={keywords3}
            setSelectedOptions={(selectedOptions: any) =>
              setKeywords3(selectedOptions)
            }
          />

          {/*  Options */}
          <div>
            <label htmlFor="tags" className={`${styles.label}`}>
              Options
            </label>
            <TagsInput
              value={options}
              onChange={handleTagsChange}
              inputProps={{ id: 'tags' }}
            />
          </div>

          {/* related mcqs */}
          <div className="mb-6">
            <label
              htmlFor="productId"
              className="block text-base font-medium text-gray-700 mb-2"
            >
              Related Product
            </label>
            <Select
              isMulti
              options={
                data.map(({ _id, title }: any) => ({
                  value: _id,
                  label: title,
                })) as any[]
              }
              onChange={handleSelectChange}
              value={relatedId}
            />
          </div>
        </div>

        <div className="mt-10">
          <button type="submit" className={`${styles.submitBTN}`}>
            {loading ? 'Submit' : 'Loading ...'}
          </button>
        </div>
      </form>
    </div>
  )
}
