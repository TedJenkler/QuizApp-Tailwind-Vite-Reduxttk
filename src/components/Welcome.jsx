import React from 'react'
import { useSelector } from 'react-redux'

function Welcome() {
  const darkMode = useSelector((state) => state.state.darkMode)
  return (
    <>
        <h1 className={`${darkMode === "dark" ? "text-white font-light" : "text-dark-navy font-light"}`}>Welcome to the</h1>
        <h1 className={`${darkMode === "dark" ? "text-white mb-4 font-medium" : "text-dark-navy mb-4 font-medium"}`}>Frontend Quiz!</h1>
        <p className={`${darkMode === "dark" ? "text-light-blue mb-10 italic text-sm md:mb-16" : "text-dark-navy mb-10 italic text-sm md:mb-16"}`}>Pick a subject to get started.</p>
    </>
  )
}

export default Welcome