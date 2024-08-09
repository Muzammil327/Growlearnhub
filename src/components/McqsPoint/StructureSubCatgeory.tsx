'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/util/db'
import { CardQuiz } from '@/src/components/card/CardQuiz/cardQuiz'
import Wrapper from '@/src/components/element/Wrapper'

interface Iprops {
  bookId: string
  catgeoryId: string
  subCatgeory: string
  title: string
  b1: string
  b2: string
  b3: string
  b4: string
  url: string
  b1Link: string
  b2Link: string
  b3Link: string
  image: string
}

export default function StructureSubCatgeory({
  subCatgeory,
  bookId,
  catgeoryId,
  title,
  b1,
  b2,
  b3,
  b4,
  url,
  b1Link,
  b2Link,
  b3Link,
  image,
}: Iprops) {
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
              item.bookId.includes(bookId) &&
              item.catgeoryId.includes(catgeoryId) &&
              item.subCatgeoryId.includes(subCatgeory)
          )
          setMcqs(data as any)
        }

        // Filter the data
      } catch (error: any) {
        setError(error.message)
      }
    }
    fetchChapters()
  }, [bookId, catgeoryId, subCatgeory])

  return (
    <Wrapper
      title={title}
      b1={b1}
      b1Link={b1Link}
      b2={b2}
      b2Link={b2Link}
      b3={b3}
      b3Link={b3Link}
      b4={b4}
      url={url}
      image={image}
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
    </Wrapper>
  )
}
