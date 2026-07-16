import { useEffect, useRef } from 'react'
import Container from '../../common/Container'
import SectionTitle from '../../common/SectionTitle'
import { animateOnScroll } from '../../../animations/scrollAnimations'
import './About.css'

const STATS = [
  { value: '2,000+', label: 'Active Members' },
  { value: '12', label: 'Years of Excellence' },
  { value: '50+', label: 'Expert Coaches' },
  { value: '98%', label: 'Member Retention' },
]

const About = () => {
  const sectionRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const cleanups = []
    if (sectionRef.current) {
      cleanups.push(animateOnScroll(sectionRef.current.querySelector('.sf-section-title'), { direction: 'up' }))
    }
    if (statsRef.current) {
      const cards = statsRef.current.querySelectorAll('.sf-about__stat')
      cleanups.push(animateOnScroll(cards, { direction: 'up', staggerDelay: 0.1 }))
    }
    return () => cleanups.forEach((fn) => fn?.())
  }, [])

  return (
    <section className="sf-about" ref={sectionRef}>
      {/* Decorative gradient blob */}
      <div className="sf-about__blob" aria-hidden="true" />

      <Container>
        <SectionTitle
          eyebrow="Who we are"
          title="Built for people who show up"
          description="Score.fit combines expert coaching, structured programming, and a community that keeps you consistent. We're not a trendy gym — we're your training partner."
        />

        <div className="sf-about__stats" ref={statsRef}>
          {STATS.map((stat) => (
            <div key={stat.label} className="sf-about__stat">
              <span className="sf-about__stat-value">{stat.value}</span>
              <span className="sf-about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default About
