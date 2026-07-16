import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import PageBanner from '../../components/layout/PageBanner'
import TrainersSection from '../../components/sections/Trainers'
import './Trainers.css'

const Trainers = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.TRAINERS).title
    pageEnter(document.querySelector('.sf-page-trainers'))
  }, [])

  return (
    <div className="sf-page-trainers">
      <PageBanner title="Trainers" description="Meet the coaches behind your programming." breadcrumbs={[{ label: 'Home', path: ROUTES.HOME }, { label: 'Trainers' }]} />
      <TrainersSection />
    </div>
  )
}

export default Trainers
