import { useEffect, useRef } from 'react'
import Container from '../../common/Container'
import SectionTitle from '../../common/SectionTitle'
import Card from '../../common/Card'
import { animateCards } from '../../../animations/scrollAnimations'
import './Services.css'

const SERVICES = [
  {
    icon: '💪',
    title: 'Strength Training',
    copy: 'Progressive lifting plans with coach oversight. Build real power, not just sweat.',
  },
  {
    icon: '🔥',
    title: 'Group Classes',
    copy: 'High-energy sessions scaled for every level. From HIIT to Olympic lifting.',
  },
  {
    icon: '🧘',
    title: 'Recovery Lab',
    copy: 'Mobility, breathwork, and guided cooldown protocols for longevity.',
  },
]

const Services = () => {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return undefined
    const cleanup = animateCards(gridRef.current.querySelectorAll('.sf-card'))
    return cleanup
  }, [])

  return (
    <section className="sf-services">
      <Container>
        <SectionTitle eyebrow="What we offer" title="Services designed around results" />
        <div className="sf-services__grid" ref={gridRef}>
          {SERVICES.map((service, i) => (
            <Card key={service.title} className="sf-services__card">
              <span className="sf-services__icon">{service.icon}</span>
              <span className="sf-services__number">0{i + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
