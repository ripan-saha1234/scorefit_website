import { useEffect, useRef } from 'react'
import { TRAINERS } from '../../../data/trainersData'
import { getInitials } from '../../../utils/helpers'
import Container from '../../common/Container'
import SectionTitle from '../../common/SectionTitle'
import Card from '../../common/Card'
import { animateCards } from '../../../animations/scrollAnimations'
import './Trainers.css'

const Trainers = () => {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return undefined
    const cleanup = animateCards(gridRef.current.querySelectorAll('.sf-card'))
    return cleanup
  }, [])

  return (
    <section className="sf-trainers">
      <Container>
        <SectionTitle eyebrow="Coaching team" title="Trainers who know the work" />
        <div className="sf-trainers__grid" ref={gridRef}>
          {TRAINERS.map((trainer) => (
            <Card key={trainer.id} className="sf-trainers__card">
              <div className="sf-trainers__avatar">
                <span>{getInitials(trainer.name)}</span>
              </div>
              <h3>{trainer.name}</h3>
              <p className="sf-trainers__role">{trainer.role}</p>
              <p className="sf-trainers__specialty">{trainer.specialty}</p>
              <div className="sf-trainers__experience">
                <span>{trainer.experienceYears}+ yrs</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Trainers
