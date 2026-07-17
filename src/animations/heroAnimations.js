import { gsap, ScrollTrigger } from './gsapConfig'

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
 * Act 2 — the phone becomes the star: chips scatter radially, the aurora
 *         flares, and the phone glides to the exact spot where the
 *         ScoreJourney stage sits.
 * Act 3 — handoff: while the hero unsticks and scrolls away, the phone is
 *         counter-scrolled so it stays glued to the screen, then
 *         crossfades into the ScoreJourney phone in the same position —
 *         reading as one continuous device across both sections.
 */
export const animateHeroScroll = (scope) => {
  if (!scope) return () => {}

  const badge = scope.querySelector('[data-hero-badge]')
  const lines = scope.querySelectorAll('[data-hero-line]')
  const copy = scope.querySelector('[data-hero-copy]')
  const cta = scope.querySelector('[data-hero-cta]')
  const stats = scope.querySelector('.sf-hero__stats')
  const visual = scope.querySelector('[data-hero-visual]')
  const phone = scope.querySelector('[data-hero-phone]')
  const heroSticky = scope.querySelector('.sf-hero__sticky')
  const chips = scope.querySelectorAll('[data-hero-chip]')
  const aurora = scope.querySelector('.sf-hero__aurora')
  const auroraBlobs = scope.querySelectorAll('.sf-hero__aurora-blob')
  const grid = scope.querySelector('.sf-hero__grid')
  const marquee = scope.querySelector('.sf-hero__marquee')
  const scrollHint = scope.querySelector('.sf-hero__scroll')

  // Landing target: the ScoreJourney center stage (same phone frame)
  const journeySection = document.querySelector('.sf-score-journey')
  const journeyStage = document.querySelector('.sf-score-journey__stage')
  const journeySticky = document.querySelector('.sf-score-journey__sticky')

  const canFly = Boolean(
    phone && heroSticky && journeySection && journeyStage && journeySticky,
  )

  /**
   * FLIP-style delta between the hero phone and the journey stage.
   * Both are measured relative to their own sticky containers, which each
   * fill the viewport while stuck — so the delta is scroll-independent.
   * Cached and recomputed on ScrollTrigger refresh (with the phone's
   * transform temporarily reset so measurements stay untransformed).
   */
  let flight = { x: 0, y: 0, scale: 1 }

  const measureFlight = () => {
    if (!canFly) return

    const saved = {
      x: gsap.getProperty(phone, 'x'),
      y: gsap.getProperty(phone, 'y'),
      scale: gsap.getProperty(phone, 'scale'),
    }
    gsap.set(phone, { x: 0, y: 0, scale: 1 })

    const p = phone.getBoundingClientRect()
    const hs = heroSticky.getBoundingClientRect()
    const s = journeyStage.getBoundingClientRect()
    const js = journeySticky.getBoundingClientRect()

    flight = {
      x: s.left - js.left + s.width / 2 - (p.left - hs.left + p.width / 2),
      y: s.top - js.top + s.height / 2 - (p.top - hs.top + p.height / 2),
      scale: s.width / p.width,
    }

    gsap.set(phone, saved)
  }

  measureFlight()
  if (canFly) ScrollTrigger.addEventListener('refreshInit', measureFlight)

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

  /* ── Act 2: the phone glides onto the journey stage spot (0.25 → 0.8) ── */

  if (canFly) {
    tl.to(
      phone,
      {
        x: () => flight.x,
        y: () => flight.y,
        scale: () => flight.scale,
        duration: 0.55,
        ease: 'power1.inOut',
      },
      0.25,
    )
  } else if (visual) {
    tl.to(visual, { scale: 1.15, duration: 0.4, ease: 'power1.inOut' }, 0.25)
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

  /* ── Act 3: aurora dims for the handoff (0.6 → 1) ── */

  if (aurora) {
    tl.to(aurora, { autoAlpha: 0.1, scale: 1.4, duration: 0.35, ease: 'power1.out' }, 0.62)
  }

  /* ── Handoff: hero unsticks, phone stays glued to screen ──
     While the hero scrolls away (journey top: viewport bottom → top),
     counter-translate the phone by exactly the scrolled distance so it
     appears fixed. The journey stage (hidden during the ride) then takes
     over in the identical position — one continuous device. */

  let handoff = null

  if (canFly) {
    handoff = gsap.timeline({
      scrollTrigger: {
        trigger: journeySection,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        invalidateOnRefresh: true,
      },
      defaults: { ease: 'none' },
    })

    handoff.set(journeyStage, { autoAlpha: 0 }, 0.001)
    handoff.fromTo(
      phone,
      { y: () => flight.y },
      { y: () => flight.y + window.innerHeight, duration: 1, immediateRender: false },
      0,
    )
    handoff.set(phone, { autoAlpha: 0 }, 0.999)
    handoff.set(journeyStage, { autoAlpha: 1 }, 0.999)
  }

  const trigger = tl.scrollTrigger
  const handoffTrigger = handoff?.scrollTrigger

  return () => {
    if (canFly) ScrollTrigger.removeEventListener('refreshInit', measureFlight)
    handoffTrigger?.kill()
    handoff?.kill()
    trigger?.kill()
    tl.kill()
  }
}

