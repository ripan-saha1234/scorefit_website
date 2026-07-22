import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BUSINESS_PLANS } from '../../../../data/businessData'
import { formatCurrency } from '../../../../utils/formatters'
import { ROUTES } from '../../../../routes/RouteConstants'
import Button from '../../../common/Button'
import Container from '../../../common/Container'
import SectionTitle from '../../../common/SectionTitle'
import './BusinessPricing.css'

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M13.5 4.5L6.5 11.5L2.5 7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const BusinessPricing = () => {
  const [billingCycle, setBillingCycle] = useState('yearly')

  return (
    <section className="sf-biz-pricing" id="pricing" aria-label="Business pricing plans">
      <Container>
        <SectionTitle
          eyebrow="Pricing"
          title="Plans built for every team size"
          description="Transparent per-seat pricing. Switch billing anytime — yearly saves more."
          align="center"
        />

        <div className="sf-biz-pricing__toggle">
          <div className="sf-biz-pricing__toggle-track" role="group" aria-label="Billing cycle">
            <button
              type="button"
              className={billingCycle === 'monthly' ? 'is-active' : ''}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              type="button"
              className={billingCycle === 'yearly' ? 'is-active' : ''}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
            </button>
            <span
              className="sf-biz-pricing__toggle-indicator"
              style={{
                transform:
                  billingCycle === 'yearly' ? 'translateX(100%)' : 'translateX(0)',
              }}
            />
          </div>
          {billingCycle === 'yearly' ? (
            <span className="sf-biz-pricing__save">Save ~17%</span>
          ) : null}
        </div>

        <div className="sf-biz-pricing__grid">
          {BUSINESS_PLANS.map((plan) => {
            const isCustom = plan.monthlyPrice == null
            const price = isCustom
              ? plan.priceLabel
              : formatCurrency(
                  billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice,
                )

            return (
              <article
                key={plan.id}
                className={`sf-biz-pricing__card${plan.highlighted ? ' is-highlighted' : ''}`}
              >
                {plan.highlighted ? (
                  <span className="sf-biz-pricing__badge">{plan.tagline}</span>
                ) : (
                  <p className="sf-biz-pricing__tagline">{plan.tagline}</p>
                )}

                <h3 className="sf-biz-pricing__name">{plan.name}</h3>

                <p className="sf-biz-pricing__price">
                  <span className="sf-biz-pricing__amount">{price}</span>
                  {!isCustom ? (
                    <span className="sf-biz-pricing__suffix">{plan.priceSuffix}</span>
                  ) : null}
                </p>

                <p className="sf-biz-pricing__desc">{plan.description}</p>

                <ul className="sf-biz-pricing__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  as={Link}
                  to={plan.id === 'enterprise' ? ROUTES.CONTACT : ROUTES.JOIN}
                  variant={plan.ctaVariant}
                  className="sf-biz-pricing__cta"
                >
                  {plan.cta}
                </Button>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default BusinessPricing
