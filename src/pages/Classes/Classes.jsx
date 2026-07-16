import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import PageBanner from '../../components/layout/PageBanner'
import ClassesSection from '../../components/sections/Classes'
import './Classes.css'

const Classes = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.CLASSES).title
    pageEnter(document.querySelector('.sf-page-classes'))
  }, [])

  return (
    <div className="sf-page-classes">
      <PageBanner title="Classes" description="Structured sessions for every fitness level." breadcrumbs={[{ label: 'Home', path: ROUTES.HOME }, { label: 'Classes' }]} />
      <ClassesSection />
    </div>
  )
}

export default Classes
