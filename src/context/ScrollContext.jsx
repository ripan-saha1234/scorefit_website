/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getScrollY } from '../utils/scroll'

const ScrollContext = createContext(null)

export const ScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const [direction, setDirection] = useState('down')

  useEffect(() => {
    let lastY = getScrollY()

    const onScroll = () => {
      const currentY = getScrollY()
      setDirection(currentY > lastY ? 'down' : 'up')
      setScrollY(currentY)
      lastY = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const value = useMemo(
    () => ({
      scrollY,
      direction,
      isScrolled: scrollY > 24,
    }),
    [scrollY, direction],
  )

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

export const useScroll = () => {
  const context = useContext(ScrollContext)
  if (!context) throw new Error('useScroll must be used within ScrollProvider')
  return context
}

export default ScrollContext
