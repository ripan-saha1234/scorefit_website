import { useEffect, useState } from 'react'

const useCounter = (end, { duration = 1500, start = 0, enabled = true } = {}) => {
  const [value, setValue] = useState(start)

  useEffect(() => {
    if (!enabled) return undefined

    let frameId
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const next = Math.floor(start + (end - start) * progress)
      setValue(next)
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [end, duration, start, enabled])

  return value
}

export default useCounter
