'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/src/app/dashboard/form.module.css'
import SimpleInput from '@/src/app/dashboard/components/Input/simpleInput'
import slugify from 'slugify'
import { supabase } from '@/src/util/db'

interface Book {
  id: string
  name: string
}

const Page: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const [name, setName] = useState<string>('')
  const [bookId, setBookId] = useState<[]>([])
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data: book, error } = await supabase
          .from('book')
          .select('name, id')
        if (error) {
          throw new Error('Error fetching books: ' + error.message)
        }
        if (book) {
          console.log('book', book)
          setBooks(book)
        }
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchBooks()
  }, [])

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

      const { error } = await supabase
        .from('chapter')
        .insert([{ name, slug, book_id: bookId }]);

      if (error) {
        console.error('Supabase Error:', error)
        setMessage(`Error: ${error.message}`)
      } else {
        setMessage('Data successfully posted!')
        setName('')
        setBookId([])
      }
    } catch (error: any) {
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
          <div className="">
            <label htmlFor="book" className={`${styles.label}`}>
              Book
            </label>
            <div className="mt-2.5">
              <MultiSelectTags
                options={books}
                selectedOptions={bookId}
                setSelectedOptions={(selectedOptions: any) =>
                  setBookId(selectedOptions)
                }
              />
            </div>
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

export default Page

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
          {options.map((option: any) => (
            <div key={option.id} className="flex items-center p-2">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleSelect(option.id)}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <label className="ml-2 text-gray-700">
                <option>{option.name}</option>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
