'use client'
import React, { useState, useEffect } from 'react'
import Loading from '@/src/components/element/Loading'
import { convertToLowercaseWithHyphen } from '@/src/views/function/convertToLowercaseWithHyphen'
import { convertToUppercaseWithSpace } from '@/src/views/function/convertToUppercaseWithSpace'
import { Heading2TypesGet, IpropsHeading1 } from '@/src/types/page'
import { GetHeading2 } from '@/src/app/constant'
import axios from 'axios'
import Card3 from '@/src/components/card2/card3'
import QuizWrapper from '@/src/app/(quiz)/quiz/QuizWrapper'

export default function Heading1View({ bookName, heading1 }: IpropsHeading1) {
  const [fetchdata, setFetchData] = useState<Heading2TypesGet[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      setError(false)
      setLoading(true)
      const response = await axios.get(GetHeading2)
      setFetchData(response.data)

      setLoading(false)
    } catch (error) {
      console.log('error:', error)
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filteredData = fetchdata.filter((item: any) => {
    const heading1Filter = item.heading1.some(
      (data: { title: string }) =>
        convertToLowercaseWithHyphen(data.title) ===
        convertToLowercaseWithHyphen(heading1)
    )

    return (
      convertToLowercaseWithHyphen(item.book.title) ===
        convertToLowercaseWithHyphen(bookName) && heading1Filter
    )
  })
  if (error) {
    return <h1>Error ...</h1>
  }
  const title = `${convertToUppercaseWithSpace(bookName)} ${convertToUppercaseWithSpace(heading1)}`
  const url = `https://growlearnhub.com/quiz/${bookName}/${heading1}/`
  return (
    <QuizWrapper
      title={title}
      url={url}
      b1="Quiz"
      b1Link="/quiz"
      b2={convertToUppercaseWithSpace(bookName)}
      b2Link={`/quiz/${convertToLowercaseWithHyphen(bookName)}`}
      b3={convertToUppercaseWithSpace(heading1)}
      title1="Quiz"
    >
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-5 mb-16">
        <>
          {loading ? (
            <>
              <Loading />
              <Loading />
              <Loading />
            </>
          ) : (
            <>
              {filteredData.map((data: Heading2TypesGet) => (
                <Card3
                  key={data._id}
                  title={data.title}
                  link={`${
                    process.env.NEXT_PUBLIC_FRONTEND_URL
                  }/quiz/${bookName}/${heading1}/${convertToLowercaseWithHyphen(
                    data.title
                  )}`}
                />
              ))}
            </>
          )}
        </>
      </div>
    </QuizWrapper>
  )
}
