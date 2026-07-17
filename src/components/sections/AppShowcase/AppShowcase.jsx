import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes/RouteConstants'
import Button from '../../common/Button'
import Container from '../../common/Container'
import './AppShowcase.css'

const CHECK_COUNT = 7

/**
 * Replace this with the real phone mockup once provided:
 * import phoneMockup from '../../../assets/images/app-phone.png'
 */
const PHONE_IMAGE = null

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12.5 10 17.5 19 7"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const AppShowcase = () => (
  <section className="sf-app-showcase" aria-label="Score.fit app">
    <Container className="sf-app-showcase__inner">
      {/* LEFT — copy */}
      <div className="sf-app-showcase__copy">
        <div className="sf-app-showcase__checks" aria-hidden="true">
          {Array.from({ length: CHECK_COUNT }, (_, i) => (
            <span
              key={i}
              className="sf-app-showcase__check"
              style={{ '--check-index': i }}
            >
              <CheckIcon />
            </span>
          ))}
        </div>

        <h2 className="sf-app-showcase__heading">
          Know exactly what workout to do, every day
        </h2>

        <p className="sf-app-showcase__desc">
          A workout plan for every day, created by an expert coach and new
          each week.
        </p>

        <Button
          as={Link}
          to={ROUTES.MEMBERSHIP}
          size="lg"
          className="sf-app-showcase__btn"
        >
          Find Your Plan
        </Button>
      </div>

      {/* RIGHT — phone in glowing ring */}
      <div className="sf-app-showcase__visual" aria-hidden="true">
        <svg className="sf-app-showcase__ring" viewBox="0 0 100 100" fill="none">
          <circle className="sf-app-showcase__ring-track" cx="50" cy="50" r="46.5" />
          <circle className="sf-app-showcase__ring-arc" cx="50" cy="50" r="46.5" />
        </svg>
        <div className="sf-app-showcase__ring-glow" />
        <div className="sf-app-showcase__phone">
          {PHONE_IMAGE ? (
            <img
              src={PHONE_IMAGE}
              alt=""
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="sf-app-showcase__phone-placeholder">
              <span className="sf-app-showcase__phone-notch" />
              <div className="sf-app-showcase__phone-screen">
                <p className="sf-app-showcase__phone-brand">Score.fit</p>
                <p className="sf-app-showcase__phone-label">
                  Strength
                  <br />
                  x Pilates
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  </section>
)

export default AppShowcase
