import { gsap, ScrollTrigger } from './gsapConfig'

export const applyParallax = (selector, speed = 0.25) => {
  const elements = gsap.utils.toArray(selector)
  if (!elements.length) return () => {}

  const tweens = elements.map((element) =>
    gsap.to(element, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    }),
  )

  return () => {
    tweens.forEach((tween) => tween.kill())
    ScrollTrigger.getAll().forEach((trigger) => {
      if (elements.includes(trigger.trigger)) trigger.kill()
    })
  }
}
