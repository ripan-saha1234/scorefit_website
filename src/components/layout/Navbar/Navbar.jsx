import { NavLink } from 'react-router-dom'
import { PRIMARY_NAV } from '../../../data/navigationData'
import './Navbar.css'

const Navbar = () => (
  <nav className="sf-navbar" aria-label="Primary">
    <ul className="sf-navbar__list">
      {PRIMARY_NAV.map((item) => (
        <li key={item.path}>
          <NavLink to={item.path} className={({ isActive }) => `sf-navbar__link ${isActive ? 'is-active' : ''}`}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navbar
