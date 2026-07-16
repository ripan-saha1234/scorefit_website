import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../animations/gsapConfig'
import { prefersReducedMotion } from '../utils/scroll'

const useLenis = (options = {}) => {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const ticker = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    // Refresh after layout settles (images / fonts)
    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 400)

    return () => {
      window.clearTimeout(refreshId)
      lenis.off('scroll', ScrollTrigger.update)
      gsap.ticker.remove(ticker)
      lenis.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useLenis
