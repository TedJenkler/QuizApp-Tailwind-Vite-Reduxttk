import React from 'react'
import { useSelector } from 'react-redux'

function QuizDisplay() {
    const state = useSelector((state) => state.state.quizzes)
  return (
    <main className='pt-8 px-6'>
        <h1 className='text-dark-navy'>Welcome to the</h1>
        <h1 className='font-bold mb-4 text-dark-navy'>Frontend Quiz!</h1>
        <p className='text-grey-navy mb-10'>Pick a subject to get started.</p>
        {state.map((state) => {
            console.log(state)
            return (
                <div className='flex flex-col'>
                    <button><img src={`${state.icon}`} />{state.title}</button>
                </div>
            )
        })
        }
    </main>
  )
}

export default QuizDisplay