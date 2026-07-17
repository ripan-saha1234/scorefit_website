import { useEffect } from 'react'
import { pageEnter } from '../../animations/pageTransition'
import { getPageSeo } from '../../config/seoConfig'
import { ROUTES } from '../../routes/RouteConstants'
import Hero from '../../components/sections/Hero'
import ScoreJourney from '../../components/sections/ScoreJourney'
import AppShowcase from '../../components/sections/AppShowcase'
import FeatureShowcase from '../../components/sections/FeatureShowcase'
import NutritionShowcase from '../../components/sections/NutritionShowcase'
import About from '../../components/sections/About'
import Services from '../../components/sections/Services'
import Pricing from '../../components/sections/Pricing'
import Trainers from '../../components/sections/Trainers'
import Testimonials from '../../components/sections/Testimonials'
import FAQ from '../../components/sections/FAQ'
import CTA from '../../components/sections/CTA'
import './Home.css'

const Home = () => {
  useEffect(() => {
    document.title = getPageSeo(ROUTES.HOME).title
    pageEnter(document.querySelector('.sf-page-home'))
  }, [])

  return (
    <div className="sf-page-home">
      <Hero />
      <ScoreJourney />
      <AppShowcase />
      <FeatureShowcase />
      <NutritionShowcase />
      <About />
      <Services />
      <Pricing />
      <Trainers />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  )
}

export default Home
