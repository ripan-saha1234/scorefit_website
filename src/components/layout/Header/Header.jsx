import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '../../../config/siteConfig'
import { ROUTES } from '../../../routes/RouteConstants'
import { useScroll } from '../../../context/ScrollContext'
import { useTheme } from '../../../context/ThemeContext'
import { useApp } from '../../../context/AppContext'
import Button from '../../common/Button'
import Navbar from '../Navbar'
import './Header.css'

const Header = () => {
  const { isScrolled } = useScroll()
  const { toggleTheme } = useTheme()
  const { toggleMobileMenu } = useApp()

  return (
    <header className={`sf-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="sf-header__inner">
        <Link to={ROUTES.HOME} className="sf-header__brand">{SITE_CONFIG.name}</Link>
        <Navbar />
        <div className="sf-header__actions">
          <button type="button" className="sf-header__theme" onClick={toggleTheme} aria-label="Toggle theme">◐</button>
          <Button as={Link} to={ROUTES.JOIN} size="sm">{SITE_CONFIG.cta.primary}</Button>
          <button type="button" className="sf-header__menu" onClick={toggleMobileMenu} aria-label="Open menu">☰</button>
        </div>
      </div>
    </header>
  )
}

export default Header
