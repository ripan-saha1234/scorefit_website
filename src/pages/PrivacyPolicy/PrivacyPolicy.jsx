import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import PageBanner from '../../components/layout/PageBanner'
import Container from '../../components/common/Container'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.PRIVACY).title
    pageEnter(document.querySelector('.sf-page-privacypolicy'))
  }, [])

  return (
    <div className="sf-page-privacypolicy">
      <PageBanner title="Privacy Policy" description="How we handle and protect your data." breadcrumbs={[{ label: 'Home', path: ROUTES.HOME }, { label: 'Privacy Policy' }]} />
      <Container><p>How we handle and protect your data.</p></Container>
    </div>
  )
}

export default PrivacyPolicy
