import { useEffect, useRef } from 'react'
import { gsap } from '../animations/gsapConfig'

const useGSAPAnimation = (animationFn, deps = []) => {
  const scopeRef = useRef(null)

  useEffect(() => {
    if (!scopeRef.current || typeof animationFn !== 'function') return undefined

    const ctx = gsap.context(() => {
      animationFn(scopeRef.current)
    }, scopeRef)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return scopeRef
}

export default useGSAPAnimation
