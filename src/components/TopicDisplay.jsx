import React from 'react'
import { useSelector } from 'react-redux'
import HTML from "../assets/images/icon-html.svg"
import CSS from "../assets/images/icon-css.png"
import JS from "../assets/images/icon-js.svg"
import ACC from "../assets/images/icon-accessibility.svg"

function TopicDisplay({ selectedTopic }) {
    const state = useSelector((state) => state.state.quizzes)
    const darkMode = useSelector((state) => state.state.darkMode)
    console.log(selectedTopic)
  return (
    <div className='flex items-center gap-3'>
        <img className={selectedTopic === "HTML" ? "" : "hidden absolute"} src={selectedTopic === "HTML" ? HTML : null} alt={selectedTopic} />
        <img className={selectedTopic === "CSS" ? "" : "hidden absolute"} src={selectedTopic === "CSS" ? CSS : null} alt={selectedTopic} />
        <img className={selectedTopic === "JavaScript" ? "" : "hidden absolute"} src={selectedTopic === "JavaScript" ? JS : null} alt={selectedTopic} />
        <img className={selectedTopic === "Accessibility" ? "" : "hidden absolute"} src={selectedTopic === "Accessibility" ? ACC : null} alt={selectedTopic} />
        <p className={darkMode === "dark" ? "text-white font-medium text-lg" : "text-navy font-medium text-lg"}>{selectedTopic}</p>
    </div>
  )
}

export default TopicDisplay