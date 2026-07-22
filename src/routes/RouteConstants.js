export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  MEMBERSHIP: '/membership',
  BUSINESS: '/business',
  TRAINERS: '/trainers',
  CLASSES: '/classes',
  BMI: '/bmi',
  GALLERY: '/gallery',
  TESTIMONIALS: '/testimonials',
  BLOG: '/blog',
  CONTACT: '/contact',
  JOIN: '/join',
  PRIVACY: '/privacy-policy',
  TERMS: '/terms',
  NOT_FOUND: '*',
}

export const PUBLIC_ROUTES = Object.values(ROUTES).filter(
  (route) => route !== ROUTES.NOT_FOUND,
)
