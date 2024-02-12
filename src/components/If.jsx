import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import QuestionRenderer from './QuestionRenderer'
import TotalScore from './TotalScore'

function If( {selectedTopic, setSelectedTopic} ) {
  const state = useSelector((state) => state.state.quizzes[selectedTopic].questions)
  const [selectedQ, setSelectedQ] = useState(0)
  const [choice, setChoice] = useState("")
  const [points, setPoints] = useState(0)
  return (
    <>
    {selectedQ === 0 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} choice={choice} setChoice={setChoice} points={points} setPoints={setPoints} /> : null}
    {selectedQ === 1 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} choice={choice} setChoice={setChoice} points={points} setPoints={setPoints} /> : null}
    {selectedQ === 2 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} choice={choice} setChoice={setChoice} points={points} setPoints={setPoints} /> : null}
    {selectedQ === 3 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} choice={choice} setChoice={setChoice} points={points} setPoints={setPoints} /> : null}
    {selectedQ === 4 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} choice={choice} setChoice={setChoice} points={points} setPoints={setPoints} /> : null}
    {selectedQ === 5 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} choice={choice} setChoice={setChoice} points={points} setPoints={setPoints} /> : null}
    {selectedQ === 6 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} choice={choice} setChoice={setChoice} points={points} setPoints={setPoints} /> : null}
    {selectedQ === 7 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} choice={choice} setChoice={setChoice} points={points} setPoints={setPoints} /> : null}
    {selectedQ === 8 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} choice={choice} setChoice={setChoice} points={points} setPoints={setPoints} /> : null}
    {selectedQ === 9 ? <QuestionRenderer selectedTopic={selectedTopic} selectedQ={selectedQ} setSelectedQ={setSelectedQ} choice={choice} setChoice={setChoice} points={points} setPoints={setPoints} /> : null}
    {selectedQ > 9 ? <TotalScore points={points} selectedTopic={selectedTopic} setSelectedQ={setSelectedQ} setPoints={setPoints} setSelectedTopic={setSelectedTopic} /> : null}
    </>
  )
}

export default If