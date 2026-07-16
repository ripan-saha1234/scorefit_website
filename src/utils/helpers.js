export const cn = (...classes) => classes.filter(Boolean).join(' ')

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export const isBrowser = () => typeof window !== 'undefined'

export const scrollToTop = (behavior = 'smooth') => {
  if (!isBrowser()) return
  window.scrollTo({ top: 0, behavior })
}

export const getInitials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
