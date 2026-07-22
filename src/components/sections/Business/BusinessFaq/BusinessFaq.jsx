import { BUSINESS_FAQ } from '../../../../data/businessData'
import Accordion from '../../../common/Accordion'
import Container from '../../../common/Container'
import SectionTitle from '../../../common/SectionTitle'
import './BusinessFaq.css'

const BusinessFaq = () => (
  <section className="sf-biz-faq" aria-label="Business FAQ">
    <Container className="sf-biz-faq__inner">
      <SectionTitle
        eyebrow="FAQ"
        title="Questions teams ask before they roll out"
        align="center"
      />
      <Accordion items={BUSINESS_FAQ} />
    </Container>
  </section>
)

export default BusinessFaq
