import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout'
import Loader from '../components/common/Loader'
import { ROUTES } from './RouteConstants'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Membership = lazy(() => import('../pages/Membership'))
const Trainers = lazy(() => import('../pages/Trainers'))
const Classes = lazy(() => import('../pages/Classes'))
const BMI = lazy(() => import('../pages/BMI'))
const Gallery = lazy(() => import('../pages/Gallery'))
const Testimonials = lazy(() => import('../pages/Testimonials'))
const Blog = lazy(() => import('../pages/Blog'))
const Contact = lazy(() => import('../pages/Contact'))
const Join = lazy(() => import('../pages/Join'))
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'))
const Terms = lazy(() => import('../pages/Terms'))
const NotFound = lazy(() => import('../pages/NotFound'))

const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.MEMBERSHIP} element={<Membership />} />
          <Route path={ROUTES.TRAINERS} element={<Trainers />} />
          <Route path={ROUTES.CLASSES} element={<Classes />} />
          <Route path={ROUTES.BMI} element={<BMI />} />
          <Route path={ROUTES.GALLERY} element={<Gallery />} />
          <Route path={ROUTES.TESTIMONIALS} element={<Testimonials />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.JOIN} element={<Join />} />
          <Route path={ROUTES.PRIVACY} element={<PrivacyPolicy />} />
          <Route path={ROUTES.TERMS} element={<Terms />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default AppRoutes
