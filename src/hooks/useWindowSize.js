import { useEffect, useState } from 'react'
import { isBrowser } from '../utils/helpers'

const getSize = () => ({
  width: isBrowser() ? window.innerWidth : 0,
  height: isBrowser() ? window.innerHeight : 0,
})

const useWindowSize = () => {
  const [size, setSize] = useState(getSize)

  useEffect(() => {
    const handleResize = () => setSize(getSize())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

export default useWindowSize
