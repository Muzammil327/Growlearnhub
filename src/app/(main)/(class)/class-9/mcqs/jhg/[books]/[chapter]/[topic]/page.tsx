'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/util/db'
import TopicWrapper from '@/src/components/Wrapper/TopicWrapper'
import { convertHyphensToSpaces } from '@/src/functions/slugify'
import { CardQuiz } from '@/src/components/card/CardQuiz/cardQuiz'

interface Iprops {
  params: {
    books: string
    chapter: string
    topic: string
  }
}

export default function Page({ params }: Iprops) {
  const [mcqs, setMcqs] = useState<any[]>([])
  const [error, setError] = useState<string>('')

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
            classId,
            bookId,
            chapterId,
            topicId
            `)
        if (error) {
          console.error('Error fetching data:', error)
        } else {
          const FilterData = fetchedChapterBooksTopic.filter(
            (item: any) =>
              item.classId.includes('class-9') &&
              item.bookId.includes(params.books) &&
              item.chapterId.includes(params.chapter) &&
              item.topicId.includes(params.topic)
          )
          setMcqs(FilterData as any)
        }

        // Filter the data
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchChapters()
  }, [params.books, params.chapter, params.topic])

  return (
    <TopicWrapper
      title={`9th class ${params.books} Solved Mcqs ${convertHyphensToSpaces(params.chapter)} ${convertHyphensToSpaces(params.topic)}`}
      b1={params.books}
      b1Link={`/class-9/mcqs/${params.books}`}
      b2={`${convertHyphensToSpaces(params.chapter)}`}
      b2Link={`/class-9/mcqs/${params.books}/${params.chapter}`}
      b3={`${convertHyphensToSpaces(params.topic)}`}
      url={`/class-9/mcqs/${params.books}/${params.chapter}/${params.topic}`}
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
    </TopicWrapper>
  )
}
