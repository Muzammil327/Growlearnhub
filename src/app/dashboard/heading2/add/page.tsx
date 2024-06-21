'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import SimpleInput from '@/src/app/dashboard/components/Input/simpleInput'
import styles from '@/src/app/dashboard/form.module.css'
import { BookTypesGet, Heading1TypesGet } from '@/src/types/page'
import Dropdown from '../../components/Input/dropdown'
import axios from 'axios'
import { GetBook, GetHeading1, PostHeading2 } from '@/src/app/constant'

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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [title, setTitle] = useState<string>('')
  const [bookId, setBookId] = useState<string>('')
  const [keywords, setKeywords] = useState<string[]>([])

  // submit data
  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent form submission

    try {
      setLoading(false)
      const response = await axios.post(PostHeading2, {
        title,
        bookId,
        keywords,
      })
      setLoading(false)

      if (response.data.status === '400' || response.data.status === '500') {
        setError(response.data.message)
        setLoading(false)
      } else {
        setLoading(true)
        setError(response.data.message)
        navigate.push('/dashboard/heading2')
        setLoading(false)
      }
    } catch (error) {
      setError('Error during Heading 2 Posting!')
    }
  }

  // book data fetch
  const [booksData, setBooksData] = useState<BookTypesGet[]>([])
  const fetchBookData = async () => {
    try {
      const response = await axios.get(GetBook)
      setBooksData(response.data)
    } catch (error) {
      console.log('Error during Book Getting!', error)
    }
  }

  // heading 1 data fetch
  const [fetchHeading1, setFetchHeading1] = useState<Heading1TypesGet[]>([])

  const fetchHeading1Data = async () => {
    try {
      const response = await axios.get(GetHeading1)
      setFetchHeading1(response.data)
    } catch (error) {
      console.log('Error during Heading 1 Getting!', error)
    }
  }
  const heading1Filter = fetchHeading1.filter(
    (data: any) => data.book._id === bookId
  )

  useEffect(() => {
    fetchBookData()
    fetchHeading1Data()
  }, [])

  return (
    <div className="mb-8 mt-24">
      <h2 className={`${styles.heading}`}>Heading 2 Add Here</h2>

      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {error && <span className="text-indigo-500">{error}</span>}

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Title */}
          <SimpleInput
            label="Title"
            type="text"
            htmlFor="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
          />

          {/*  Book Name */}
          <Dropdown
            bookId={bookId}
            label="Book Name"
            setBookId={(e: any) => setBookId(e.target.value)}
            booksData={booksData}
          />

          {/*  Heading 1 */}
          <MultiSelectComponent
            options={heading1Filter}
            selectedOptions={keywords}
            setSelectedOptions={(selectedOptions: any) =>
              setKeywords(selectedOptions)
            }
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

const MultiSelectComponent = ({
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
