import { gsap } from './gsapConfig'

export const pageEnter = (element) => {
  if (!element) return
  gsap.fromTo(
    element,
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
  )
}

export const pageExit = (element) => {
  if (!element) return
  return gsap.to(element, { opacity: 0, y: -12, duration: 0.3, ease: 'power2.in' })
}
