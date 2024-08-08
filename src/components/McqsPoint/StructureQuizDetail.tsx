'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/src/util/db'
import {
  convertHyphensToSpaces,
  convertToUppercaseAndReplaceHyphens,
} from '@/src/functions/slugify'
import { CardQuizWithoutLink } from '@/src/components/card/CardQuiz/cardQuiz'
import Wrapper from '@/src/components/element/Wrapper'

export default function StructureQuizDetail({ params }: any) {
  const [mcqs, setMcqs] = useState<any[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        // Fetch data from Supabase
        const { data: fetchedChapterBooksTopic, error } = await supabase
          .from('mcqs')
          .select(
            `
            id,
            name,
            slug,
            option,
            correct_option,
            tags,
            description,
            bookId,
            subCatgeoryId
       `
          )
          .eq('slug', params.slug)

        if (error) {
          throw new Error(
            'Error fetching chapter_books_topic: ' + error.message
          )
        }

        setMcqs(fetchedChapterBooksTopic as any)
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchChapters()
  }, [params.slug])

  return (
    <Wrapper
      title={`${convertToUppercaseAndReplaceHyphens(params.slug)}`}
      b1="Mcqs Point"
      b1Link="/mcqs-point"
      b2={`${convertHyphensToSpaces(params.slug)}`}
      url={`/mcqs-point/${params.slug}`}
    >
      <div className="grid gap-4 grid-cols-1 my-10">
        {error
          ? 'Error Fetching Books'
          : mcqs.map((mcqs) => (
              <CardQuizWithoutLink
                key={mcqs.id}
                title={`${mcqs.name}`}
                correctOption={mcqs.correct_option}
                description={mcqs.description}
                option={mcqs.option}
              />
            ))}
      </div>
    </Wrapper>
  )
}
