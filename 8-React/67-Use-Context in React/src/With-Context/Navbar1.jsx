import React from 'react'
import Button from './Button1'
import { useContext } from 'react'
import { counterContext } from '../Context/context'

const Navbar = () => {
    const context = useContext(counterContext)
    return (
        <div>
            Navbar{context}
            <Button />
        </div>
    )
}

export default Navbar
