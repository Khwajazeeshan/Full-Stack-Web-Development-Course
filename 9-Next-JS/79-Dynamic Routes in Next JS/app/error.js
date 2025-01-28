'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
                Try again
            </button>
        </div>
    )
}