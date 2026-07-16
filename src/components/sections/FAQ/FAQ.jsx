import { FAQ_ITEMS } from '../../../data/faqData'
import Container from '../../common/Container'
import SectionTitle from '../../common/SectionTitle'
import Accordion from '../../common/Accordion'
import './FAQ.css'

const FAQ = () => (
  <section className="sf-faq">
    <Container>
      <SectionTitle title="Frequently asked questions" />
      <Accordion items={FAQ_ITEMS} />
    </Container>
  </section>
)

export default FAQ
