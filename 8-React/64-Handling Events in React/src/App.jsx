import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({ email: "zeeshan", phone: "" })
  const onclick = () => {
    alert("Clicked")
  }

  const dbclick = () => {
    alert("Double Clicked")
  }

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="button">
        <button onClick={onclick}>Click me </button>
      </div>

      <div className="button">
        <button onDoubleClick={dbclick}>Double Click me </button>
      </div>

      <input type="text" name="email" value={form.email} onChange={handlechange} />
      <input type="text" name="phone" value={form.phone} onChange={handlechange} />
    </>
  )
}

export default App
