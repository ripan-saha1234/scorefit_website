import { useEffect, useRef, useMemo } from 'react'
import { animateOnScroll } from '../animations/scrollAnimations'

/**
 * Hook that applies scroll-triggered reveal animation to a ref element.
 * Options are memoized by direction + staggerDelay to prevent infinite loops.
 */
const useScrollReveal = (direction = 'up', staggerDelay = 0) => {
  const ref = useRef(null)

  const opts = useMemo(
    () => ({ direction, staggerDelay }),
    [direction, staggerDelay],
  )

  useEffect(() => {
    if (!ref.current) return undefined
    const cleanup = animateOnScroll(ref.current, opts)
    return cleanup
  }, [opts])

  return ref
}

export default useScrollReveal
