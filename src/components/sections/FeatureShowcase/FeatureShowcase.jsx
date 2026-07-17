import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FEATURE_SHOWCASE_ITEMS } from '../../../data/featureShowcaseData'
import { ROUTES } from '../../../routes/RouteConstants'
import Button from '../../common/Button'
import Container from '../../common/Container'
import './FeatureShowcase.css'

const PARTICLE_COUNT = 26

/* Deterministic pseudo-random so particles don't jump on re-render */
const seeded = (i, salt) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453
  return x - Math.floor(x)
}

const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  left: `${(seeded(i, 1) * 100).toFixed(2)}%`,
  top: `${(seeded(i, 2) * 100).toFixed(2)}%`,
  size: `${(2 + seeded(i, 3) * 5).toFixed(1)}px`,
  duration: `${(9 + seeded(i, 4) * 14).toFixed(1)}s`,
  delay: `${(-seeded(i, 5) * 18).toFixed(1)}s`,
  opacity: (0.15 + seeded(i, 6) * 0.4).toFixed(2),
}))

const PhonePlaceholder = ({ placeholder, small = false }) => (
  <div className={`sf-feature__phone-body${small ? ' is-small' : ''}`}>
    <span className="sf-feature__phone-notch" />
    <div className="sf-feature__phone-screen">
      <p className="sf-feature__phone-subtitle">{placeholder.subtitle}</p>
      <p className="sf-feature__phone-title">{placeholder.title}</p>
      <span className="sf-feature__phone-action">{placeholder.action}</span>
    </div>
  </div>
)

const FeatureRow = ({ item }) => {
  const rowRef = useRef(null)

  useEffect(() => {
    const node = rowRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={rowRef}
      className={`sf-feature__row sf-feature__row--${item.layout}`}
    >
      {/* Media */}
      <div
        className={`sf-feature__media sf-feature__media--${item.variant}`}
        aria-hidden={item.image ? undefined : 'true'}
      >
        {item.image ? (
          <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
        ) : item.variant === 'double' ? (
          <div className="sf-feature__phones">
            <div className="sf-feature__phone sf-feature__phone--back">
              <PhonePlaceholder placeholder={item.placeholder} />
            </div>
            <div className="sf-feature__phone sf-feature__phone--front">
              <PhonePlaceholder placeholder={item.placeholder} small />
            </div>
          </div>
        ) : (
          <div className="sf-feature__phone sf-feature__phone--solo">
            <PhonePlaceholder placeholder={item.placeholder} />
          </div>
        )}
      </div>

      {/* Copy */}
      <div className="sf-feature__copy">
        <h2 className="sf-feature__heading">
          <span className="sf-feature__heading-top">{item.headingTop}</span>
          <span className="sf-feature__heading-bottom">{item.headingBottom}</span>
        </h2>
        <p className="sf-feature__desc">{item.description}</p>
        <Button
          as={Link}
          to={ROUTES.MEMBERSHIP}
          size="lg"
          className="sf-feature__btn"
        >
          {item.cta}
        </Button>
      </div>
    </div>
  )
}

const FeatureShowcase = () => (
  <section className="sf-feature" aria-label="App features">
    {/* Floating particles */}
    <div className="sf-feature__particles" aria-hidden="true">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="sf-feature__particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>

    <Container className="sf-feature__inner">
      {FEATURE_SHOWCASE_ITEMS.map((item) => (
        <FeatureRow key={item.id} item={item} />
      ))}
    </Container>
  </section>
)

export default FeatureShowcase
