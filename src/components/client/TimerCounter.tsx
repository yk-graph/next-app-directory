'use client'

import { useEffect, useState } from 'react'

export default function TimerCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('TimerCounter mounted!!!')

    const timer = setInterval(() => {
      setCount((precCount) => precCount + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <p> {count}</p>
      <button
        className="font-sm my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700"
        onClick={() => setCount(0)}
      >
        reset
      </button>
    </div>
  )
}
