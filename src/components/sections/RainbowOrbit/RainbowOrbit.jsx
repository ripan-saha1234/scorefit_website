import { useEffect, useRef } from 'react'
import { refreshScrollTrigger } from '../../../animations/gsapConfig'
import { runRainbowOrbitAnimations } from './RainbowOrbitAnimations'
import './RainbowOrbit.css'

/** Placeholder circles — swap color for image src later */
const ORBIT_ITEMS = [
  { id: 1, color: '#73c709' },
  { id: 2, color: '#a8f04d' },
  { id: 3, color: '#6ee7b7' },
  { id: 4, color: '#38bdf8' },
  { id: 5, color: '#a78bfa' },
  { id: 6, color: '#f472b6' },
  { id: 7, color: '#fbbf24' },
  { id: 8, color: '#fb923c' },
  { id: 9, color: '#f87171' },
  { id: 10, color: '#84e01a' },
  { id: 11, color: '#2dd4bf' },
]

/** Degrees: span the upper arc like a rainbow */
const ARC_START = -115
const ARC_SPAN = 230

const RainbowOrbit = () => {
  const scopeRef = useRef(null)

  useEffect(() => {
    const scope = scopeRef.current
    if (!scope) return undefined

    const cleanup = runRainbowOrbitAnimations(scope)
    const refreshId = window.setTimeout(() => refreshScrollTrigger(), 250)

    return () => {
      window.clearTimeout(refreshId)
      cleanup?.()
    }
  }, [])

  const count = ORBIT_ITEMS.length

  return (
    <section
      ref={scopeRef}
      className="sf-rainbow"
      aria-label="Score.fit community orbit"
    >
      <div className="sf-rainbow__sticky">
        <div className="sf-rainbow__stage">
          <div className="sf-rainbow__orbit" aria-hidden="true">
            <div className="sf-rainbow__ring" data-rainbow-ring>
              {ORBIT_ITEMS.map((item, index) => {
                const angle =
                  count === 1
                    ? 0
                    : ARC_START + (index / (count - 1)) * ARC_SPAN

                return (
                  <div
                    key={item.id}
                    className="sf-rainbow__slot"
                    style={{ '--slot-angle': `${angle}deg` }}
                    data-rainbow-slot
                  >
                    <span
                      className="sf-rainbow__circle"
                      style={{ '--circle-color': item.color }}
                      data-rainbow-circle
                    />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="sf-rainbow__copy">
            <p className="sf-rainbow__eyebrow">Community</p>
            <h2 className="sf-rainbow__heading">
              Train with people who push you forward
            </h2>
            <p className="sf-rainbow__desc">
              A living circle of athletes, coaches, and everyday movers —
              scroll and watch the orbit move with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RainbowOrbit
