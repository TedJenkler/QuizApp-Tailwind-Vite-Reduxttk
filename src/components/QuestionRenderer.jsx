import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function QuestionRenderer( {selectedTopic, selectedQ, setSelectedQ} ) {
    const state = useSelector((state) => state.state.quizzes[selectedTopic].questions[selectedQ])
    console.log(state)
    console.log(selectedQ)
    const [points, setPoints] = useState(0)
  return (
    <>
        <p>Question {selectedQ + 1} of 10</p>
        <p>{state.question}</p>
        <button onClick={(e) => {state.options[0] === state.answer ? console.log("yes") : null}} className='flex items-center gap-3 mb-6 bg-pure-white p-3'>{state.options[0]}</button>
        <button onClick={(e) => {state.options[1] === state.answer ? console.log("yes") : null}} className='flex items-center gap-3 mb-6 bg-pure-white p-3'>{state.options[1]}</button>
        <button onClick={(e) => {state.options[2] === state.answer ? console.log("yes") : null}} className='flex items-center gap-3 mb-6 bg-pure-white p-3'>{state.options[2]}</button>
        <button onClick={(e) => {state.options[3] === state.answer ? console.log("yes") : null}} className='flex items-center gap-3 mb-6 bg-pure-white p-3'>{state.options[3]}</button>
        <button onClick={(e) => {setSelectedQ(selectedQ + 1)}} className='flex items-center gap-3 mb-6 bg-pure-white p-3'>Submit Answer</button>
    </>
  )
}

export default QuestionRenderer