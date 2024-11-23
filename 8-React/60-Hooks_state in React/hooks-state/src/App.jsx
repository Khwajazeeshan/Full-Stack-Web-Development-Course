import { useState } from 'react'  // Importing the useState Hook from React
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Defining the App component
function App() {
  // Declaring a state variable 'count' with an initial value of 0
  // setCount is the function to update the value of 'count'
  const [count, setCount] = useState(0)

  return (
    <>
      <div><h2>This count is {count}</h2></div>
      {/* The onClick event handler increases 'count' by 1 when the button is pressed */}
      <button onClick={() => { setCount(count + 1) }}>Update Count</button>
    </>
  )
}

// Exporting the App component so it can be used in other parts of the project
export default App
