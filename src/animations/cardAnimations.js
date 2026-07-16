import { createTimeline, gsap } from './gsapConfig'

export const animateCards = (selector, options = {}) => {
  const cards = gsap.utils.toArray(selector)
  if (!cards.length) return () => {}

  const timeline = createTimeline({
    scrollTrigger: {
      trigger: cards[0].parentElement,
      start: 'top 80%',
      ...options.scrollTrigger,
    },
  })

  timeline.from(cards, {
    y: 36,
    opacity: 0,
    stagger: 0.12,
    duration: 0.7,
    ...options,
  })

  return () => timeline.kill()
}
