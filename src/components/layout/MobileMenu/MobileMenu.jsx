import { NavLink } from 'react-router-dom'
import { PRIMARY_NAV, FOOTER_NAV } from '../../../data/navigationData'
import { useApp } from '../../../context/AppContext'
import './MobileMenu.css'

const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useApp()
  if (!isMobileMenuOpen) return null

  return (
    <div className="sf-mobile-menu">
      <button type="button" className="sf-mobile-menu__backdrop" aria-label="Close menu" onClick={closeMobileMenu} />
      <aside className="sf-mobile-menu__panel">
        <nav aria-label="Mobile">
          <ul>
            {[...PRIMARY_NAV, ...FOOTER_NAV].map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} onClick={closeMobileMenu}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default MobileMenu
