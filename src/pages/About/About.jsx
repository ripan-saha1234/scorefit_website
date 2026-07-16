import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import PageBanner from '../../components/layout/PageBanner'
import Container from '../../components/common/Container'
import './About.css'

const About = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.ABOUT).title
    pageEnter(document.querySelector('.sf-page-about'))
  }, [])

  return (
    <div className="sf-page-about">
      <PageBanner title="About Score.fit" description="Our coaching philosophy, facility, and community." breadcrumbs={[{ label: 'Home', path: ROUTES.HOME }, { label: 'About Score.fit' }]} />
      <Container><p>Our coaching philosophy, facility, and community.</p></Container>
    </div>
  )
}

export default About
