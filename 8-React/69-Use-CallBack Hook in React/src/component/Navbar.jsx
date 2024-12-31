import React from 'react'
import { memo } from 'react'

const Navbar = ({ adjective, getAdjective }) => {
    return (
        console.log("navbar is rereendering"),
        <div>
            i am a {adjective} Navbar
            <button onClick={() => getAdjective()}>{getAdjective()}</button>
        </div>
    )
}

export default memo(Navbar)
