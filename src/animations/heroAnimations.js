import { gsap } from './gsapConfig'

/**
 * Animates the hero section elements in a staggered sequence.
 * Uses gsap.set() first to prevent flash of invisible content,
 * then gsap.to() for the actual animation.
 */
export const animateHero = (scope) => {
  if (!scope) return () => {}

  const brand = scope.querySelector('[data-hero-brand]')
  const title = scope.querySelector('[data-hero-title]')
  const copy = scope.querySelector('[data-hero-copy]')
  const cta = scope.querySelector('[data-hero-cta]')
  const stats = scope.querySelectorAll('[data-hero-stat]')
  const decorLine = scope.querySelector('[data-hero-decor]')

  const targets = [brand, title, copy, cta].filter(Boolean)

  // Set initial invisible state immediately
  gsap.set(targets, { y: 40, opacity: 0 })
  if (stats.length) gsap.set(stats, { y: 20, opacity: 0, scale: 0.9 })
  if (decorLine) gsap.set(decorLine, { scaleX: 0, transformOrigin: 'left center' })

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    delay: 0.15,
  })

  // Staggered reveals
  if (brand) tl.to(brand, { y: 0, opacity: 1, duration: 0.7 })
  if (title) tl.to(title, { y: 0, opacity: 1, duration: 0.9 }, '-=0.35')
  if (copy)  tl.to(copy, { y: 0, opacity: 1, duration: 0.65 }, '-=0.4')
  if (cta)   tl.to(cta, { y: 0, opacity: 1, duration: 0.55 }, '-=0.3')

  if (stats.length) {
    tl.to(stats, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.4)',
    }, '-=0.3')
  }

  if (decorLine) {
    tl.to(decorLine, { scaleX: 1, duration: 0.7 }, '-=0.5')
  }

  return () => tl.kill()
}
