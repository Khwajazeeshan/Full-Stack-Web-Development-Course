import { useState } from 'react'
import './App.css'
import Navbar from './Without-Context/Navbar'
import Navbar1 from './With-Context/Navbar1'
import { counterContext } from './Context/context'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Without Context.................................... */}
      <div className="box1">
        <h1>Without Use-Context...................</h1>
        <Navbar count={count} />
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>

      {/* With Context...................................... */}
      <div className="box2">
        <h1>Using Use-Context...................</h1>
        <counterContext.Provider value={count}>
          <Navbar1 />
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </counterContext.Provider>
      </div>
    </div>
  )
}

export default App
