import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import PageBanner from '../../components/layout/PageBanner'
import ContactSection from '../../components/sections/Contact'
import './Contact.css'

const Contact = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.CONTACT).title
    pageEnter(document.querySelector('.sf-page-contact'))
  }, [])

  return (
    <div className="sf-page-contact">
      <PageBanner title="Contact" description="Reach the Score.fit team for support and tours." breadcrumbs={[{ label: 'Home', path: ROUTES.HOME }, { label: 'Contact' }]} />
      <ContactSection />
    </div>
  )
}

export default Contact
