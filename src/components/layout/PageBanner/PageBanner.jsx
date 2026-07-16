import Breadcrumb from '../../common/Breadcrumb'
import Container from '../../common/Container'
import './PageBanner.css'

const PageBanner = ({ title, description, breadcrumbs = [] }) => (
  <section className="sf-page-banner">
    <Container>
      {breadcrumbs.length ? <Breadcrumb items={breadcrumbs} /> : null}
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </Container>
  </section>
)

export default PageBanner
