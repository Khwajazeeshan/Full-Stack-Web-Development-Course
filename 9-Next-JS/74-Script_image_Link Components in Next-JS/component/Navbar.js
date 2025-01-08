import React from 'react'
import Link from 'next/link' //using link component 

const Navbar = () => {
    return (
        <div>
            <ul>
                <li ><Link href="./home">Home</Link></li>
                <li><Link href="./about">About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
