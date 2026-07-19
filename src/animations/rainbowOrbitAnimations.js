import { gsap } from './gsapConfig'
import { prefersReducedMotion } from '../utils/scroll'

/**
 * Scroll-driven rainbow orbit — sticky stage, ring turns with scroll.
 */
export const animateRainbowOrbit = (scope) => {
  if (!scope) return () => {}

  const ring = scope.querySelector('[data-rainbow-ring]')
  if (!ring) return () => {}

  if (prefersReducedMotion()) {
    gsap.set(ring, { rotate: 0 })
    return () => {}
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scope,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.45,
      invalidateOnRefresh: true,
    },
  })

  tl.fromTo(ring, { rotate: -34 }, { rotate: 34, ease: 'none' })

  const trigger = tl.scrollTrigger

  return () => {
    trigger?.kill()
    tl.kill()
  }
}
