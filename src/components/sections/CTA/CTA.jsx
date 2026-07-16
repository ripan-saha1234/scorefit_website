import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes/RouteConstants'
import { SITE_CONFIG } from '../../../config/siteConfig'
import Container from '../../common/Container'
import Button from '../../common/Button'
import './CTA.css'

const CTA = () => (
  <section className="sf-cta">
    {/* Decorative background effects */}
    <div className="sf-cta__bg-glow" aria-hidden="true" />
    <div className="sf-cta__particles" aria-hidden="true" />

    <Container className="sf-cta__inner">
      <div className="sf-cta__content">
        <h2>Ready to score your <span className="text-gradient">next PR?</span></h2>
        <p>Join Score.fit and train with coaches who care about your progress. Stop guessing, start scoring.</p>
        <div className="sf-cta__actions">
          <Button as={Link} to={ROUTES.JOIN} size="lg">{SITE_CONFIG.cta.primary}</Button>
        </div>
      </div>
    </Container>
  </section>
)

export default CTA
