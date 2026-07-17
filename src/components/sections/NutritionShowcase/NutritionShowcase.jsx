import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes/RouteConstants'
import Container from '../../common/Container'
import './NutritionShowcase.css'

const PHONE_IMAGE = '/nutrition_updated.png'

const NutritionShowcase = () => {
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
      className="sf-nutrition"
      aria-label="Track nutrition"
    >
      <Container className="sf-nutrition__inner">
        <div className="sf-nutrition__media">
          <span className="sf-nutrition__glow" aria-hidden="true" />
          <img
            src={PHONE_IMAGE}
            alt="Score.fit app tracking nutrition with the meal camera"
            loading="lazy"
            decoding="async"
          />
        </div>

        <h2 className="sf-nutrition__heading">
          <span className="sf-nutrition__heading-line">Track</span>
          <span className="sf-nutrition__heading-line">Nutrition</span>
        </h2>

        <p className="sf-nutrition__desc">
          Log meals in seconds to track nutrition and workouts in one app.
        </p>

        <Link to={ROUTES.MEMBERSHIP} className="sf-nutrition__btn">
          Find Your Plan
        </Link>
      </Container>
    </section>
  )
}

export default NutritionShowcase
