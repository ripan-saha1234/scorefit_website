import { useEffect, useRef } from 'react'
import Container from '../../common/Container'
import './AppShowcase.css'

const PHONE_IMAGE = '/appshow1.avif'

const LEFT_POINTS = [
  {
    id: 'plan',
    title: 'Know Your Daily Plan',
    text: 'A coach-built workout for every day — strength, recovery, and progression mapped out for you.',
  },
  {
    id: 'track',
    title: 'Track Every Rep',
    text: 'Log sets, weights, and PRs in seconds so your progress stays visible and measurable.',
  },
]

const RIGHT_POINTS = [
  {
    id: 'score',
    title: 'Climb Your Score',
    text: 'Watch your Score.fit rating rise as consistency, strength, and recovery stack week after week.',
  },
  {
    id: 'coach',
    title: 'Train With Guidance',
    text: 'Expert programming and clear cues — so you always know what to do and how to do it.',
  },
]

const Point = ({ title, text }) => (
  <article className="sf-app-showcase__point">
    <h3 className="sf-app-showcase__point-title">{title}</h3>
    <p className="sf-app-showcase__point-text">{text}</p>
  </article>
)

const AppShowcase = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="sf-app-showcase"
      aria-label="Score.fit app features"
    >
      <Container className="sf-app-showcase__inner">
        <h2 className="sf-app-showcase__heading">
          Know exactly what workout to do, every day
        </h2>

        <div className="sf-app-showcase__layout">
          <div className="sf-app-showcase__side sf-app-showcase__side--left">
            {LEFT_POINTS.map((point) => (
              <Point key={point.id} title={point.title} text={point.text} />
            ))}
          </div>

          <div className="sf-app-showcase__media">
            <img
              src={PHONE_IMAGE}
              alt="Score.fit app on a phone showing daily workouts"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="sf-app-showcase__side sf-app-showcase__side--right">
            {RIGHT_POINTS.map((point) => (
              <Point key={point.id} title={point.title} text={point.text} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AppShowcase
