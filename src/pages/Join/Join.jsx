import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import PageBanner from '../../components/layout/PageBanner'
import Newsletter from '../../components/sections/Newsletter'
import CTA from '../../components/sections/CTA'
import './Join.css'

const Join = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.JOIN).title
    pageEnter(document.querySelector('.sf-page-join'))
  }, [])

  return (
    <div className="sf-page-join">
      <PageBanner title="Join Score.fit" description="Start your free trial and begin training with us." breadcrumbs={[{ label: 'Home', path: ROUTES.HOME }, { label: 'Join Score.fit' }]} />
      <><Newsletter /><CTA /></>
    </div>
  )
}

export default Join
