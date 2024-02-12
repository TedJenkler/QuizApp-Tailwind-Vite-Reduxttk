import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function QuestionRenderer( {selectedTopic, selectedQ, setSelectedQ, choice, setChoice, points, setPoints} ) {
    const state = useSelector((state) => state.state.quizzes[selectedTopic].questions[selectedQ])
    const checkIfRight = () => {
        if(choice === state.answer){
            setPoints(points + 1)
            setSelectedQ(selectedQ + 1)
        }
        else {
            setSelectedQ(selectedQ + 1)
        }
    }
  return (
    <>
        <p>Question {selectedQ + 1} of 10</p>
        <p className='mb-10'>{state.question}</p>
        <button onClick={(e) => {setChoice(state.options[0])}} className='flex items-center gap-3 mb-6 bg-pure-white p-3 rounded-xl'>{state.options[0]}</button>
        <button onClick={(e) => {setChoice(state.options[1])}} className='flex items-center gap-3 mb-6 bg-pure-white p-3 rounded-xl'>{state.options[1]}</button>
        <button onClick={(e) => {setChoice(state.options[2])}} className='flex items-center gap-3 mb-6 bg-pure-white p-3 rounded-xl'>{state.options[2]}</button>
        <button onClick={(e) => {setChoice(state.options[3])}} className='flex items-center gap-3 mb-6 bg-pure-white p-3 rounded-xl'>{state.options[3]}</button>
        <button onClick={checkIfRight} className='flex items-center gap-3 mb-6 bg-purple text-white p-3 rounded-xl'>Submit Answer</button>
    </>
  )
}

export default QuestionRenderer