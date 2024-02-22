import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import a from "../assets/images/a.png"
import b from "../assets/images/b.png"
import c from "../assets/images/c.png"
import d from "../assets/images/d.png"

function QuestionRenderer( {selectedTopic, selectedQ, setSelectedQ, choice, setChoice, points, setPoints} ) {
    const state = useSelector((state) => state.state.quizzes[selectedTopic].questions[selectedQ])
    const darkMode = useSelector((state) => state.state.darkMode)
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
    <div className='lg:flex lg:gap-32'>
        <div className='lg:w-1/2' >
            <p className={`${darkMode === "dark" ? "text-light-blue italic text-sm mb-3" : "italic text-grey-navy text-sm mb-3"}`}>Question {selectedQ + 1} of 10</p>
            <p className={`${darkMode === "dark" ? "mb-6 text-xl text-white font-medium" : "mb-6 text-xl text-dark-navy font-medium"}`}>{state.question}</p>
            <div className={`${darkMode === "dark" ? "w-full h-4 bg-navy flex items-center mb-10 rounded-full" : "w-full h-4 bg-white flex items-center mb-10 rounded-full lg:w-3/4"}`}>
            <div style={{ width: `${selectedQ}0%` }} className={`${darkMode === "dark" ? "bg-purple h-2 mx-1 rounded-full" : "bg-purple h-2 mx-1 rounded-full"}`}></div>
        </div>
        </div>
        <div className='lg:w-1/2'>
            <button onClick={(e) => {setChoice(state.options[0])}} className={`${darkMode === "dark" ? "flex items-center mb-3 p-3 rounded-xl w-full focus:border-purple focus:border-4 bg-navy shadow-2xl text-white md:mb-6" : "flex items-center mb-3 bg-pure-white p-3 rounded-xl w-full focus:border-purple focus:border-4 md:mb-6"}`}><img className='mr-3' src={a} alt='a' />{state.options[0]}</button>
            <button onClick={(e) => {setChoice(state.options[1])}} className={`${darkMode === "dark" ? "flex items-center mb-3 p-3 rounded-xl w-full focus:border-purple focus:border-4 bg-navy shadow-2xl text-white md:mb-6" : "flex items-center mb-3 bg-pure-white p-3 rounded-xl w-full focus:border-purple focus:border-4 md:mb-6"}`}><img className='mr-3' src={b} alt='b' />{state.options[1]}</button>
            <button onClick={(e) => {setChoice(state.options[2])}} className={`${darkMode === "dark" ? "flex items-center mb-3 p-3 rounded-xl w-full focus:border-purple focus:border-4 bg-navy shadow-2xl text-white md:mb-6" : "flex items-center mb-3 bg-pure-white p-3 rounded-xl w-full focus:border-purple focus:border-4 md:mb-6"}`}><img className='mr-3' src={c} alt='c' />{state.options[2]}</button>
            <button onClick={(e) => {setChoice(state.options[3])}} className={`${darkMode === "dark" ? "flex items-center mb-3 p-3 rounded-xl w-full focus:border-purple focus:border-4 bg-navy shadow-2xl text-white md:mb-8" : "flex items-center mb-3 bg-pure-white p-3 rounded-xl w-full focus:border-purple focus:border-4 md:mb-8"}`}><img className='mr-3' src={d} alt='d' />{state.options[3]}</button>
            <button onClick={checkIfRight} className='text-lg flex items-center gap-3 mb-6 bg-purple text-white p-3 rounded-xl w-full justify-center font-medium'>Submit Answer</button>
        </div>
    </div>
  )
}

export default QuestionRenderer