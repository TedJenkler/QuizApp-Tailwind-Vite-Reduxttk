import React from 'react'
import { useSelector } from 'react-redux'

function TotalScore( {points, selectedTopic, setSelectedQ, setPoints, setSelectedTopic} ) {
    const state = useSelector((state) => state.state.quizzes)
    console.log(state)
    const reset = () => {
        setSelectedTopic("")
        setPoints(0)
        setSelectedQ(0)
    }
  return (
    <div>
        <h1 className='text-dark-navy'>Quiz completed</h1>
        <h1 className='font-bold mb-4 text-dark-navy'>You scored...</h1>
        <div>
            <p>{state[selectedTopic].title}</p>
            <p>{points}</p>
            <p>out of 10</p>
            <button onClick={reset} className='flex items-center gap-3 mb-6 bg-purple text-white p-3 rounded-xl'>Play Again</button>
        </div>
    </div>
  )
}

export default TotalScore