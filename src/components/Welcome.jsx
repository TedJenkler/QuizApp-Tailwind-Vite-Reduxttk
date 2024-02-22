import React from 'react'
import { useSelector } from 'react-redux'

function Welcome() {
  const darkMode = useSelector((state) => state.state.darkMode)
  return (
    <>
        <h1 className={`${darkMode === "dark" ? "text-white" : "text-dark-navy"}`}>Welcome to the</h1>
        <h1 className={`${darkMode === "dark" ? "text-white mb-4" : "text-dark-navy mb-4"}`}>Frontend Quiz!</h1>
        <p className={`${darkMode === "dark" ? "text-light-blue mb-10 italic" : "text-dark-navy mb-10 italic"}`}>Pick a subject to get started.</p>
    </>
  )
}

export default Welcome