import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes/RouteConstants'
import { SITE_CONFIG } from '../../../config/siteConfig'
import Container from '../../common/Container'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="sf-footer">
      <div className="sf-footer__divider" aria-hidden="true" />
      
      <Container>
        <div className="sf-footer__grid">
          <div className="sf-footer__brand-col">
            <h2 className="sf-footer__brand">{SITE_CONFIG.name}</h2>
            <p className="sf-footer__description">{SITE_CONFIG.description}</p>
            <div className="sf-footer__socials">
              {Object.entries(SITE_CONFIG.social || {}).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="sf-footer__social-link" aria-label={`Visit our ${platform}`}>
                  <span className="sf-footer__social-icon" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="sf-footer__links-col">
            <h3>Explore</h3>
            <nav>
              <Link to={ROUTES.HOME}>Home</Link>
              <Link to={ROUTES.ABOUT}>About</Link>
              <Link to={ROUTES.SERVICES}>Services</Link>
              <Link to={ROUTES.TRAINERS}>Trainers</Link>
            </nav>
          </div>

          <div className="sf-footer__links-col">
            <h3>Membership</h3>
            <nav>
              <Link to={ROUTES.MEMBERSHIP}>Plans & Pricing</Link>
              <Link to={ROUTES.SCHEDULE}>Class Schedule</Link>
              <Link to={ROUTES.FAQ}>FAQ</Link>
            </nav>
          </div>

          <div className="sf-footer__links-col">
            <h3>Contact</h3>
            <address>
              <p>{SITE_CONFIG.email}</p>
              <p>{SITE_CONFIG.phone}</p>
              <p>{SITE_CONFIG.address}</p>
            </address>
          </div>
        </div>

        <div className="sf-footer__bottom">
          <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="sf-footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
