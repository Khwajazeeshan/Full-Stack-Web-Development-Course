"use client"
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='Container'>
                hey, i am about page....
                {/* when we use "global" syntax in style tag , then this style apply in all same name clases... */}
                <style jsx>
                    {`
                .Container {
                    background-color: orange;
                    color:gray;
                }
            `}
                </style>
            </div>
            <div className='Container'>
                hey, i am another container....
            </div>
        </div>
    )
}

export default page
