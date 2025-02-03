"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const page = () => {
    const params = useParams()
    const router = useRouter()
    return (
        <div>
            <h1>Hey, I am {params.slug}</h1>
            <div>
                <br />
                <button
                    type="button" onClick={() => router.push('/About')}>Click me
                </button>
            </div>
        </div>
    )
}

export default page
