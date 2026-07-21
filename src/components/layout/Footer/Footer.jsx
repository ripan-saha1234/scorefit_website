import { Link } from 'react-router-dom'
import { ROUTES } from '../../../routes/RouteConstants'
import { SITE_CONFIG } from '../../../config/siteConfig'
import { MOBILE_NAV } from '../../../data/navigationData'
import Container from '../../common/Container'
import SocialIcon, { SOCIAL_LABELS } from '../../common/SocialIcon'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="sf-footer">
      <div className="sf-footer__divider" aria-hidden="true" />
      
      <Container>
        <div className="sf-footer__grid">
          <div className="sf-footer__brand-col">
            <Link to={ROUTES.HOME} className="sf-footer__brand" aria-label={SITE_CONFIG.name}>
              <img
                src="/logo.png"
                alt=""
                className="sf-footer__logo"
                width={48}
                height={48}
              />
              <span className="sf-footer__wordmark">
                <span className="sf-footer__wordmark-name">ScoreFit</span>
              </span>
            </Link>
            <p className="sf-footer__description">{SITE_CONFIG.description}</p>
            <div className="sf-footer__socials">
              {Object.entries(SITE_CONFIG.social || {}).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sf-footer__social-link"
                  aria-label={`Visit our ${SOCIAL_LABELS[platform] || platform}`}
                >
                  <SocialIcon name={platform} className="sf-footer__social-icon" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="sf-footer__links-col">
            <h3>Quick Links</h3>
            <nav>
              {MOBILE_NAV.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
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
        </div>
      </Container>
    </footer>
  )
}

export default Footer
