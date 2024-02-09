import './App.css'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const count = useSelector((state) => state.state.quizzes)
  console.log(count)
  return (
    <>

    </>
  )
}

export default App
