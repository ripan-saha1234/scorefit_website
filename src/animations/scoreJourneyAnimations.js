import { ScrollTrigger } from './gsapConfig'
import { prefersReducedMotion } from '../utils/scroll'

/**
 * Track scroll progress through the tall sticky section.
 * No GSAP pin — CSS sticky works reliably with Lenis.
 */
export const animateScoreJourney = (scope, { stepCount, onStepChange, onProgress }) => {
  if (!scope || stepCount < 1) return () => {}

  if (prefersReducedMotion()) {
    onStepChange?.(0)
    onProgress?.(0)
    return () => {}
  }

  let currentStep = 0
  onStepChange?.(0)
  onProgress?.(0)

  const trigger = ScrollTrigger.create({
    trigger: scope,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const progress = self.progress
      onProgress?.(progress)

      let nextStep = Math.min(
        stepCount - 1,
        Math.floor(progress * stepCount + 0.08),
      )
      if (progress >= 0.88) nextStep = stepCount - 1

      if (nextStep !== currentStep) {
        currentStep = nextStep
        onStepChange?.(currentStep)
      }
    },
  })

  requestAnimationFrame(() => ScrollTrigger.refresh())

  return () => {
    trigger.kill()
  }
}
