import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import {
  BusinessHero,
  BusinessZoomGallery,
  BusinessPortalShowcase,
  BusinessPricing,
  BusinessComparison,
  BusinessBenefits,
  BusinessFaq,
  BusinessCta,
} from '../../components/sections/Business'
import './Business.css'

const Business = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.BUSINESS).title
    pageEnter(document.querySelector('.sf-page-business'))
  }, [])

  return (
    <div className="sf-page-business">
      <BusinessHero />
      <BusinessZoomGallery />
      <BusinessPortalShowcase />
      <BusinessBenefits />
      <BusinessPricing />
      <BusinessComparison />
      <BusinessFaq />
      <BusinessCta />
    </div>
  )
}

export default Business
