import React from 'react'
import { useSelector } from 'react-redux'

function TotalScore( {points, selectedTopic, setSelectedQ, setPoints, setSelectedTopic} ) {
    const state = useSelector((state) => state.state.quizzes)
    const reset = () => {
        setSelectedTopic("")
        setPoints(0)
        setSelectedQ(0)
    }
  return (
    <div>
        <h1 className='text-dark-navy'>Quiz completed</h1>
        <h1 className='font-bold mb-4 text-dark-navy'>You scored...</h1>
        <div className='bg-white rounded-xl p-8 flex flex-col items-center mb-3'>
            <div className='flex items-center mb-4'>
                <img className='pr-3' src={`${state[selectedTopic].icon}`} />
                <p className='text-lg font-medium text-dark-navy'>{state[selectedTopic].title}</p>
            </div>
            <p className='text-8xl font-medium mb-4 text-dark-navy'>{points}</p>
            <p className='text-grey-navy font-medium text-lg'>out of 10</p>
        </div>
        <button onClick={reset} className='flex items-center gap-3 mb-6 bg-purple text-white p-3 rounded-xl w-full justify-center font-medium'>Play Again</button>
    </div>
  )
}

export default TotalScore