import React from 'react'
import Button from './Button'
const Navbar = ({ count }) => {
    return (
        <div>
            Navbar count={count}
            <Button count={count} />
        </div>
    )
}

export default Navbar
