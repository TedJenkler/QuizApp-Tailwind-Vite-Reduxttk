import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Welcome from './Welcome'
import If from './If'

function QuizDisplay() {
    const [selectedTopic, setSelectedTopic] = useState("")
    console.log(selectedTopic)
    const state = useSelector((state) => state.state.quizzes)
  return (
    <main className='pt-8 px-6 bg-lightbg h-screen'>
        {selectedTopic === "" ? <Welcome /> : null}
        {selectedTopic === "HTML" ? <If selectedTopic={0} setSelectedTopic={setSelectedTopic} /> : null}
        {selectedTopic === "CSS" ? <If selectedTopic={1} setSelectedTopic={setSelectedTopic} /> : null}
        {selectedTopic === "JavaScript" ? <If selectedTopic={2} setSelectedTopic={setSelectedTopic} /> : null}
        {selectedTopic === "Accessibility" ? <If selectedTopic={3} setSelectedTopic={setSelectedTopic} /> : null}
        {selectedTopic === "" ? state.map((state) => {
            return (
                <div key={state.title} className='flex flex-col'>
                    <button className='flex items-center mb-3 bg-pure-white p-3 rounded-xl font-bold' onClick={(e) => {setSelectedTopic(state.title)}}><img className='pr-3' src={`${state.icon}`} />{state.title}</button>
                </div>
            )
        })
       : null }
    </main>
  )
}

export default QuizDisplay