import React from 'react'
import Book from './book'
import Chapter from './chapter'
import Class from './class'
import Topic from './topic'
import Catgeory from './catgeory'
import Subcatgeory from './subcatgeory'
import Items from './item'

const MainSelect: React.FC<any> = ({
  selectedOption1,
  setSelectedOption1,
  selectedOption2,
  setSelectedOption2,
  selectedOption3,
  setSelectedOption3,
  selectedOption4,
  setSelectedOption4,
  selectedOption5,
  setSelectedOption5,
  selectedOption6,
  setSelectedOption6,
  selectedOption7,
  setSelectedOption7,
}) => {
  return (
    <div>
      <Class
        selectedOption1={selectedOption1}
        setSelectedOption1={setSelectedOption1}
      />
      <Book
        selectedOption1={selectedOption1}
        selectedOption2={selectedOption2}
        setSelectedOption2={setSelectedOption2}
      />

      <Chapter
        selectedOption1={selectedOption1}
        selectedOption2={selectedOption2}
        selectedOption3={selectedOption3}
        setSelectedOption3={setSelectedOption3}
      />

      <Topic
        selectedOption1={selectedOption1}
        selectedOption2={selectedOption2}
        selectedOption3={selectedOption3}
        selectedOption4={selectedOption4}
        setSelectedOption4={setSelectedOption4}
      />

      <Catgeory
        selectedOption5={selectedOption5}
        selectedOption2={selectedOption2}
        setSelectedOption5={setSelectedOption5}
      />
      <Subcatgeory
        selectedOption2={selectedOption2}
        selectedOption5={selectedOption5}
        selectedOption6={selectedOption6}
        setSelectedOption6={setSelectedOption6}
      />
      <Items
        selectedOption7={selectedOption7}
        setSelectedOption7={setSelectedOption7}
      />
    </div>
  )
}

export default MainSelect
