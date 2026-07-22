import { Link } from 'react-router-dom'
import { BUSINESS_HERO } from '../../../../data/businessData'
import { ROUTES } from '../../../../routes/RouteConstants'
import Button from '../../../common/Button'
import Container from '../../../common/Container'
import './BusinessHero.css'

const BusinessHero = () => (
  <section className="sf-biz-hero" aria-label="Score.fit Business">
    <div className="sf-biz-hero__glow" aria-hidden="true" />
    <div className="sf-biz-hero__grid" aria-hidden="true" />

    <Container className="sf-biz-hero__inner">
      <p className="sf-biz-hero__eyebrow">{BUSINESS_HERO.eyebrow}</p>
      <h1 className="sf-biz-hero__title">{BUSINESS_HERO.title}</h1>
      <p className="sf-biz-hero__copy">{BUSINESS_HERO.description}</p>

      <div className="sf-biz-hero__actions">
        <Button as={Link} to={ROUTES.JOIN} size="lg">
          {BUSINESS_HERO.primaryCta}
        </Button>
        <Button as={Link} to={ROUTES.CONTACT} variant="secondary" size="lg">
          {BUSINESS_HERO.secondaryCta}
        </Button>
      </div>

      <a href="#insights" className="sf-biz-hero__scroll">
        {BUSINESS_HERO.scrollLabel}
      </a>
    </Container>
  </section>
)

export default BusinessHero
