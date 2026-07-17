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

/**
 * Cinematic scroll sequence. The hero sits inside a 200vh track with a
 * sticky 100vh stage, so the user scrolls "through" the hero while it
 * stays on screen and the timeline scrubs.
 *
 * Act 1 — the copy leaves the stage: title lines split horizontally in
 *         opposite directions, badge/copy/CTA/stats lift away, the grid
 *         zooms past the camera.
 * Act 2 — the score ring becomes the star: it glides to center stage and
 *         grows while the chips scatter radially and the aurora flares.
 * Act 3 — fly-through: the ring zooms through the viewer with a blur,
 *         everything dims, handing off cleanly to the next section.
 */
export const animateHeroScroll = (scope) => {
  if (!scope) return () => {}

  const badge = scope.querySelector('[data-hero-badge]')
  const lines = scope.querySelectorAll('[data-hero-line]')
  const copy = scope.querySelector('[data-hero-copy]')
  const cta = scope.querySelector('[data-hero-cta]')
  const stats = scope.querySelector('.sf-hero__stats')
  const visual = scope.querySelector('[data-hero-visual]')
  const chips = scope.querySelectorAll('[data-hero-chip]')
  const aurora = scope.querySelector('.sf-hero__aurora')
  const auroraBlobs = scope.querySelectorAll('.sf-hero__aurora-blob')
  const grid = scope.querySelector('.sf-hero__grid')
  const marquee = scope.querySelector('.sf-hero__marquee')
  const scrollHint = scope.querySelector('.sf-hero__scroll')

  // On mobile the ring is stacked above the copy, so keep it centered
  const isDesktop = window.matchMedia('(min-width: 1025px)').matches

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scope,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      invalidateOnRefresh: true,
    },
    defaults: { ease: 'power1.in' },
  })

  /* ── Act 1: copy departs (0 → 0.45) ─────────────── */

  if (scrollHint) {
    tl.to(scrollHint, { autoAlpha: 0, duration: 0.08 }, 0)
  }

  if (lines.length >= 2) {
    // Title lines split apart horizontally with a letter-spacing stretch
    tl.to(
      lines[0],
      { xPercent: -55, letterSpacing: '0.12em', autoAlpha: 0, duration: 0.42 },
      0.02,
    )
    tl.to(
      lines[1],
      { xPercent: 55, letterSpacing: '0.12em', autoAlpha: 0, duration: 0.42 },
      0.06,
    )
  } else if (lines.length) {
    tl.to(lines, { yPercent: -80, autoAlpha: 0, duration: 0.4 }, 0.02)
  }

  if (badge) tl.to(badge, { y: -70, autoAlpha: 0, duration: 0.3 }, 0)
  if (copy) tl.to(copy, { y: -80, autoAlpha: 0, duration: 0.34 }, 0.08)
  if (cta) tl.to(cta, { y: -90, autoAlpha: 0, duration: 0.34 }, 0.12)
  if (stats) tl.to(stats, { y: -100, autoAlpha: 0, duration: 0.34 }, 0.16)

  if (grid) {
    // Grid flies past the camera
    tl.to(grid, { scale: 1.6, autoAlpha: 0, duration: 0.5, ease: 'power2.in' }, 0)
  }

  if (marquee) {
    tl.to(marquee, { xPercent: -22, autoAlpha: 0, duration: 0.5 }, 0.05)
  }

  /* ── Act 2: the ring takes center stage (0.15 → 0.6) ── */

  if (visual) {
    tl.to(
      visual,
      {
        // Glide toward the center of the stage (desktop two-column only)
        xPercent: isDesktop ? -26 : 0,
        y: 0,
        scale: 1.3,
        duration: 0.4,
        ease: 'power1.inOut',
      },
      0.15,
    )
  }

  if (chips.length) {
    // Chips scatter radially with spin, each on its own vector
    const vectors = [
      { x: -180, y: -140, rotation: -18 },
      { x: -220, y: 120, rotation: 14 },
      { x: 200, y: -120, rotation: 20 },
    ]
    chips.forEach((chip, i) => {
      const v = vectors[i % vectors.length]
      tl.to(
        chip,
        { ...v, autoAlpha: 0, duration: 0.38, ease: 'power2.in' },
        0.18 + i * 0.04,
      )
    })
  }

  if (auroraBlobs.length) {
    // Aurora flares bright as the ring grows...
    tl.to(auroraBlobs, { opacity: 0.9, duration: 0.35, ease: 'power1.inOut' }, 0.2)
  }
  if (aurora) {
    tl.to(aurora, { scale: 1.15, duration: 0.35, ease: 'power1.inOut' }, 0.2)
  }

  /* ── Act 3: fly-through exit (0.6 → 1) ──────────── */

  if (visual) {
    tl.to(
      visual,
      {
        scale: 3.2,
        autoAlpha: 0,
        filter: 'blur(14px)',
        duration: 0.4,
        ease: 'power2.in',
      },
      0.6,
    )
  }

  if (aurora) {
    // ...then dims out for the handoff to the next section
    tl.to(aurora, { autoAlpha: 0.1, scale: 1.4, duration: 0.35, ease: 'power1.out' }, 0.62)
  }

  const trigger = tl.scrollTrigger

  return () => {
    trigger?.kill()
    tl.kill()
  }
}

