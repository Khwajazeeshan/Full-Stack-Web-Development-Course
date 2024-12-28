import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../Context/context'

const Button = () => {
    const context = useContext(counterContext)
    return (
        <div>
            <button>i am a button <span>{context}</span></button>
        </div>
    )
}

export default Button
