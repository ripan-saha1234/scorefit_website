import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import PageBanner from '../../components/layout/PageBanner'
import TestimonialsSection from '../../components/sections/Testimonials'
import './Testimonials.css'

const Testimonials = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.TESTIMONIALS).title
    pageEnter(document.querySelector('.sf-page-testimonials'))
  }, [])

  return (
    <div className="sf-page-testimonials">
      <PageBanner title="Testimonials" description="Stories from members who train with us." breadcrumbs={[{ label: 'Home', path: ROUTES.HOME }, { label: 'Testimonials' }]} />
      <TestimonialsSection />
    </div>
  )
}

export default Testimonials
