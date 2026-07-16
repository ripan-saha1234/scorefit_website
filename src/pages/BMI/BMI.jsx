import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import PageBanner from '../../components/layout/PageBanner'
import Container from '../../components/common/Container'
import './BMI.css'

const BMI = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.BMI).title
    pageEnter(document.querySelector('.sf-page-bmi'))
  }, [])

  return (
    <div className="sf-page-bmi">
      <PageBanner title="BMI Calculator" description="Estimate your BMI and start planning your training baseline." breadcrumbs={[{ label: 'Home', path: ROUTES.HOME }, { label: 'BMI Calculator' }]} />
      <Container><form className="sf-bmi-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="weight">Weight (kg)</label>
        <input id="weight" type="number" min="1" />
        <label htmlFor="height">Height (cm)</label>
        <input id="height" type="number" min="1" />
        <p>Enter values to calculate BMI on the next iteration.</p>
      </form></Container>
    </div>
  )
}

export default BMI
