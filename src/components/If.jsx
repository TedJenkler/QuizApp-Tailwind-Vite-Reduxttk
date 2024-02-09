import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import QuestionRenderer from './QuestionRenderer'

function If( {selectedTopic} ) {
  const state = useSelector((state) => state.state.quizzes[selectedTopic].questions)
  console.log(state)
  const [selectedQ, setSelectedQ] = useState(0)
  return (
    <>
    {selectedQ === 0 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} /> : null}
    {selectedQ === 1 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} /> : null}
    {selectedQ === 2 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} /> : null}
    {selectedQ === 3 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} /> : null}
    {selectedQ === 4 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} /> : null}
    {selectedQ === 5 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} /> : null}
    {selectedQ === 6 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} /> : null}
    {selectedQ === 7 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} /> : null}
    {selectedQ === 8 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} /> : null}
    {selectedQ === 9 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} /> : null}
    </>
  )
}

export default If