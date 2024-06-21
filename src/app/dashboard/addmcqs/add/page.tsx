'use client'
import React, { useState, useEffect } from 'react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import { useRouter } from 'next/navigation'
import { getMcqs } from '@/src/api/mcqs/page'
import { getBookAll } from '@/src/api/book/page'
import SimpleInput from '../../components/Input/simpleInput'
import styles from '@/src/app/dashboard/form.module.css'
import Dropdown from '../../components/Input/dropdown'
import { BookTypesGet, Heading1TypesGet } from '@/src/types/page'
import axios from 'axios'
import { GetHeading1, GetHeading2, GetTag } from '@/src/app/constant'
import slugify from 'slugify'
import Select from 'react-select'

interface Tag {
  id: string
  text: string
}
interface DropdownIprops {
  _id: string
  title: string
  book: {
    _id: string
    title: string
  }
}
export default function Page() {
  const navigate = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [data, setData] = useState([])

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const [options, setOption] = useState<string[]>([])
  const [correctOption, setCorrectOption] = useState<string>('')

  const [bookId, setBookId] = useState<string>('')
  const [keywords, setKeywords] = useState<string[]>([])
  const [keywords2, setKeywords2] = useState<string[]>([])
  const [keywords3, setKeywords3] = useState<string[]>([])
  const [relatedId, setRelatedId] = useState<Tag[]>([])
 
  const handleTagsChange = (tag: string[]) => {
    setOption(tag)
  }
  
  const handleSelectChange = (selectedOptions: any) => {
    setRelatedId(selectedOptions)
  }
  // submit data
  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent form submission
    const mappedRelatedIds: any[] = relatedId.map((data: any) => data.value)

    try {
      setLoading(true)
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/post/mcqs`,
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

      if (response.data.status === '400' || response.data.status === '500') {
        setError(response.data.message)
      } else {
        setError(response.data.message)

        setTitle('')
        setDescription('')

        setCorrectOption('')
        setOption([])
        setRelatedId([])

        setBookId('')

        setLoading(false)

        navigate.push('/dashboard/addmcqs')
      }
    } catch (error) {
      setLoading(false) // Set loading state to false in case of an error
      setError('Error during Category Update')
    }
  }
  // fetch Book Data
  const [booksData, setBooksData] = useState<BookTypesGet[]>([])
  const fetchBookData = async () => {
    try {
      const data = await getBookAll()
      setBooksData(data)
    } catch (error) {
      console.log('Error during Book Getting!', error)
    }
  }

  // set Fetch Heading 1
  const [fetchHeading1, setFetchHeading1] = useState<Heading1TypesGet[]>([])
  const heading1Filter = fetchHeading1.filter(
    (data: any) => data.book._id === bookId
  )
  const fetchHeading1Data = async () => {
    try {
      const response = await axios.get(GetHeading1)
      setFetchHeading1(response.data)
    } catch (error) {
      console.log('Error during Heading 1 Getting!', error)
    }
  }

  // set Fetch Heading 2
  const [fetchHeading2, setFetchHeading2] = useState<Heading1TypesGet[]>([])
  const heading2Filter = fetchHeading2.filter(
    (data: any) => data.book._id === bookId
  )
  const fetchHeading2Data = async () => {
    try {
      const response = await axios.get(GetHeading2)
      setFetchHeading2(response.data)
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
    fetchBookData()
    fetchHeading1Data()
    fetchHeading2Data()
    fetchTags2Data()
  }, [])

  // suggestions
  useEffect(() => {
    const fetchMcqsData = async () => {
      try {
        const mcqs = await getMcqs()
        setData(mcqs)
      } catch (error) {
        console.log('Error fetching MCQs:', error)
      }
    }

    fetchMcqsData()
  }, [])
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
            booksData={booksData}
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
          <MultiSelectHeadng1
            options={heading1Filter}
            selectedOptions={keywords}
            setSelectedOptions={(selectedOptions: any) =>
              setKeywords(selectedOptions)
            }
          />

          {/* heading 2 */}
          <MultiSelectHeadng2
            options={heading2Filter}
            selectedOptions={keywords2}
            setSelectedOptions={(selectedOptions: any) =>
              setKeywords2(selectedOptions)
            }
          />

          {/* Tags */}
          <MultiSelectTags
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

const MultiSelectHeadng1 = ({
  options,
  selectedOptions,
  setSelectedOptions,
}: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleSelect = (option: any) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item: any) => item !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="bg-white border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        Select Heading 1
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg grid grid-cols-2">
          {options.map((option: DropdownIprops) => (
            <div key={option._id} className="flex items-center p-2">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option._id)}
                onChange={() => handleSelect(option._id)}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <label className="ml-2 text-gray-700">
                <option>{option.title}</option>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const MultiSelectHeadng2 = ({
  options,
  selectedOptions,
  setSelectedOptions,
}: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleSelect = (option: any) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item: any) => item !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="bg-white border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        Select Heading 2
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg grid grid-cols-2">
          {options.map((option: DropdownIprops) => (
            <div key={option._id} className="flex items-center p-2">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option._id)}
                onChange={() => handleSelect(option._id)}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <label className="ml-2 text-gray-700">
                <option>{option.title}</option>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const MultiSelectTags = ({
  options,
  selectedOptions,
  setSelectedOptions,
}: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleSelect = (option: any) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item: any) => item !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="bg-white border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        Select Tags
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg grid grid-cols-2">
          {options.map((option: DropdownIprops) => (
            <div key={option._id} className="flex items-center p-2">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option._id)}
                onChange={() => handleSelect(option._id)}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <label className="ml-2 text-gray-700">
                <option>{option.title}</option>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
