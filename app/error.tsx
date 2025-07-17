'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h2 className="text-lg">Something went wrong!</h2>
        <button onClick={() => reset()} className="mt-4 p-2 bg-red-500 text-white rounded">
          Try again
        </button>
      </div>
    </div>
  )
}