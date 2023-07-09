'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="w-full text-center">
      <h2 className="mt-6 text-red-500">Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
