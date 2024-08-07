'use client'
import React, { useEffect, useState } from 'react'
import ChapterWrapper from '@/src/components/Wrapper/ChapterWrapper'
import { supabase } from '@/src/util/db'
import Card3 from '@/src/components/card2/card3'
import { convertHyphensToSpaces } from '@/src/functions/slugify'

interface Iprops {
  params: {
    books: string
    chapter: string
  }
}

export default function Page({ params }: Iprops) {
  const [chapterBooksTopic, setChapterBooksTopic] = useState<any[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        // Fetch data from Supabase
        const { data: fetchedChapterBooksTopic, error } = await supabase.from(
          'topic'
        ).select(`
           id,
           name,
           slug,
         book:bookId (slug),
         chapter:chapterId (slug),
         class:classId (slug)
       `)

        if (error) {
          throw new Error(
            'Error fetching chapter_books_topic: ' + error.message
          )
        }
        // Filter data based on book name
        const filteredTopics = fetchedChapterBooksTopic?.filter(
          (item: any) =>
            item.book.slug === params.books &&
            item.chapter.slug === params.chapter &&
            item.class.slug === 'class-9'
        )

        setChapterBooksTopic(filteredTopics as any)
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchChapters()
  }, [params.books, params.chapter])

  return (
    <ChapterWrapper
      title={`9th class ${params.books} Solved Mcqs ${convertHyphensToSpaces(params.chapter)}`}
      b1="Mcqs"
      b1Link="/class-9/mcqs/"
      b2={params.books}
      b2Link={`/class-9/mcqs/${params.books}`}
      b3={`${convertHyphensToSpaces(params.chapter)}`}
      url={`/class-9/mcqs/${params.books}/${params.chapter}`}
    >
      <div className="grid gap-4 grid-cols-1 my-10">
        {error
          ? 'Error Fetching Books'
          : chapterBooksTopic.map((book) => (
              <Card3
                key={book.id}
                title={`${params.books} ${convertHyphensToSpaces(params.chapter)}: ${book.name} Solved Mcqs`}
                link={`/class-9/mcqs/${params.books}/${params.chapter}/${book.slug}`}
              />
            ))}
      </div>
    </ChapterWrapper>
  )
}
