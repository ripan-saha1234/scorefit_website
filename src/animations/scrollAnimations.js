import { gsap, ScrollTrigger } from './gsapConfig'

/**
 * Creates scroll-triggered reveal animations for elements.
 * Supports multiple animation variants.
 */
export const animateOnScroll = (elements, vars = {}) => {
  const targets = gsap.utils.toArray(elements)
  if (!targets.length) return () => {}

  const triggers = targets.map((el, i) => {
    const direction = vars.direction || 'up'

    const fromVars = {
      up:    { y: 50, opacity: 0 },
      down:  { y: -50, opacity: 0 },
      left:  { x: -50, opacity: 0 },
      right: { x: 50, opacity: 0 },
      scale: { scale: 0.88, opacity: 0 },
      fade:  { opacity: 0 },
    }

    const initial = fromVars[direction] || fromVars.up

    gsap.set(el, initial)

    return gsap.to(el, {
      ...Object.fromEntries(Object.keys(initial).map((k) => [k, k === 'opacity' ? 1 : k === 'scale' ? 1 : 0])),
      duration: vars.duration || 0.8,
      delay: (vars.staggerDelay || 0.1) * i,
      ease: vars.ease || 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: vars.start || 'top 88%',
        end: vars.end || 'bottom 20%',
        toggleActions: 'play none none none',
        once: true,
        ...vars.scrollTrigger,
      },
    })
  })

  return () => {
    triggers.forEach((t) => {
      t.scrollTrigger?.kill()
      t.kill()
    })
  }
}

/**
 * Animate cards with staggered scroll reveals
 */
export const animateCards = (selector, options = {}) => {
  const cards = gsap.utils.toArray(selector)
  if (!cards.length) return () => {}

  gsap.set(cards, { y: 48, opacity: 0 })

  const trigger = ScrollTrigger.create({
    trigger: cards[0]?.parentElement || cards[0],
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.75,
        ease: 'power3.out',
        ...options,
      })
    },
    ...options.scrollTrigger,
  })

  return () => {
    trigger.kill()
  }
}
