import { SITE_CONFIG } from '../../../config/siteConfig'
import { DOWNLOAD_SECTION_ID } from '../../../utils/constants'
import Container from '../../common/Container'
import './CTA.css'

const APP_IMAGE = '/feature1.png'

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.1-.69-.15-.91-.26-.21-.64-.19-.89.04l-1.98 1.71a8.1 8.1 0 0 0-7.04 0L7.4 5.43c-.25-.23-.63-.25-.89-.04-.25.22-.31.6-.15.91l1.84 3.18A7.96 7.96 0 0 0 4 16.5h16a7.96 7.96 0 0 0-2.4-7.02zM9.5 14.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>
)

const CTA = () => (
  <section
    id={DOWNLOAD_SECTION_ID}
    className="sf-cta"
    aria-label="Download the Score.fit app"
  >
    <Container className="sf-cta__inner">
      <div className="sf-cta__phone">
        <img
          src={APP_IMAGE}
          alt="Score.fit app preview"
          loading="lazy"
          decoding="async"
          data-aos="fade-up"
          data-aos-duration="700"
        />
      </div>

      <div className="sf-cta__body">
        <h2 className="sf-cta__heading">Download the app</h2>
        <p className="sf-cta__text">
          Take {SITE_CONFIG.name} with you — track workouts, climb your score,
          and train smarter on the go.
        </p>

        <div className="sf-cta__stores">
          <a
            className="sf-cta__store"
            href="#download-ios"
            aria-label="Download for iOS"
            onClick={(e) => e.preventDefault()}
          >
            <AppleIcon />
            <span className="sf-cta__store-copy">
              <small>Download for</small>
              <strong>iOS</strong>
            </span>
          </a>

          <a
            className="sf-cta__store"
            href="#download-android"
            aria-label="Download for Android"
            onClick={(e) => e.preventDefault()}
          >
            <AndroidIcon />
            <span className="sf-cta__store-copy">
              <small>Download for</small>
              <strong>Android</strong>
            </span>
          </a>
        </div>
      </div>
    </Container>
  </section>
)

export default CTA
