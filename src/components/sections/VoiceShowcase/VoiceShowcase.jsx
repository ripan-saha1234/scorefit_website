import { useEffect, useState } from 'react'
import { VOICE_SHOWCASE } from '../../../data/voiceShowcaseData'
import Container from '../../common/Container'
import './VoiceShowcase.css'

const AUTO_MS = 5200

const Stars = ({ rating }) => (
  <div className="sf-voice__stars" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'is-on' : ''} aria-hidden="true">
        ★
      </span>
    ))}
  </div>
)

const VoiceShowcase = () => {
  const { eyebrow, title, description, items } = VOICE_SHOWCASE
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const current = items[active] ?? items[0]

  useEffect(() => {
    if (paused || items.length < 2) return undefined

    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % items.length)
    }, AUTO_MS)

    return () => window.clearInterval(id)
  }, [paused, items.length, active])

  return (
    <section
      className="sf-voice"
      aria-label="Member testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="sf-voice__orb sf-voice__orb--one" aria-hidden="true" />
      <div className="sf-voice__orb sf-voice__orb--two" aria-hidden="true" />
      <div className="sf-voice__grid" aria-hidden="true" />

      <Container className="sf-voice__inner">
        <header className="sf-voice__intro">
          <p className="sf-voice__eyebrow">{eyebrow}</p>
          <h2 className="sf-voice__title">{title}</h2>
          <p className="sf-voice__lead">{description}</p>
        </header>

        <div className="sf-voice__stage">
          <article className="sf-voice__feature" key={current.id}>
            <div className="sf-voice__feature-top">
              <span className="sf-voice__mark" aria-hidden="true">
                “
              </span>
              <span className="sf-voice__chip">{current.highlight}</span>
            </div>

            <p className="sf-voice__quote">{current.quote}</p>

            <div className="sf-voice__meta">
              <div className="sf-voice__avatar" aria-hidden="true">
                {current.initials}
              </div>
              <div>
                <h3 className="sf-voice__name">{current.name}</h3>
                <p className="sf-voice__role">
                  {current.role} · {current.focus}
                </p>
              </div>
              <Stars rating={current.rating} />
            </div>

            <div
              className={`sf-voice__progress${paused ? ' is-paused' : ''}`}
              aria-hidden="true"
            >
              <span key={current.id} style={{ animationDuration: `${AUTO_MS}ms` }} />
            </div>
          </article>

          <div className="sf-voice__rail" role="tablist" aria-label="Choose a story">
            {items.map((item, index) => {
              const isActive = index === active
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`sf-voice__rail-card${isActive ? ' is-active' : ''}`}
                  onClick={() => setActive(index)}
                >
                  <span className="sf-voice__rail-avatar" aria-hidden="true">
                    {item.initials}
                  </span>
                  <span className="sf-voice__rail-copy">
                    <strong>{item.name}</strong>
                    <small>{item.highlight}</small>
                  </span>
                  <span className="sf-voice__rail-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default VoiceShowcase
