import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    const a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let obj = await a.json()
    setCards(obj)
    console.log(obj)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Navbar />

      <div className="container">
        {cards.map((card) => {
          return <div key={card.id} className="cards">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By: User Id {card.userId}</span>
          </div>
        })}
      </div>
      
      <Footer />
    </>
  )
}

export default App