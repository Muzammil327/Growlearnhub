"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import SimpleWrapper from "../SimpleWrapper"
import ShareButtonQuiz from "../../element/ShareButtonQuiz"

interface QuizWrapperProps {
  cat: string[] // Array of categories
  title: string
  clist?: any[] // Adjust type according to the actual structure
  image?: string
  b1: string
  paramdata: string
  b1Link?: string
  canonical?: string
  children?: React.ReactNode
}

const QuizWrapperFilter: React.FC<QuizWrapperProps> = ({
  cat,
  title,
  clist,
  image,
  canonical,
  b1,
  b1Link,
  paramdata,
  children
}) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  const [sets, setSets] = useState<any[][]>([])
  const [currentSetIndex, setCurrentSetIndex] = useState<number | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(30) // 30 seconds for each question
  const [isTimeOut, setIsTimeOut] = useState(false)
  const [randomizedQuestions, setRandomizedQuestions] = useState<any[]>([])

  useEffect(() => {
    const fetchMcqs = async () => {
      try {
        setLoading(true)
        setError("") // Reset error on each fetch
        const response = await axios.get(
          `/api/mcqs/RandomOnlineTest?cat=${cat.join(",")}`
        )
        setSets(response.data.sets) // Grouped sets from the response
      } catch (err: any) {
        console.error(err)
        setError(err.response?.data?.message || "Error fetching MCQs.")
      } finally {
        setLoading(false)
      }
    }

    if (cat) {
      fetchMcqs()
    }
  }, [cat])

  const handleSetClick = (index: number) => {
    setCurrentSetIndex(index)
    setCurrentQuestionIndex(0)
    setScore(0)
    setTimer(30) // Reset timer
    setIsTimeOut(false)
    randomizeQuestions(sets[index]) // Randomize questions for the selected set
  }

  const randomizeQuestions = (questions: any[]) => {
    const shuffled = questions.sort(() => Math.random() - 0.5)
    setRandomizedQuestions(shuffled)
  }

  const handleAnswer = (selectedOption: string, correctAnswer: string) => {
    if (selectedOption === correctAnswer) {
      setScore((prev) => prev + 1)
    }
    goToNextQuestion()
  }

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1)
    setTimer(30) // Reset timer for the next question
    setIsTimeOut(false)
  }

  useEffect(() => {
    if (timer > 0 && currentSetIndex !== null && !isTimeOut) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    } else if (timer === 0) {
      setIsTimeOut(true)
      goToNextQuestion() // Move to next question on timeout
    }
  }, [timer, currentSetIndex, isTimeOut])

  const currentSet = currentSetIndex !== null ? randomizedQuestions : []

  if (currentSetIndex !== null) {
    if (currentQuestionIndex >= currentSet.length) {
      return (
        <SimpleWrapper
          data={{
            title: title, // Pass the variable title
            url: canonical, // Pass the canonical URL
            b1: b1, // Pass b1
            b1Link: b1Link, // Pass b1Link
            b2: paramdata, // Pass paramdata as b2
            image: image, // Pass image
            clist: clist // Pass clist
          }}
        >
          <div className="flex flex-col p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-2xl">
            <h2 className="text-5xl font-extrabold text-white mb-2 drop-shadow-lg text-center">
              Quiz Completed!
            </h2>
            <p className="text-2xl text-white mb-6 text-center">
              Your score:
              <span className="font-bold bg-white rounded-md px-4 py-2 text-blue-600 shadow-md mx-2">
                {score}
              </span>
              out of
              <span className="font-bold bg-white rounded-md px-4 py-2 text-red-600 shadow-md mx-2">
                {currentSet.length}
              </span>
            </p>

            <div className="text-white text-center mb-4">
              <p className="text-lg text-white">
                Total number of questions:
                <span className="font-semibold"> {currentSet.length}</span>
              </p>
              <p className="text-lg text-white">
                Number of answered questions:
                <span className="font-semibold"> {score}</span>
              </p>
              <p className="text-lg text-white">
                Number of unanswered questions:
                <span className="font-semibold ">
                  {" "}
                  {currentSet.length - score}
                </span>
              </p>
            </div>

            <div className="flex items-center justify-between">
              <ShareButtonQuiz score={score} className="flex-row" />
              <button
                className="mt-4 px-5 py-3 bg-white text-blue-600 rounded-lg shadow transition-transform hover:scale-110 hover:shadow-xl font-semibold"
                onClick={() => setCurrentSetIndex(null)}
              >
                Back to Sets
              </button>
            </div>
            <p className="mt-4 text-sm text-white italic">
              Great job! Keep practicing to improve your skills.
            </p>
          </div>
        </SimpleWrapper>
      )
    }

    const currentQuestion = currentSet[currentQuestionIndex]

    return (
      <SimpleWrapper
        data={{
          title: title, // Pass the variable title
          url: canonical, // Pass the canonical URL
          b1: b1, // Pass b1
          b1Link: b1Link, // Pass b1Link
          b2: paramdata, // Pass paramdata as b2
          image: image, // Pass image
          clist: clist // Pass clist
        }}
      >
        <div className="flex md:flex-row flex-col gap-2">
          <div className="flex flex-col items-start px-2">
            <ShareButtonQuiz score={score} className="md:flex-col flex-row" />
          </div>

          <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg flex-1">
            <h2 className="text-3xl font-extrabold text-white mb-3 text-center">
              Quiz Chapter 1 Set {currentSetIndex + 1}
            </h2>
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-semibold text-white text-center">
                Time Remaining:{" "}
                <span className="text-yellow-300">{timer} seconds</span>
              </p>
              <h3 className="text-xl font-semibold text-yellow-300 text-center">
                Your Score: {score}
              </h3>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg mb-4 bg-white shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                {currentQuestion.name}
              </h4>
              <ul className="space-y-3">
                {currentQuestion.options.map(
                  (option: any, optionIndex: any) => (
                    <li
                      key={optionIndex}
                      onClick={() =>
                        handleAnswer(option, currentQuestion.correctOptions)
                      }
                      className="cursor-pointer p-4 bg-blue-100 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-blue-200 hover:shadow-lg hover:scale-105"
                    >
                      {option}
                    </li>
                  )
                )}
              </ul>
            </div>

            <p className="text-sm text-gray-300 text-center mb-4">
              Question {currentQuestionIndex + 1} of {currentSet.length}
            </p>

            <div className="w-full bg-gray-200 rounded-full mt-4">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{
                  width: `${((currentQuestionIndex + 1) / currentSet.length) * 100}%`
                }}
              >
                {Math.round(
                  ((currentQuestionIndex + 1) / currentSet.length) * 100
                )}
                %
              </div>
            </div>
          </div>
        </div>
      </SimpleWrapper>
    )
  }

  return (
    <SimpleWrapper
      data={{
        title: title, // Pass the variable title
        url: canonical, // Pass the canonical URL
        b1: b1, // Pass b1
        b1Link: b1Link, // Pass b1Link
        b2: paramdata, // Pass paramdata as b2
        image: image, // Pass image
        clist: clist // Pass clist
      }}
    >
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-center text-white p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
          Select a Quiz Set to Begin
        </h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {sets.map((set, index) => (
              <button
                key={index}
                className="p-6 bg-white text-blue-600 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
                onClick={() => handleSetClick(index)}
              >
                Set {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
      {children}
    </SimpleWrapper>
  )
}

export default QuizWrapperFilter
