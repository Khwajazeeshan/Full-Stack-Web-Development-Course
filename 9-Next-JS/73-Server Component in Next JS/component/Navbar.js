"use client" //use this syntax for client side.......
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Count is {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>in Next Js, we use a "use client" syntax for client side.......</p>
        </div>
    )
}

export default Navbar
