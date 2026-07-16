import { SCROLL_OFFSET } from './constants'
import { isBrowser } from './helpers'

export const getScrollY = () => (isBrowser() ? window.scrollY : 0)

export const scrollToElement = (selector, offset = SCROLL_OFFSET) => {
  if (!isBrowser()) return

  const element = document.querySelector(selector)
  if (!element) return

  const top = element.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export const prefersReducedMotion = () => {
  if (!isBrowser()) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
