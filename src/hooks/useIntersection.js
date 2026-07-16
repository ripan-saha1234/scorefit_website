import { useEffect, useRef, useState } from 'react'

const useIntersection = (options = { threshold: 0.2 }) => {
  const ref = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return { ref, isIntersecting }
}

export default useIntersection
