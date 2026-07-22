import { useEffect, useRef } from 'react'
import { BUSINESS_PORTAL_INSIGHTS } from '../../../../data/businessData'
import Container from '../../../common/Container'
import SectionTitle from '../../../common/SectionTitle'
import PortalPlaceholder from './PortalPlaceholder'
import './BusinessPortalShowcase.css'

const InsightRow = ({ item }) => {
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
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={rowRef}
      className={`sf-biz-portal__row sf-biz-portal__row--${item.layout}`}
    >
      <div className="sf-biz-portal__media">
        {item.image ? (
          <img
            src={item.image}
            alt={item.imageAlt}
            className="sf-biz-portal__image"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <PortalPlaceholder placeholder={item.placeholder} />
        )}
      </div>

      <div className="sf-biz-portal__copy">
        <p className="sf-biz-portal__eyebrow">{item.eyebrow}</p>
        <h3 className="sf-biz-portal__title">{item.title}</h3>
        <p className="sf-biz-portal__desc">{item.description}</p>
        <ul className="sf-biz-portal__points">
          {item.points.map((point) => (
            <li key={point}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M13.5 4.5L6.5 11.5L2.5 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

const BusinessPortalShowcase = () => {
  const { eyebrow, title, description, items } = BUSINESS_PORTAL_INSIGHTS

  return (
    <section className="sf-biz-portal" aria-label="Portal insights showcase" id="insights">
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        <div className="sf-biz-portal__list">
          {items.map((item) => (
            <InsightRow key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default BusinessPortalShowcase
