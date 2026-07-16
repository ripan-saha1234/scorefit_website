import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import PageBanner from '../../components/layout/PageBanner'
import Container from '../../components/common/Container'
import './Terms.css'

const Terms = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.TERMS).title
    pageEnter(document.querySelector('.sf-page-terms'))
  }, [])

  return (
    <div className="sf-page-terms">
      <PageBanner title="Terms of Service" description="Membership and platform terms for Score.fit." breadcrumbs={[{ label: 'Home', path: ROUTES.HOME }, { label: 'Terms of Service' }]} />
      <Container><p>Membership and platform terms for Score.fit.</p></Container>
    </div>
  )
}

export default Terms
