import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counter/slice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <h3> i am a count {count}</h3>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  )
}

export default App
