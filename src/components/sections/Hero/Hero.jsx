import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '../../../config/siteConfig'
import { ROUTES } from '../../../routes/RouteConstants'
import Button from '../../common/Button'
import Container from '../../common/Container'
import { runHeroAnimations } from './HeroAnimations'
import './Hero.css'

const HERO_STATS = [
  { value: '2K+', label: 'Active Members' },
  { value: '50+', label: 'Expert Coaches' },
  { value: '98%', label: 'Satisfaction' },
]

const Hero = () => {
  const scopeRef = useRef(null)
  const overlayRef = useRef(null)

  // Interactive mouse glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!overlayRef.current) return
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth) * 100
      const y = (clientY / window.innerHeight) * 100
      overlayRef.current.style.setProperty('--mouse-x', `${x}%`)
      overlayRef.current.style.setProperty('--mouse-y', `${y}%`)
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
      {/* Cinematic Video Background */}
      <div className="sf-hero__media" aria-hidden="true">
        <video 
          className="sf-hero__video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/home_page_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Interactive Gradient Overlays */}
      <div className="sf-hero__overlay" aria-hidden="true" ref={overlayRef} />
      <div className="sf-hero__grain" aria-hidden="true" />

      {/* Decorative grid lines */}
      <div className="sf-hero__grid-lines" aria-hidden="true">
        <span /><span /><span /><span />
      </div>

      {/* Content */}
      <Container className="sf-hero__content">
        <div className="sf-hero__content-box">
          <div className="sf-hero__badge-wrap">
            <span className="sf-hero__floating-badge">
              <span className="sf-hero__pulse-dot"></span>
              Join 2,000+ Active Members
            </span>
          </div>
          
          <h1 data-hero-title>
            Train with <br/>
            <span className="text-gradient sf-hero__title-accent">Purpose.</span>
          </h1>
          
          <p className="sf-hero__copy" data-hero-copy>
            {SITE_CONFIG.description} Stop guessing, start scoring your progress.
          </p>
          
          <div className="sf-hero__cta" data-hero-cta>
            <Button as={Link} to={ROUTES.JOIN} size="lg" className="sf-hero__btn-glow">{SITE_CONFIG.cta.primary}</Button>
            <div className="sf-hero__cta-divider">or</div>
            <Link to={ROUTES.MEMBERSHIP} className="sf-hero__link-secondary">Explore Plans &rarr;</Link>
          </div>
        </div>

        {/* Accent line decoration */}
        <div className="sf-hero__decor" data-hero-decor aria-hidden="true" />

        {/* Stats bar */}
        <div className="sf-hero__stats">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="sf-hero__stat" data-hero-stat>
              <span className="sf-hero__stat-value">{stat.value}</span>
              <span className="sf-hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
      
      {/* Scroll Indicator */}
      <div className="sf-hero__scroll-indicator" aria-hidden="true">
        <div className="sf-hero__scroll-mouse">
          <div className="sf-hero__scroll-wheel" />
        </div>
      </div>
    </section>
  )
}

export default Hero
