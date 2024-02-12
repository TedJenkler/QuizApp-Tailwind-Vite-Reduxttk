import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import QuizDisplay from './components/QuizDisplay'

function App() {
  const count = useSelector((state) => state.state.quizzes)
  return (
    <>
      <QuizDisplay />
    </>
  )
}

export default App
