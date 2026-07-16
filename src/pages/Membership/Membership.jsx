import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import PageBanner from '../../components/layout/PageBanner'
import Pricing from '../../components/sections/Pricing'
import './Membership.css'

const Membership = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.MEMBERSHIP).title
    pageEnter(document.querySelector('.sf-page-membership'))
  }, [])

  return (
    <div className="sf-page-membership">
      <PageBanner title="Membership" description="Choose the plan that matches your training goals." breadcrumbs={[{ label: 'Home', path: ROUTES.HOME }, { label: 'Membership' }]} />
      <Pricing />
    </div>
  )
}

export default Membership
