import React from 'react'
import "./Card.css"
const card = (props) => {
    return (

        <div className='card'>
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-o7AR3RA_0r0YUHer7LDr7Tw0WR-uAOHMdQ&s" alt="" />
            </div>
            <h1>{props.title}</h1>
        </div>


    )
}

export default card
