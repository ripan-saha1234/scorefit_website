import { useEffect, useRef } from 'react'
import { PRICING_PLANS } from '../../../data/pricingData'
import { formatCurrency } from '../../../utils/formatters'
import { useApp } from '../../../context/AppContext'
import Container from '../../common/Container'
import SectionTitle from '../../common/SectionTitle'
import Card from '../../common/Card'
import Badge from '../../common/Badge'
import { animateCards } from '../../../animations/scrollAnimations'
import './Pricing.css'

const Pricing = () => {
  const { billingCycle, setBillingCycle } = useApp()
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return undefined
    const cleanup = animateCards(gridRef.current.querySelectorAll('.sf-card'))
    return cleanup
  }, [])

  return (
    <section className="sf-pricing">
      <Container>
        <SectionTitle eyebrow="Membership" title="Plans that scale with your goals" align="center" />

        {/* Toggle switch */}
        <div className="sf-pricing__toggle">
          <div className="sf-pricing__toggle-track">
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
              className="sf-pricing__toggle-indicator"
              style={{ transform: billingCycle === 'yearly' ? 'translateX(100%)' : 'translateX(0)' }}
            />
          </div>
          {billingCycle === 'yearly' && <span className="sf-pricing__save-badge">Save 20%</span>}
        </div>

        <div className="sf-pricing__grid" ref={gridRef}>
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice
            return (
              <Card key={plan.id} className={`sf-pricing__card ${plan.highlighted ? 'is-highlighted' : ''}`}>
                {plan.highlighted ? <Badge>Most Popular</Badge> : null}
                <h3>{plan.name}</h3>
                <p className="sf-pricing__price">
                  {formatCurrency(price)}
                  <span>/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </p>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Pricing
