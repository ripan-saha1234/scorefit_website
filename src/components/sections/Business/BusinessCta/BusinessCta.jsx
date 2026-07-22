import { Link } from 'react-router-dom'
import { BUSINESS_CTA } from '../../../../data/businessData'
import { ROUTES } from '../../../../routes/RouteConstants'
import Button from '../../../common/Button'
import Container from '../../../common/Container'
import './BusinessCta.css'

const BusinessCta = () => (
  <section className="sf-biz-cta" aria-label="Get started with Score.fit Business">
    <Container>
      <div className="sf-biz-cta__panel">
        <h2 className="sf-biz-cta__title">{BUSINESS_CTA.title}</h2>
        <p className="sf-biz-cta__copy">{BUSINESS_CTA.description}</p>
        <div className="sf-biz-cta__actions">
          <Button as={Link} to={ROUTES.JOIN} size="lg">
            {BUSINESS_CTA.primaryCta}
          </Button>
          <Button as={Link} to={ROUTES.CONTACT} variant="secondary" size="lg">
            {BUSINESS_CTA.secondaryCta}
          </Button>
        </div>
      </div>
    </Container>
  </section>
)

export default BusinessCta
