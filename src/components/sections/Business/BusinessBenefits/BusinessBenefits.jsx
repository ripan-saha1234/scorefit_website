import { BUSINESS_BENEFITS } from '../../../../data/businessData'
import Container from '../../../common/Container'
import SectionTitle from '../../../common/SectionTitle'
import './BusinessBenefits.css'

const ICONS = {
  measurable: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  simple: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="3.5" width="10" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 17.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  admin: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 18V7.5A1.5 1.5 0 0 1 5.5 6H10l2 2h6.5A1.5 1.5 0 0 1 20 9.5V18a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  secure: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 5.5 6.5v4.2c0 4.2 2.9 8.1 6.5 9.3 3.6-1.2 6.5-5.1 6.5-9.3V6.5L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

const BusinessBenefits = () => (
  <section className="sf-biz-benefits" aria-label="Why Score.fit Business">
    <Container>
      <SectionTitle
        eyebrow="Why Business"
        title="Wellness programs people actually use"
        description="Designed for HR leads and employees — measurable, simple, and secure."
        align="center"
      />

      <div className="sf-biz-benefits__grid">
        {BUSINESS_BENEFITS.map((item) => (
          <article key={item.id} className="sf-biz-benefits__card">
            <span className="sf-biz-benefits__icon">{ICONS[item.id]}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Container>
  </section>
)

export default BusinessBenefits
