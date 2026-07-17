import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes/RouteConstants'
import Container from '../../common/Container'
import './PlanFinder.css'

const PLAN_IMAGE = '/pyramid.avif'

const PlanFinder = () => {
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
      { threshold: 0.25 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="sf-plan-finder"
      aria-label="Find the perfect plan"
    >
      <Container className="sf-plan-finder__inner">
        {/* Left: copy */}
        <div className="sf-plan-finder__copy">
          <h2 className="sf-plan-finder__heading">
            <span className="sf-plan-finder__heading-top">
              Find the perfect plan
            </span>
            <span className="sf-plan-finder__heading-bottom">For You</span>
          </h2>
          <p className="sf-plan-finder__desc">
            Receive a personalized recommendation based on your training goals
            and preferred training styles.
          </p>
          <Link to={ROUTES.MEMBERSHIP} className="sf-plan-finder__btn">
            Find Your Plan
          </Link>
        </div>

        {/* Right: plan cards collage */}
        <div className="sf-plan-finder__media">
          <span className="sf-plan-finder__glow" aria-hidden="true" />
          <img
            src={PLAN_IMAGE}
            alt="Collage of Score.fit training plans, from kettlebell strength to advanced conditioning"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Container>
    </section>
  )
}

export default PlanFinder
