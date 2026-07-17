import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SCORE_JOURNEY_STEPS } from '../../../data/scoreJourneyData'
import { ROUTES } from '../../../routes/RouteConstants'
import { refreshScrollTrigger } from '../../../animations/gsapConfig'
import Button from '../../common/Button'
import { runScoreJourneyAnimations } from './ScoreJourneyAnimations'
import './ScoreJourney.css'

const STEP_COUNT = SCORE_JOURNEY_STEPS.length

const ScoreJourney = () => {
  const scopeRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const step = SCORE_JOURNEY_STEPS[activeStep] ?? SCORE_JOURNEY_STEPS[0]
  const isLast = activeStep === STEP_COUNT - 1

  useEffect(() => {
    const scope = scopeRef.current
    if (!scope) return undefined

    const cleanup = runScoreJourneyAnimations(scope, {
      stepCount: STEP_COUNT,
      onStepChange: setActiveStep,
      onProgress: setProgress,
    })

    const refreshId = window.setTimeout(() => refreshScrollTrigger(), 300)
    const onResize = () => refreshScrollTrigger()
    window.addEventListener('resize', onResize)

    return () => {
      window.clearTimeout(refreshId)
      window.removeEventListener('resize', onResize)
      cleanup?.()
    }
  }, [])

  return (
    <section
      className="sf-score-journey"
      ref={scopeRef}
      aria-label="Your Score.fit journey"
      style={{ '--sj-steps': STEP_COUNT }}
    >
      <div className="sf-score-journey__sticky">
        <div className="sf-score-journey__inner">
          {/* Progress rail */}
          <div className="sf-score-journey__progress" aria-hidden="true">
            <div className="sf-score-journey__progress-track">
              <div
                className="sf-score-journey__progress-fill"
                style={{ transform: `scaleY(${Math.max(progress, 0.02)})` }}
              />
            </div>
            <ol className="sf-score-journey__dots">
              {SCORE_JOURNEY_STEPS.map((item, index) => (
                <li
                  key={item.id}
                  className={`sf-score-journey__dot${index === activeStep ? ' is-active' : ''}${index < activeStep ? ' is-passed' : ''}`}
                />
              ))}
            </ol>
          </div>

          <div className="sf-score-journey__grid">
            {/* LEFT */}
            <div className="sf-score-journey__col sf-score-journey__col--left">
              <p className="sf-score-journey__eyebrow">Score Journey</p>
              <h2 key={`h-${step.id}`} className="sf-score-journey__heading">
                {step.heading}
              </h2>
            </div>

            {/* CENTER — phone frame, continues the hero phone */}
            <div className="sf-score-journey__col sf-score-journey__col--center">
              <div className="sf-score-journey__stage">
                <span className="sf-score-journey__notch" aria-hidden="true" />
                <div className="sf-score-journey__screen">
                  {SCORE_JOURNEY_STEPS.map((item, index) => (
                    <div
                      key={item.id}
                      className={`sf-score-journey__media${index === activeStep ? ' is-active' : ''}`}
                    >
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                      <div className="sf-score-journey__media-veil" />
                    </div>
                  ))}

                  <div className="sf-score-journey__score-stack">
                    <span
                      key={`score-${step.id}`}
                      className="sf-score-journey__score"
                      style={{ '--step-accent': step.accent }}
                    >
                      {step.score}
                    </span>
                    <span key={`label-${step.id}`} className="sf-score-journey__score-label">
                      {step.scoreLabel}
                    </span>
                  </div>

                  <div className="sf-score-journey__ring" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="sf-score-journey__col sf-score-journey__col--right">
              <p key={`d-${step.id}`} className="sf-score-journey__desc">
                {step.description}
              </p>

              {isLast ? (
                <div className="sf-score-journey__cta">
                  <Button as={Link} to={ROUTES.JOIN} size="lg" className="sf-score-journey__cta-btn">
                    Try for Free
                  </Button>
                  <a
                    className="sf-score-journey__cta-link"
                    href="#download"
                    onClick={(e) => e.preventDefault()}
                  >
                    Download the App →
                  </a>
                </div>
              ) : null}
            </div>
          </div>

          <p className="sf-score-journey__hint" aria-hidden="true">
            Scroll to climb your score
          </p>
        </div>
      </div>
    </section>
  )
}

export default ScoreJourney
