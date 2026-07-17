import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useLenis from '../../hooks/useLenis'
import ScrollProgress from '../common/ScrollProgress'
import ParticlesBackground from '../ui/ParticlesBackground'
import Header from './Header'
import MobileMenu from './MobileMenu'
import Footer from './Footer'
import './Layout.css'

const Layout = () => {
  useLenis()
  const { pathname } = useLocation()

  // Reset scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="sf-layout">
      <ParticlesBackground />
      <ScrollProgress />
      <Header />
      <MobileMenu />
      <main className="sf-layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
