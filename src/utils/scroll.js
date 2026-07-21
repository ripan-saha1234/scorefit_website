import { SCROLL_OFFSET, DOWNLOAD_SECTION_ID } from './constants'
import { isBrowser } from './helpers'

export const getScrollY = () => (isBrowser() ? window.scrollY : 0)

const scrollToTarget = (element, offset = SCROLL_OFFSET) => {
  if (!element || !isBrowser()) return

  const lenis = window.__lenis
  if (lenis?.scrollTo) {
    lenis.scrollTo(element, {
      offset: -offset,
      duration: prefersReducedMotion() ? 0 : 1.2,
    })
    return
  }

  const top = element.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({
    top,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })
}

export const scrollToElement = (selector, offset = SCROLL_OFFSET) => {
  if (!isBrowser()) return
  scrollToTarget(document.querySelector(selector), offset)
}

export const scrollToDownload = () => {
  if (!isBrowser()) return
  scrollToTarget(document.getElementById(DOWNLOAD_SECTION_ID))
}

export const prefersReducedMotion = () => {
  if (!isBrowser()) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const isMobileViewport = () => {
  if (!isBrowser()) return false
  return window.matchMedia('(max-width: 640px)').matches
}
