import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '../../../config/siteConfig'
import { ROUTES } from '../../../routes/RouteConstants'
import Button from '../../common/Button'
import Container from '../../common/Container'
import { runHeroAnimations } from './HeroAnimations'
import './Hero.css'

const HERO_STATS = [
  { value: 2, suffix: 'K+', label: 'Active Members' },
  { value: 50, suffix: '+', label: 'Expert Coaches' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
]

const HERO_CHIPS = [
  { id: 'strength', title: 'Strength', meta: '+12% this week', modifier: 'one' },
  { id: 'calories', title: '1,700 kcal', meta: 'Calories tracked', modifier: 'two' },
  { id: 'recovery', title: 'Recovery 92%', meta: 'Ready to train', modifier: 'three' },
]

const Hero = () => {
  const scopeRef = useRef(null)

  // Mouse parallax: normalized -0.5..0.5 coords drive subtle layer shifts
  useEffect(() => {
    const node = scopeRef.current
    if (!node) return undefined

    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      node.style.setProperty('--mx', x.toFixed(3))
      node.style.setProperty('--my', y.toFixed(3))
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const cleanup = runHeroAnimations(scopeRef.current)
    return cleanup
  }, [])

  return (
    <section className="sf-hero" ref={scopeRef}>
      {/* Sticky stage: stays on screen while scroll drives the exit sequence */}
      <div className="sf-hero__sticky">
      {/* Background image */}
      <div className="sf-hero__bg" aria-hidden="true">
        <img src="/home_bg.jpg" alt="" />
        <span className="sf-hero__bg-veil" />
      </div>

      {/* Ambient aurora glows */}
      <div className="sf-hero__aurora" aria-hidden="true">
        <span className="sf-hero__aurora-blob sf-hero__aurora-blob--one" />
        <span className="sf-hero__aurora-blob sf-hero__aurora-blob--two" />
        <span className="sf-hero__aurora-blob sf-hero__aurora-blob--three" />
      </div>

      {/* Faint blueprint grid */}
      <div className="sf-hero__grid" aria-hidden="true" />

      {/* Giant outlined marquee text */}
      <div className="sf-hero__marquee" aria-hidden="true">
        <div className="sf-hero__marquee-track">
          <span>Train&nbsp;·&nbsp;Track&nbsp;·&nbsp;Transform&nbsp;·&nbsp;Score.fit&nbsp;·&nbsp;</span>
          <span>Train&nbsp;·&nbsp;Track&nbsp;·&nbsp;Transform&nbsp;·&nbsp;Score.fit&nbsp;·&nbsp;</span>
        </div>
      </div>

      <Container className="sf-hero__content">
        {/* Left: copy */}
        <div className="sf-hero__copy-col">
          <span className="sf-hero__badge" data-hero-badge>
            <span className="sf-hero__pulse-dot" />
            Join 2,000+ Active Members
          </span>

          <h1 className="sf-hero__title">
            <span className="sf-hero__line">
              <span className="sf-hero__line-inner" data-hero-line>
                Train with
              </span>
            </span>
            <span className="sf-hero__line">
              <span
                className="sf-hero__line-inner sf-hero__line-inner--accent"
                data-hero-line
              >
                Purpose.
              </span>
            </span>
          </h1>

          <p className="sf-hero__copy" data-hero-copy>
            {SITE_CONFIG.description} Stop guessing, start scoring your
            progress.
          </p>

          <div className="sf-hero__cta" data-hero-cta>
            <Button
              as={Link}
              to={ROUTES.JOIN}
              size="lg"
              className="sf-hero__btn-glow"
            >
              {SITE_CONFIG.cta.primary}
            </Button>
            <Link to={ROUTES.MEMBERSHIP} className="sf-hero__link-secondary">
              Explore Plans
              <span className="sf-hero__link-arrow">&rarr;</span>
            </Link>
          </div>

          <div className="sf-hero__stats">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="sf-hero__stat" data-hero-stat>
                <span className="sf-hero__stat-value">
                  <span data-count-to={stat.value}>0</span>
                  {stat.suffix}
                </span>
                <span className="sf-hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: phone mockup with live score — glides into ScoreJourney */}
        <div className="sf-hero__visual" data-hero-visual>
          <div className="sf-hero__phone" data-hero-phone>
            <span className="sf-hero__phone-glow" aria-hidden="true" />
            <div className="sf-hero__phone-frame">
              <span className="sf-hero__phone-notch" aria-hidden="true" />
              <div className="sf-hero__phone-screen">
                <div className="sf-hero__phone-topbar">
                  <span className="sf-hero__phone-app">Score.fit</span>
                  <span className="sf-hero__phone-live">
                    <span className="sf-hero__phone-live-dot" />
                    Live
                  </span>
                </div>

                <div className="sf-hero__phone-score-wrap">
                  <svg
                    className="sf-hero__ring"
                    viewBox="0 0 260 260"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="sf-hero-ring-grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#a8f04d" />
                        <stop offset="100%" stopColor="#73c709" />
                      </linearGradient>
                    </defs>
                    <circle
                      className="sf-hero__ring-track"
                      cx="130"
                      cy="130"
                      r="112"
                      pathLength="100"
                    />
                    <circle
                      className="sf-hero__ring-progress"
                      data-hero-ring
                      cx="130"
                      cy="130"
                      r="112"
                      pathLength="100"
                    />
                  </svg>

                  <div className="sf-hero__ring-center">
                    <span className="sf-hero__ring-score">
                      <span data-count-to="8.7" data-count-decimals="1">
                        0.0
                      </span>
                    </span>
                    <span className="sf-hero__ring-label">Your Score</span>
                  </div>
                </div>

                <div className="sf-hero__phone-bars" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <p className="sf-hero__phone-caption">Weekly Performance</p>
              </div>
            </div>
          </div>

          {HERO_CHIPS.map((chip) => (
            <div
              key={chip.id}
              className={`sf-hero__chip sf-hero__chip--${chip.modifier}`}
              data-hero-chip
            >
              <span className="sf-hero__chip-dot" />
              <span className="sf-hero__chip-text">
                <strong>{chip.title}</strong>
                <small>{chip.meta}</small>
              </span>
            </div>
          ))}
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="sf-hero__scroll" aria-hidden="true">
        <span className="sf-hero__scroll-label">Scroll</span>
        <span className="sf-hero__scroll-line" />
      </div>
      </div>
    </section>
  )
}

export default Hero
