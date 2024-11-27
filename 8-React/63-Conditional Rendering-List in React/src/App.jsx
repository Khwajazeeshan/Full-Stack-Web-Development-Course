import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "hey",
      desc: "i am good",
    },
    {
      title: "Hello",
      desc: "i am intelligent",
    },
  ])

  const Todo = ({ todo }) => {
    return (<>
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
    </>)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* if else statement in React */}
      {showbtn ? <button>Button is true</button> : <button>Button is False</button>}

      {/* If Statement in react */}
      {/* {showbtn && <button>Button is true</button>} */}

      {/* Loop in react */}
      {todos.map(todo => {
        return <Todo key={todo.title} todo={todo} />
      })
      }

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Show Button
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
