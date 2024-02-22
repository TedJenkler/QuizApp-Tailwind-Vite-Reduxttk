import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import a from "../assets/images/A.svg"
import b from "../assets/images/B.svg"
import c from "../assets/images/C.svg"
import d from "../assets/images/D.svg"
import right from "../assets/images/right-answer.svg"
import wrong from "../assets/images/wrong-answer.svg"

function QuestionRenderer( {selectedTopic, selectedQ, setSelectedQ, choice, setChoice, points, setPoints} ) {
    const state = useSelector((state) => state.state.quizzes[selectedTopic].questions[selectedQ])
    const darkMode = useSelector((state) => state.state.darkMode)
    console.log(choice)
    const [submited, setSubmited] = useState(false)
    const [alert, setAlert] = useState(false)
    const checkIfRight = () => {
        if(choice === state.answer && choice !== ""){
            setPoints(points + 1)
            setAlert(false)
            setSubmited(true)
        }
        else if(choice !== "") {
            setAlert(false)
            setSubmited(true)
        }
        else {
            setAlert(true)
        }
    }

    const sendToNext = () => {
        setChoice("")
        setSelectedQ(selectedQ + 1)
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
            <button onClick={(e) => {submited === false ? setChoice(state.options[0]): null}} className={`${darkMode === "dark" ? "flex items-center mb-3 justify-between p-3 rounded-xl w-full focus:border-purple focus:border-4 bg-navy shadow-2xl text-white md:mb-6" : "flex items-center justify-between mb-3 bg-pure-white p-3 rounded-xl w-full focus:border-purple focus:border-4 md:mb-6"}`}><div className='flex items-center'><img className={choice === state.answer && choice === state.options[0] && submited === true ? 'mr-3 bg-green p-2 rounded' : choice !== state.answer && choice === state.options[0] && submited === true ? 'mr-3 bg-red p-2 rounded' : 'mr-3 bg-white p-2 rounded'} src={a} alt='a' />{state.options[0]}</div>{choice === state.answer && choice === state.options[0] && submited === true ? <img src={right} alt='right answer' /> : null}{choice !== state.answer && choice === state.options[0] && submited === true ? <img src={wrong} alt='wrong answer' /> : null}</button>
            <button onClick={(e) => {submited === false ? setChoice(state.options[1]): null}} className={`${darkMode === "dark" ? "flex items-center mb-3 justify-between p-3 rounded-xl w-full focus:border-purple focus:border-4 bg-navy shadow-2xl text-white md:mb-6" : "flex items-center justify-between mb-3 bg-pure-white p-3 rounded-xl w-full focus:border-purple focus:border-4 md:mb-6"}`}><div className='flex items-center'><img className={choice === state.answer && choice === state.options[1] && submited === true ? 'mr-3 bg-green p-2 rounded' : choice !== state.answer && choice === state.options[1] && submited === true ? 'mr-3 bg-red p-2 rounded' : 'mr-3 bg-white p-2 rounded' } src={b} alt='b' />{state.options[1]}</div>{choice === state.answer && choice === state.options[1] && submited === true ? <img src={right} alt='right answer' /> : null}{choice !== state.answer && choice === state.options[1] && submited === true ? <img src={wrong} alt='wrong answer' /> : null}</button>
            <button onClick={(e) => {submited === false ? setChoice(state.options[2]): null}} className={`${darkMode === "dark" ? "flex items-center mb-3 justify-between p-3 rounded-xl w-full focus:border-purple focus:border-4 bg-navy shadow-2xl text-white md:mb-6" : "flex items-center justify-between mb-3 bg-pure-white p-3 rounded-xl w-full focus:border-purple focus:border-4 md:mb-6"}`}><div className='flex items-center'><img className={choice === state.answer && choice === state.options[2] && submited === true ? 'mr-3 bg-green p-2 rounded' : choice !== state.answer && choice === state.options[2] && submited === true ? 'mr-3 bg-red p-2 rounded' : 'mr-3 bg-white p-2 rounded' } src={c} alt='c' />{state.options[2]}</div>{choice === state.answer && choice === state.options[2] && submited === true ? <img src={right} alt='right answer' /> : null}{choice !== state.answer && choice === state.options[2] && submited === true ? <img src={wrong} alt='wrong answer' /> : null}</button>
            <button onClick={(e) => {submited === false ? setChoice(state.options[3]): null}} className={`${darkMode === "dark" ? "flex items-center mb-3 justify-between p-3 rounded-xl w-full focus:border-purple focus:border-4 bg-navy shadow-2xl text-white md:mb-8" : "flex items-center justify-between mb-3 bg-pure-white p-3 rounded-xl w-full focus:border-purple focus:border-4 md:mb-8"}`}><div className='flex items-center'><img className={choice === state.answer && choice === state.options[3] && submited === true ? 'mr-3 bg-green p-2 rounded' : choice !== state.answer && choice === state.options[3] && submited === true ? 'mr-3 bg-red p-2 rounded' : 'mr-3 bg-white p-2 rounded' } src={d} alt='d' />{state.options[3]}</div>{choice === state.answer && choice === state.options[3] && submited === true ? <img src={right} alt='right answer' /> : null}{choice !== state.answer && choice === state.options[3] && submited === true ? <img src={wrong} alt='wrong answer' /> : null}</button>
            {submited === false ? <button onClick={checkIfRight} className='text-lg flex items-center gap-3 mb-6 bg-purple text-white p-3 rounded-xl w-full justify-center font-medium'>Submit Answer</button> 
            : <button className='text-lg flex items-center gap-3 mb-6 bg-purple text-white p-3 rounded-xl w-full justify-center font-medium' onClick={sendToNext}>Next Question</button> }
        </div>
        {alert === true ? <p>Please select an answer</p> : null}
    </div>
  )
}

export default QuestionRenderer