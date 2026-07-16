import { SITE_CONFIG } from './siteConfig'
import { ROUTES } from '../routes/RouteConstants'

export const SEO_CONFIG = {
  default: {
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    ogImage: '/og-image.jpg',
  },
  pages: {
    [ROUTES.HOME]: {
      title: `${SITE_CONFIG.name} | Home`,
      description: SITE_CONFIG.description,
    },
    [ROUTES.ABOUT]: {
      title: `About | ${SITE_CONFIG.name}`,
      description: 'Learn about Score.fit, our coaching philosophy, and the community behind the brand.',
    },
    [ROUTES.MEMBERSHIP]: {
      title: `Membership | ${SITE_CONFIG.name}`,
      description: 'Compare Score.fit membership plans and find the right training package for your goals.',
    },
    [ROUTES.TRAINERS]: {
      title: `Trainers | ${SITE_CONFIG.name}`,
      description: 'Meet certified Score.fit trainers specializing in strength, mobility, and performance.',
    },
    [ROUTES.CLASSES]: {
      title: `Classes | ${SITE_CONFIG.name}`,
      description: 'Explore Score.fit group classes designed for every fitness level.',
    },
    [ROUTES.BMI]: {
      title: `BMI Calculator | ${SITE_CONFIG.name}`,
      description: 'Calculate your BMI and get a starting point for your Score.fit training plan.',
    },
    [ROUTES.GALLERY]: {
      title: `Gallery | ${SITE_CONFIG.name}`,
      description: 'See the Score.fit training floor, community, and athlete moments.',
    },
    [ROUTES.TESTIMONIALS]: {
      title: `Testimonials | ${SITE_CONFIG.name}`,
      description: 'Real stories from Score.fit members who transformed their training.',
    },
    [ROUTES.BLOG]: {
      title: `Blog | ${SITE_CONFIG.name}`,
      description: 'Training tips, recovery guides, and performance insights from Score.fit coaches.',
    },
    [ROUTES.CONTACT]: {
      title: `Contact | ${SITE_CONFIG.name}`,
      description: 'Get in touch with the Score.fit team for memberships, coaching, and support.',
    },
    [ROUTES.JOIN]: {
      title: `Join | ${SITE_CONFIG.name}`,
      description: 'Join Score.fit and start your free trial today.',
    },
    [ROUTES.PRIVACY]: {
      title: `Privacy Policy | ${SITE_CONFIG.name}`,
      description: 'How Score.fit collects, uses, and protects your personal information.',
    },
    [ROUTES.TERMS]: {
      title: `Terms of Service | ${SITE_CONFIG.name}`,
      description: 'Terms and conditions for using Score.fit services and memberships.',
    },
  },
}

export const getPageSeo = (path) => SEO_CONFIG.pages[path] ?? SEO_CONFIG.default
