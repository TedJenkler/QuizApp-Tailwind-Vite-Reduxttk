import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function QuizDisplay() {
    const [selectedTopic, setSelectedTopic] = useState("")
    console.log(selectedTopic)
    const state = useSelector((state) => state.state.quizzes)
  return (
    <main className='pt-8 px-6 bg-lightbg'>
        <h1 className='text-dark-navy'>Welcome to the</h1>
        <h1 className='font-bold mb-4 text-dark-navy'>Frontend Quiz!</h1>
        <p className='text-grey-navy mb-10'>Pick a subject to get started.</p>
        {state.map((state) => {
            console.log(state)
            return (
                <div key={state.title} className='flex flex-col'>
                    <button className='flex items-center gap-3 mb-6 bg-pure-white p-3' onClick={(e) => {setSelectedTopic(state.title)}}><img src={`${state.icon}`} />{state.title}</button>
                </div>
            )
        })
        }
    </main>
  )
}

export default QuizDisplay