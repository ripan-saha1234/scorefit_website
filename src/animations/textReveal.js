import { createTimeline, gsap } from './gsapConfig'

export const revealText = (targets, options = {}) => {
  const elements = gsap.utils.toArray(targets)
  if (!elements.length) return () => {}

  const timeline = createTimeline({
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 85%',
      ...options.scrollTrigger,
    },
  })

  timeline.from(elements, {
    y: 28,
    opacity: 0,
    stagger: 0.08,
    duration: 0.7,
    ...options,
  })

  return () => timeline.kill()
}
