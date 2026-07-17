import { animateHero, animateHeroScroll } from '../../../animations/heroAnimations'

export const runHeroAnimations = (scope) => {
  const cleanupEntrance = animateHero(scope)
  const cleanupScroll = animateHeroScroll(scope)

  return () => {
    cleanupEntrance()
    cleanupScroll()
  }
}
