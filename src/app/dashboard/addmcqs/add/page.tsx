'use client'
import React, { useState } from 'react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import SimpleInput from '../../components/Input/simpleInput'
import styles from '@/src/app/dashboard/form.module.css'
import slugify from 'slugify'
import { supabase } from '@/src/util/db'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import MainSelect from './main/page'
import { SingleValue } from 'react-select'
import Label from '@/src/components/ui/Label'

interface DropdownIprops {
  _id: string
  title: string
  book: {
    _id: string
    title: string
  }
}
interface OptionType {
  value: string
  label: string
}
export default function Page() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [options, setOptions] = useState<string[]>([])
  const [correctOption, setCorrectOption] = useState<string>('')

  const [selectedOption1, setSelectedOption1] = useState<SingleValue<any>>(null)
  const [selectedOption2, setSelectedOption2] = useState<SingleValue<any>>(null)
  const [selectedOption3, setSelectedOption3] = useState<SingleValue<any>>(null)
  const [selectedOption4, setSelectedOption4] = useState<SingleValue<any>>(null)
  const [selectedOption5, setSelectedOption5] = useState<SingleValue<any>>(null)
  const [selectedOption6, setSelectedOption6] = useState<SingleValue<any>>(null)
  const [selectedOption7, setSelectedOption7] = useState<SingleValue<any>>(null)

  const handleTagsChange = (tag: string[]) => {
    setOptions(tag)
  }
  const modules = {
    toolbar: [
      [
        { header: '1' },
        { header: '2' },
        { header: '3' },
        { header: '4' },
        { font: [] },
      ],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],
      ['link', 'image', 'video'],
      ['code-block'],
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction
      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      ['clean'], // remove formatting button
      ['formula'], // Add formula support
    ],
  }

  // submit data
  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent form submission
    setLoading(true)
    setMessage('')
    setError('')

    const slug = slugify(title, {
      replacement: '-',
      lower: true,
      strict: true,
      locale: 'vi',
      trim: true,
    })

    try {
      const { data, error } = await supabase.from('mcqs').insert({
        name: title,
        slug,
        correct_option: correctOption,
        description,
        option: options,
        classId: selectedOption1?.map((data: any) => data.value) || [],
        bookId: selectedOption2?.map((data: any) => data.value) || [],
        chapterId: selectedOption3?.map((data: any) => data.value) || [],
        topicId: selectedOption4?.map((data: any) => data.value) || [],
        catgeoryId: selectedOption5?.map((data: any) => data.value) || [],
        subCatgeoryId: selectedOption6?.map((data: any) => data.value) || [],
        tags: selectedOption7?.map((data: any) => data.value) || [],
      })

      if (error) {
        setError(`Error: ${error.message}`)
      } else {
        setMessage('Data successfully posted!')
        setTitle('')
        setDescription('')
        setCorrectOption('')
        setOptions([])
        setSelectedOption1(null)
        setSelectedOption2(null)
        setSelectedOption3(null)
        setSelectedOption4(null)
        setSelectedOption5(null)
        setSelectedOption6(null)
        setSelectedOption7(null)
      }
    } catch (error) {
      setError('Error during Category Update')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mb-8 mt-24">
      <h2 className={`${styles.heading}`}>Mcqs Add Here</h2>
      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {error && <span className="text-red-500">{error}</span>}
        {message && <span className="text-indigo-500">{message}</span>}

        {/* Title */}
        <SimpleInput
          label="Title"
          type="text"
          htmlFor="title"
          value={title}
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        {/*  Option Correct */}
        <div className="mt-4">
          <Label label="Option Correct" htmlFor="OptionCorrect" />
          <div className="mt-2.5">
            <select
              id="OptionCorrect"
              name="OptionCorrect"
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

        {/* Options */}
        <div className="mt-4">
          <Label label="Options" htmlFor="tags" />

          <TagsInput
            value={options}
            onChange={handleTagsChange}
            inputProps={{ id: 'tags' }}
          />
        </div>

        {/* Long Description */}
        <div className="mt-4">
          <Label label="Long Description" htmlFor="ldescription" />

          <ReactQuill
            theme="snow"
            value={description}
            modules={modules}
            onChange={setDescription}
            className="border border-dashed border-gray-900/25 rounded-md mt-2"
          />
        </div>

        {/* Variant */}
        <MainSelect
          setSelectedOption1={setSelectedOption1}
          selectedOption1={selectedOption1}
          setSelectedOption2={setSelectedOption2}
          selectedOption2={selectedOption2}
          setSelectedOption3={setSelectedOption3}
          selectedOption3={selectedOption3}
          setSelectedOption4={setSelectedOption4}
          selectedOption4={selectedOption4}
          setSelectedOption5={setSelectedOption5}
          selectedOption5={selectedOption5}
          setSelectedOption6={setSelectedOption6}
          selectedOption6={selectedOption6}
          setSelectedOption7={setSelectedOption7}
          selectedOption7={selectedOption7}
        />
        <div className="mt-5">
          <button
            type="submit"
            className={`${styles.submitBTN}`}
            disabled={loading}
          >
            {loading ? 'Loading ...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  )
}
