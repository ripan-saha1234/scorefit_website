import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../utils/scroll'

gsap.registerPlugin(ScrollTrigger)

export const gsapDefaults = {
  ease: 'power3.out',
  duration: 0.85,
}

export const createTimeline = (vars = {}) => {
  if (prefersReducedMotion()) {
    return gsap.timeline({ ...vars, duration: 0 })
  }
  return gsap.timeline({ defaults: gsapDefaults, ...vars })
}

/**
 * Refresh ScrollTrigger — call after layout changes or route transitions
 */
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh()
}

/**
 * Kill all ScrollTrigger instances — call on unmount
 */
export const killAllScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((t) => t.kill())
}

export { gsap, ScrollTrigger }
