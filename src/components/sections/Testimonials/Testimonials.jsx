import { useEffect, useRef } from 'react'
import { TESTIMONIALS } from '../../../data/testimonialData'
import Container from '../../common/Container'
import SectionTitle from '../../common/SectionTitle'
import Card from '../../common/Card'
import { animateCards } from '../../../animations/scrollAnimations'
import './Testimonials.css'

const StarRating = ({ rating }) => (
  <div className="sf-testimonials__stars" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }, (_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i < rating ? 'currentColor' : 'none'} aria-hidden="true">
        <path d="M8 1.5L9.85 5.85L14.5 6.4L11 9.55L12 14.1L8 11.7L4 14.1L5 9.55L1.5 6.4L6.15 5.85L8 1.5Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ))}
  </div>
)

const Testimonials = () => {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return undefined
    const cleanup = animateCards(gridRef.current.querySelectorAll('.sf-card'))
    return cleanup
  }, [])

  return (
    <section className="sf-testimonials">
      <Container>
        <SectionTitle title="Member stories" align="center" eyebrow="Testimonials" />
        <div className="sf-testimonials__grid" ref={gridRef}>
          {TESTIMONIALS.map((item) => (
            <Card key={item.id} className="sf-testimonials__card">
              {/* Quote icon */}
              <svg className="sf-testimonials__quote-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M10 16H6C6 12.7 8.7 10 12 10V6C6.5 6 2 10.5 2 16V26H12V16H10ZM24 16H20C20 12.7 22.7 10 26 10V6C20.5 6 16 10.5 16 16V26H26V16H24Z" fill="currentColor" />
              </svg>
              <p className="sf-testimonials__quote">"{item.quote}"</p>
              <StarRating rating={item.rating} />
              <div className="sf-testimonials__author">
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
