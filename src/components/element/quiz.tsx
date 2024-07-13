import React from 'react'

export default function QuizLayout(data: {
  questionName: string
  option1: string
  option2: string
  option3: string
  option4: string
  correctOption: string
}) {
  return (
    <div className="shadow rounded-md my-5 bg-slate-200 p-6">
      <span className='text-lg font-semibold'>{data.questionName}</span>
      <ul className='my-4 flex gap-3 flex-col list-inside list-disc'>
        <li>{data.option1}</li>
        <li>{data.option2}</li>
        <li>{data.option3}</li>
        <li>{data.option4}</li>
      </ul>
      <p>Correct Options is: <span className='text-red-400'>{data.correctOption}</span></p>
    </div>
  )
}
