import { gsap } from './gsapConfig'

/**
 * Hero entrance sequence:
 * 1. Title lines slide up from behind clip masks
 * 2. Badge, copy and CTA fade/rise in
 * 3. Score ring draws itself while the score counts up
 * 4. Floating chips pop in, stats count up
 */
export const animateHero = (scope) => {
  if (!scope) return () => {}

  const badge = scope.querySelector('[data-hero-badge]')
  const lines = scope.querySelectorAll('[data-hero-line]')
  const copy = scope.querySelector('[data-hero-copy]')
  const cta = scope.querySelector('[data-hero-cta]')
  const stats = scope.querySelectorAll('[data-hero-stat]')
  const visual = scope.querySelector('[data-hero-visual]')
  const ring = scope.querySelector('[data-hero-ring]')
  const chips = scope.querySelectorAll('[data-hero-chip]')
  const counters = scope.querySelectorAll('[data-count-to]')

  // Initial states (set immediately to avoid flash of unstyled content)
  if (badge) gsap.set(badge, { y: 24, opacity: 0 })
  if (lines.length) gsap.set(lines, { yPercent: 110 })
  if (copy) gsap.set(copy, { y: 28, opacity: 0 })
  if (cta) gsap.set(cta, { y: 24, opacity: 0 })
  if (stats.length) gsap.set(stats, { y: 20, opacity: 0 })
  if (visual) gsap.set(visual, { opacity: 0, scale: 0.92 })
  if (ring) gsap.set(ring, { strokeDashoffset: 100 })
  if (chips.length) gsap.set(chips, { opacity: 0, scale: 0.6, y: 16 })

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    delay: 0.2,
  })

  if (lines.length) {
    tl.to(lines, { yPercent: 0, duration: 1, stagger: 0.14, ease: 'power4.out' })
  }
  if (badge) tl.to(badge, { y: 0, opacity: 1, duration: 0.6 }, '-=0.7')
  if (copy) tl.to(copy, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
  if (cta) tl.to(cta, { y: 0, opacity: 1, duration: 0.6 }, '-=0.45')

  if (visual) {
    tl.to(visual, { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' }, '-=0.6')
  }
  if (ring) {
    // Draw the ring to 87% (score 8.7 / 10)
    tl.to(ring, { strokeDashoffset: 13, duration: 1.6, ease: 'power2.inOut' }, '-=0.6')
  }
  if (chips.length) {
    tl.to(
      chips,
      { opacity: 1, scale: 1, y: 0, duration: 0.55, stagger: 0.12, ease: 'back.out(1.8)' },
      '-=1.1',
    )
  }
  if (stats.length) {
    tl.to(stats, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=1.2')
  }

  // Count-up numbers (stats + ring score)
  counters.forEach((el) => {
    const target = parseFloat(el.dataset.countTo)
    const decimals = parseInt(el.dataset.countDecimals || '0', 10)
    const proxy = { value: 0 }

    tl.to(
      proxy,
      {
        value: target,
        duration: 1.6,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = proxy.value.toFixed(decimals)
        },
      },
      '-=1.5',
    )
  })

  return () => tl.kill()
}
