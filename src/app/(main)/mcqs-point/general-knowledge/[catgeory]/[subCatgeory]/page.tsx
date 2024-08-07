'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/util/db'
import { CardQuiz } from '@/src/components/card2/card3'
import SubCatgeoryWrapper from '@/src/components/Wrapper/SubCatgeoryWrapper'
import CatgeorySidebar from './sidebar'

interface Iprops {
  params: {
    catgeory: string
    subCatgeory: string
  }
}

export default function Page({ params }: Iprops) {
  const [mcqs, setMcqs] = useState<any[]>([])
  const [error, setError] = useState<string>('')
  const [sidebar, setSidebar] = useState<any[]>([])

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        // Fetch data from Supabase
        const { data: fetchedChapterBooksTopic, error } = await supabase.from(
          'mcqs'
        ).select(`
            id,
            name,
            slug,
            option,
            correct_option,
            bookId,
            catgeoryId,
            subCatgeoryId,
            tags
            `)
        if (error) {
          console.error('Error fetching data:', error)
        } else {
          const data = fetchedChapterBooksTopic.filter(
            (item: any) =>
              item.bookId.includes('general-knowledge') &&
              item.catgeoryId.includes(params.catgeory) &&
              item.subCatgeoryId.includes(params.subCatgeory)
          )
          setMcqs(data as any)
        }

        // Filter the data
      } catch (error: any) {
        setError(error.message)
      }
    }
    fetchChapters()
  }, [params.catgeory, params.subCatgeory])

  return (
    <SubCatgeoryWrapper
      title={`${params.catgeory} ${params.subCatgeory} General Knowledge Solved Mcqs`}
      b1="General Knowledge"
      b1Link="/mcqs-point/general-knowledge/"
      b2={`${params.catgeory}`}
      b2Link={`/mcqs-point/general-knowledge/${params.catgeory}`}
      b3={`${params.subCatgeory}`}
      url={`/mcqs-point/general-knowledge/${params.catgeory}/${params.subCatgeory}`}
      clist={sidebar}
    >
      <div className="grid gap-4 grid-cols-1 my-10">
        {error
          ? 'Error Fetching Books'
          : mcqs.map((mcqs) => (
              <CardQuiz
                key={mcqs.id}
                title={`${mcqs.name}`}
                link={`/mcqs-point/${mcqs.slug}`}
                correctOption={mcqs.correct_option}
                option={mcqs.option}
              />
            ))}
      </div>
      <CatgeorySidebar mcqs={mcqs} setSidebar={setSidebar} />
    </SubCatgeoryWrapper>
  )
}
