import { useEffect, useRef, useState } from 'react'
import { BUSINESS_ZOOM_GALLERY } from '../../../../data/businessData'
import Container from '../../../common/Container'
import './BusinessZoomGallery.css'

const ZoomShot = ({ item, index, isActive, isFocused }) => (
  <figure
    className={[
      'sf-biz-zoom__shot',
      `sf-biz-zoom__shot--${item.position}`,
      item.fit === 'wide' ? 'sf-biz-zoom__shot--wide' : '',
      isActive ? 'is-in' : '',
      isFocused ? 'is-focused' : '',
    ]
      .filter(Boolean)
      .join(' ')}
    style={{ '--zoom-delay': `${index * 0.18}s` }}
  >
    {item.src ? (
      <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
    ) : (
      <div
        className={`sf-biz-zoom__ph sf-biz-zoom__ph--${item.placeholderTone || 'dark'}`}
        aria-hidden="true"
      >
        <span>{item.label}</span>
      </div>
    )}
    {item.fit === 'wide' ? null : <figcaption>{item.label}</figcaption>}
  </figure>
)

const BusinessZoomGallery = () => {
  const { eyebrow, title, description, images } = BUSINESS_ZOOM_GALLERY
  const stageRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const [focusIndex, setFocusIndex] = useState(0)

  useEffect(() => {
    const node = stageRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.28 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isActive || images.length < 2) return undefined

    const id = window.setInterval(() => {
      setFocusIndex((prev) => (prev + 1) % images.length)
    }, 2200)

    return () => window.clearInterval(id)
  }, [isActive, images.length])

  return (
    <section className="sf-biz-zoom" aria-label="Portal visual showcase">
      <div className="sf-biz-zoom__glow" aria-hidden="true" />
      <Container>
        <div
          ref={stageRef}
          className={`sf-biz-zoom__stage${isActive ? ' is-active' : ''}`}
        >
          {images.map((item, index) => (
            <ZoomShot
              key={item.id}
              item={item}
              index={index}
              isActive={isActive}
              isFocused={isActive && focusIndex === index}
            />
          ))}

          <div className="sf-biz-zoom__center">
            <p className="sf-biz-zoom__eyebrow">{eyebrow}</p>
            <h2 className="sf-biz-zoom__title">{title}</h2>
            <p className="sf-biz-zoom__copy">{description}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BusinessZoomGallery
