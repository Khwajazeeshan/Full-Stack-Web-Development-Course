import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <ul>
                <li><NavLink className={({ isActive }) => (isActive ? "red" : "")} to="/Home"> <h3>Home</h3></NavLink> </li>
                <li><NavLink className={({ isActive }) => (isActive ? "red" : "")} to="/About"> <h3>About</h3></NavLink> </li>
            </ul>
        </div>
    )
}

export default Navbar

