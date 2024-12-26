import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /></>, // Default route
    },
    {
      path: '/home',
      element: <><Navbar /><Home /></>
    },
    {
      path: '/about',
      element: <><Navbar /><About /></>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App