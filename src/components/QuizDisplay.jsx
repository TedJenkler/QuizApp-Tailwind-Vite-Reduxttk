import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Welcome from './Welcome'
import If from './If'
import DarkModeSwitch from './DarkModeSwitch'

function QuizDisplay() {
    const [selectedTopic, setSelectedTopic] = useState("")
    const state = useSelector((state) => state.state.quizzes)
    const darkMode = useSelector((state) => state.state.darkMode)

  console.log(darkMode)

  return (
    <main className={`pt-8 px-6 bg-lightbg ${darkMode === "dark" ? "bg-navy" : "bg-lightbg"} h-full pb-32`}>
      <DarkModeSwitch />
        {selectedTopic === "" ? <Welcome /> : null}
        {selectedTopic === "HTML" ? <If selectedTopic={0} setSelectedTopic={setSelectedTopic} /> : null}
        {selectedTopic === "CSS" ? <If selectedTopic={1} setSelectedTopic={setSelectedTopic} /> : null}
        {selectedTopic === "JavaScript" ? <If selectedTopic={2} setSelectedTopic={setSelectedTopic} /> : null}
        {selectedTopic === "Accessibility" ? <If selectedTopic={3} setSelectedTopic={setSelectedTopic} /> : null}
        {selectedTopic === "" ? state.map((state) => {
            return (
                <div key={state.title} className='flex flex-col'>
                    <button className={`${darkMode === "dark" ? "flex items-center mb-3 bg-navy shadow-2xl text-white p-3 rounded-xl font-bold" : "flex items-center mb-3 bg-pure-white p-3 rounded-xl font-bold"}`} onClick={(e) => {setSelectedTopic(state.title)}}><img className='pr-3' src={`${state.icon}`} />{state.title}</button>
                </div>
            )
        })
       : null }
    </main>
  )
}

export default QuizDisplay