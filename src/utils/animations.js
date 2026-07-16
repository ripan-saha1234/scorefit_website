import { ANIMATION_DURATION } from './constants'

export const fadeUp = {
  opacity: 0,
  y: 40,
  duration: ANIMATION_DURATION.NORMAL,
  ease: 'power3.out',
}

export const fadeIn = {
  opacity: 0,
  duration: ANIMATION_DURATION.NORMAL,
  ease: 'power2.out',
}

export const staggerChildren = (stagger = 0.12) => ({
  stagger,
  ease: 'power3.out',
})
