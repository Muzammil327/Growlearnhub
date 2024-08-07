'use client'
import React, { useState, useEffect } from 'react'
import Card2 from '@/src/components/card2/page'
import Loading from '@/src/components/element/Loading'
import { convertToLowercaseWithHyphen } from '@/src/views/function/convertToLowercaseWithHyphen'
import { convertToUppercaseWithSpace } from '@/src/views/function/convertToUppercaseWithSpace'
import Container from '@/src/components/element/container'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Form from '@/src/components/element/form/page'
import Sidebar from '@/src/components/element/sidebar'
import { Heading1TypesGet, IpropsbookName } from '@/src/types/page'
import axios from 'axios'
import { GetHeading1 } from '@/src/util/constant'
import Card3 from '@/src/components/card2/card3'
import SimpleWrapper from '@/src/components/Wrapper/SimpleWrapper'

export default function BookNameView({ bookName }: IpropsbookName) {
  const [fetchdata, setFetchData] = useState<Heading1TypesGet[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      setError(false)
      setLoading(true)
      const response = await axios.get(GetHeading1)
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
    return (
      convertToLowercaseWithHyphen(item.book.title) ===
      convertToLowercaseWithHyphen(bookName)
    )
  })
  if (error) {
    return <h1>Error ...</h1>
  }
  const title = `${convertToUppercaseWithSpace(bookName)} Quiz`
  const url = `https://growlearnhub.com/quiz/${bookName}/`
  return (
    <SimpleWrapper
      title={title}
      url={url}
      b1="Quiz"
      b1Link="/quiz"
      b2={convertToUppercaseWithSpace(bookName)}
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
              {filteredData.map((data: Heading1TypesGet) => (
                <Card3
                  key={data._id}
                  title={data.title}
                  link={`${
                    process.env.NEXT_PUBLIC_FRONTEND_URL
                  }/quiz/${bookName}/${convertToLowercaseWithHyphen(
                    data.title
                  )}`}
                />
              ))}
            </>
          )}
        </>
      </div>
    </SimpleWrapper>
  )
}
