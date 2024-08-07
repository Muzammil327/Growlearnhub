'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import styles from '@/src/app/dashboard/form.module.css'
import SimpleInput from '@/src/app/dashboard/components/Input/simpleInput'
// import { getBookAll } from '@/src/views/api/book/page'
// import { getHeading1All } from '@/src/views/api/heading1/page'
// import { getSingleHeading2, updateHeading2 } from '@/src/views/api/heading2/page'
import { BookTypesGet, Heading1TypesGet } from '@/src/types/page'
import Dropdown from '../../components/Input/dropdown'
import axios from 'axios'
import { GetBook, GetHeading1 } from '@/src/app/constant'

interface DropdownIprops {
  _id: string
  title: string
  book: {
    _id: string
    title: string
  }
}

const KeywordUpdated = () => {
  const router = useRouter()
  const { id } = useParams()

  const [title, setTitle] = useState<string>('')
  const [bookId, setBookId] = useState<string>('')
  const [keywords, setKeywords] = useState<string[]>([])

  const [loadingData, setLoadingData] = useState(true)
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [fError, setFError] = useState(false)
  const [UError, setUError] = useState(false)

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFError(false)
        setLoadingData(true)
        // const response = await getSingleHeading2(id.toString())
        // setTitle(response.title)
        // setBookId(response.book._id)
        // setKeywords(response.heading1)
        setLoadingData(false)
      } catch (error) {
        console.log('error:', error)
        setFError(true)
        setLoadingData(false)
      }
    }
    if (id) {
      fetchData()
    }
  }, [id])

  const SubmitHandle = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoadingBtn(false)
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/update/heading2/${id}`,
        {
          title,
          bookId,
          keywords,
        }
      )
      setLoadingBtn(false)

      if (response.data.status === '400' || response.data.status === '500') {
        setUError(response.data.message)
        setLoadingBtn(false)
      } else {
        setLoadingBtn(true)

        setUError(response.data.message)

        router.push('/dashboard/heading2')
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (fError) {
    return (
      <div className={`${styles.form}`}>
        <h1>Error ...</h1>
      </div>
    )
  }
  if (loadingData) {
    return (
      <div className={`${styles.form}`}>
        <h1>Loading ...</h1>
      </div>
    )
  }

  return (
    <div className="mb-8 mt-24">
      <h2 className={`${styles.heading}`}>Heading 2 Update Here</h2>

      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {UError && <span className="text-indigo-500">{UError}</span>}
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
            {loadingBtn ? 'Loading ...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default KeywordUpdated
const MultiSelectComponent = ({
  options,
  selectedOptions,
  setSelectedOptions,
}: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleSelect = (option: any) => {
    // Check if option._id already exists in selectedOptions array
    const optionExists = selectedOptions.some(
      (item: any) => item._id === option._id
    )

    if (optionExists) {
      // Remove option from selectedOptions
      setSelectedOptions(
        selectedOptions.filter((item: any) => item._id !== option._id)
      )
    } else {
      // Add option to selectedOptions
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
          {options.map(
            (
              option: any // Ensure 'option' is of the correct type
            ) => (
              <div key={option._id} className="flex items-center p-2">
                <input
                  type="checkbox"
                  checked={selectedOptions.some(
                    (item: any) => item._id === option._id
                  )}
                  onChange={() => handleSelect(option)}
                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <label className="ml-2 text-gray-700">{option.title}</label>
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}
