'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { convertToUppercaseWithSpace } from '@/src/views/function/convertToUppercaseWithSpace'
import { IpropsHeading2, McqsTypes, PaginationTypes } from '@/src/types/page'
import Loading2 from '@/src/components/element/Loading2'
import { convertToLowercaseWithHyphen } from '@/src/views/function/convertToLowercaseWithHyphen'
import Link from 'next/link'
import styles from './quizShow.module.css'
import axios from 'axios'
import { GetMcqsUser } from '@/src/app/constant'
import QuizWrapper from '@/src/app/(quiz)/quiz/QuizWrapper'

export default function IdView({
  bookName,
  heading1,
  heading2,
}: IpropsHeading2) {
  const capitalizedHeading1 = convertToUppercaseWithSpace(heading1)
  const capitalizedbookName = convertToUppercaseWithSpace(bookName)
  const [fetchUser, setFetchUser] = useState<McqsTypes[]>([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | null
  }>({})

  const [pagination, setPagination] = useState<PaginationTypes>({
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
  })

  const fetchData = useCallback(
    async (page: number, limit: number) => {
      try {
        setError(false)
        setLoading(true)
        const response = await axios.get(
          `${GetMcqsUser}?page=${page}&limit=${limit}`
        )
        setPagination(response.data.pagination)
        setFetchUser(response.data.data)
        setLoading(false)

        const filteredData = response.data.data.filter((item: any) => {
          const bookMatch =
            convertToLowercaseWithHyphen(item.book.title) ===
            convertToLowercaseWithHyphen(bookName)

          const heading1Match = item.heading1.some(
            (heading: any) =>
              convertToLowercaseWithHyphen(heading.title) ===
              convertToLowercaseWithHyphen(heading1)
          )

          const heading2Match = item.heading2.some(
            (heading: any) =>
              convertToLowercaseWithHyphen(heading.title) ===
              convertToLowercaseWithHyphen(heading2)
          )

          return bookMatch && heading1Match && heading2Match
        })
        setFetchUser(filteredData)

        setPagination({
          totalItems: filteredData.length,
          totalPages: Math.ceil(filteredData.length / limit),
          currentPage: 1,
        })
      } catch (error) {
        console.log('error:', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    },
    [bookName, heading1, heading2]
  )

  useEffect(() => {
    fetchData(1, 10)
  }, [fetchData])

  const handlePaginationClick = (page: number) => {
    fetchData(page, 10)
  }

  const handleOptionClick = (
    option: string,
    correctOption: string,
    questionId: string
  ) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [questionId]: option === correctOption ? option : 'False',
    }))
  }

  if (error) {
    return <h1>Error ...</h1>
  }
  const title = `${convertToUppercaseWithSpace(heading1)} - ${convertToUppercaseWithSpace(heading2)}`
  const url = `https://growlearnhub.com/quiz/${bookName}/${heading1}/${heading2}/`
  return (
    <>
      <QuizWrapper
        title={title}
        url={url}
        b1="Quiz"
        b1Link="/quiz"
        b2={convertToUppercaseWithSpace(bookName)}
        b2Link={`/quiz/${convertToLowercaseWithHyphen(bookName)}/`}
        b3={convertToUppercaseWithSpace(heading1)}
        b3Link={`/quiz/${convertToLowercaseWithHyphen(bookName)}/${convertToLowercaseWithHyphen(heading1)}`}
        b4={convertToUppercaseWithSpace(heading2)}
        title1="Quiz"
      >
        <div className="my-5 mb-16">
          <>
            {loading ? (
              <>
                <Loading2 />
                <Loading2 />
                <Loading2 />
              </>
            ) : (
              <>
                {fetchUser.map((data: McqsTypes) => {
                  return (
                    <div className={styles.quiz} key={data._id}>
                      <div className="question">
                        <Link
                          href={`/quizCenter/${data.slug}`}
                          className={`${styles.link} capitalize`}
                        >
                          {data.title}.
                        </Link>
                      </div>
                      <div className="">
                        <ul>
                          {data.options.map((option: any, index: number) => {
                            return (
                              <li
                                key={index}
                                onClick={() =>
                                  handleOptionClick(
                                    option,
                                    data.correctOption,
                                    data._id
                                  )
                                }
                                className={`cursor-pointer md:text-base text-sm ${styles.optionli}`}
                              >
                                <button
                                  className="border-none outline-none"
                                  aria-label="Options"
                                >
                                  Option {index + 1}: {option}
                                </button>
                              </li>
                            )
                          })}
                        </ul>
                        <div className="">
                          {selectedOptions[data._id] ? (
                            <div className="flex gap-5 items-center justify-between">
                              <button
                                className="flex items-center justify-center gap-2 whitespace-nowrap rounded bg-green-50 text-green-900 md:px-6 px-4 md:py-3 py-2 text-sm font-medium tracking-wide border-green-100 transition duration-300 hover:bg-green-100 focus:bg-green-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-100 disabled:bg-green-100 disabled:shadow-none"
                                aria-label="Correct || False"
                              >
                                {selectedOptions[data._id] ===
                                data.correctOption
                                  ? 'Correct'
                                  : 'False'}
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </>
            )}
          </>
        </div>
        <div className="flex gap-1">
          {pagination.totalPages > 0 &&
            Array.from({ length: pagination.totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePaginationClick(index + 1)}
                className={`h-8 w-8 rounded-md text-white flex items-center justify-center ${
                  pagination.currentPage === index + 1
                    ? 'bg-blue-400'
                    : 'bg-red-400'
                }`}
              >
                {index + 1}
              </button>
            ))}
        </div>
      </QuizWrapper>
    </>
  )
}
