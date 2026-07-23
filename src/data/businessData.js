export const BUSINESS_HERO = {
  eyebrow: 'Score.fit for Business',
  title: 'Fitness that scales with your team',
  description:
    'Give every employee a measurable health score, guided training, and coaching — with an admin portal that shows engagement, challenges, and impact.',
  primaryCta: 'Start free trial',
  secondaryCta: 'Talk to sales',
  scrollLabel: 'See portal insights',
}

/**
 * Portal showcase blocks.
 * Set `image` to a public path (e.g. '/business/dashboard.png') when assets are ready.
 * Leave `image: null` to use the built-in UI placeholder.
 */
export const BUSINESS_PORTAL_INSIGHTS = {
  eyebrow: 'Portal insights',
  title: 'See exactly what your team gets',
  description:
    'Explore an intuitive platform that simplifies member management, billing, attendance, staff operations, reports, and business analytics—all from a single dashboard.',
  items: [
    {
      id: 'dashboard',
      layout: 'media-right',
      eyebrow: 'Admin dashboard',
      title: 'Complete Business Overview',
      description:
        'Monitor revenue, memberships, renewals, attendance, and business performance from one powerful dashboard designed for modern fitness businesses.',
      points: [
        'Real-time revenue tracking',
        'Member & renewal management',
        'Interactive analytics dashboard',
      ],
      image: '/dashboard_design.png',
      imageAlt: 'Score.fit business admin dashboard',
      placeholder: {
        label: 'Admin Portal',
        title: 'Team Overview',
        subtitle: 'Dashboard',
        type: 'dashboard',
      },
    },
    {
      id: 'scores',
      layout: 'media-left',
      eyebrow: 'MEMBER MANAGEMENT',
      title: 'Manage Every Member with Ease',
      description:
        'Keep track of active, inactive, and expired memberships in one place. Quickly manage member profiles, monitor membership status, and stay on top of renewals with an organized dashboard.',
      points: [
        'Active & expired member tracking',
        'Smart membership status management',
        'Quick member search & filtering',
      ],
      image: '/members_dashboard.png',
      imageAlt: 'Employee fitness score insights view',
      placeholder: {
        label: 'Insights',
        title: 'Score Analytics',
        subtitle: 'Performance',
        type: 'scores',
      },
    },
    {
      id: 'challenges',
      layout: 'media-right',
      eyebrow: 'ORDER MANAGEMENT',
      title: 'Track Every Order with Confidence',
      description:
        'Manage customer orders, invoices, payments, and order status from a single dashboard. Stay organized with real-time updates and complete transaction visibility.',
      points: [
        'Order & invoice management',
        'Payment status tracking',
        'Real-time order monitoring',
      ],
      image: '/orders_dashboard.png',
      imageAlt: 'Team challenges portal screen',
      placeholder: {
        label: 'Challenges',
        title: 'Spring Push',
        subtitle: 'Active challenge',
        type: 'challenges',
      },
    },
    {
      id: 'reports',
      layout: 'media-left',
      eyebrow: 'POS & INVENTORY',
      title: 'Sell Smarter, Stock Better',
      description:
        'Manage memberships, products, services, and inventory from one powerful POS system. Process sales faster, monitor stock levels, and deliver a seamless checkout experience.',
      points: [
        'Unified POS & product management',
        'Real-time inventory tracking',
        'Fast billing & checkout experience',
      ],
      image: '/products_dashboard.png',
      imageAlt: 'Business wellness report preview',
      placeholder: {
        label: 'Reports',
        title: 'Q2 Wellness Report',
        subtitle: 'Export ready',
        type: 'reports',
      },
    },
  ],
}

export const BUSINESS_ZOOM_GALLERY = {
  eyebrow: 'INSIDE THE PLATFORM',
  title: 'Every Screen. Built to Perform',
  description:
    'View active memberships, attendance trends, and customer engagement to improve retention.',
  images: [
    {
      id: 'shot-1',
      src: '/total_revenue.png',
      alt: 'Total revenue portal insight',
      label: 'Revenue',
      position: 'tl',
      fit: 'wide',
    },
    {
      id: 'shot-2',
      src: '/new_members.png',
      alt: 'New members portal insight',
      label: 'New members',
      position: 'tr',
      fit: 'wide',
    },
    {
      id: 'shot-3',
      src: '/pt_revenue.png',
      alt: 'Score.fit mobile experience',
      label: null,
      position: 'ml',
      placeholderTone: 'dark',
    },
    {
      id: 'shot-4',
      src: '/collect_rate.png',
      alt: 'Team challenges preview',
      label: 'Challenges',
      position: 'mr',
      placeholderTone: 'green',
    },
    {
      id: 'shot-5',
      src: '/renewal.png',
      alt: 'Workplace wellness atmosphere',
      label: 'Culture',
      position: 'bl',
      placeholderTone: 'dark',
    },
    {
      id: 'shot-6',
      src: '/active_members.png',
      alt: 'Reports and insights preview',
      label: 'Reports',
      position: 'br',
      placeholderTone: 'dark',
    },
  ],
}

export const BUSINESS_PLANS = [
  {
    id: 'teams',
    name: 'Teams',
    tagline: 'For growing companies',
    monthlyPrice: 12,
    yearlyPrice: 10,
    priceSuffix: 'seat / mo',
    description: 'Core Score.fit experience for small to mid-size teams getting started with workplace wellness.',
    features: [
      'Up to 50 seats',
      'Personal fitness scores',
      'Team progress dashboard',
      'Group challenges',
      'Email support',
    ],
    cta: 'Get started',
    ctaVariant: 'secondary',
    highlighted: false,
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Most popular',
    monthlyPrice: 22,
    yearlyPrice: 18,
    priceSuffix: 'seat / mo',
    description: 'Advanced analytics, manager insights, and priority coaching for organizations that take wellness seriously.',
    features: [
      'Unlimited seats',
      'Manager & HR insights',
      'Custom challenges',
      'Nutrition & recovery modules',
      'Priority chat support',
      'SSO (Google / Microsoft)',
    ],
    cta: 'Start free trial',
    ctaVariant: 'primary',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For large organizations',
    monthlyPrice: null,
    yearlyPrice: null,
    priceLabel: 'Custom',
    priceSuffix: '',
    description: 'Dedicated success, security reviews, and tailored programs for complex multi-site deployments.',
    features: [
      'Everything in Business',
      'Dedicated success manager',
      'Custom SLAs & contracts',
      'API & HRIS integrations',
      'Onboarding workshops',
      'Advanced security & audit logs',
    ],
    cta: 'Contact sales',
    ctaVariant: 'secondary',
    highlighted: false,
  },
]

export const BUSINESS_COMPARISON = {
  eyebrow: 'Compare plans',
  title: 'Everything you need to choose with confidence',
  columns: [
    { id: 'teams', label: 'Teams' },
    { id: 'business', label: 'Business' },
    { id: 'enterprise', label: 'Enterprise' },
  ],
  rows: [
    {
      feature: 'Seat limit',
      teams: 'Up to 50',
      business: 'Unlimited',
      enterprise: 'Unlimited',
    },
    {
      feature: 'Fitness score tracking',
      teams: true,
      business: true,
      enterprise: true,
    },
    {
      feature: 'Team challenges',
      teams: 'Standard',
      business: 'Custom',
      enterprise: 'Custom + branded',
    },
    {
      feature: 'Manager dashboard',
      teams: false,
      business: true,
      enterprise: true,
    },
    {
      feature: 'SSO',
      teams: false,
      business: true,
      enterprise: true,
    },
    {
      feature: 'API / HRIS sync',
      teams: false,
      business: false,
      enterprise: true,
    },
    {
      feature: 'Dedicated success manager',
      teams: false,
      business: false,
      enterprise: true,
    },
    {
      feature: 'Support',
      teams: 'Email',
      business: 'Priority chat',
      enterprise: '24/7 + SLA',
    },
  ],
}

export const BUSINESS_BENEFITS = [
  {
    id: 'measurable',
    title: 'Measurable outcomes',
    description:
      'Track engagement, score improvements, and participation with clear dashboards your leadership can trust.',
  },
  {
    id: 'simple',
    title: 'Simple for employees',
    description:
      'A clean mobile experience that feels personal — not another corporate portal no one opens.',
  },
  {
    id: 'admin',
    title: 'Built for admins',
    description:
      'Invite seats, manage billing, run challenges, and export reports without chasing IT tickets.',
  },
  {
    id: 'secure',
    title: 'Secure by default',
    description:
      'SSO, role-based access, and enterprise-grade controls so wellness data stays protected.',
  },
]

export const BUSINESS_FAQ = [
  {
    id: 'trial',
    question: 'Is there a free trial for Business plans?',
    answer:
      'Yes. Teams and Business plans include a 14-day free trial with full feature access. No credit card required to start.',
  },
  {
    id: 'seats',
    question: 'Can we add or remove seats mid-cycle?',
    answer:
      'You can adjust seats anytime. Monthly plans prorate automatically. Yearly plans credit unused seats toward renewals.',
  },
  {
    id: 'onboarding',
    question: 'How does employee onboarding work?',
    answer:
      'Admins invite via email or SSO. Employees download the Score.fit app, claim their seat, and get a baseline score in minutes.',
  },
  {
    id: 'enterprise',
    question: 'When should we choose Enterprise?',
    answer:
      'Choose Enterprise for multi-site rollouts, custom contracts, HRIS integrations, security reviews, or a dedicated success partner.',
  },
]

export const BUSINESS_CTA = {
  title: 'Ready to raise your team’s score?',
  description:
    'Start a trial today or talk with our team about a rollout plan tailored to your organization.',
  primaryCta: 'Start free trial',
  secondaryCta: 'Contact sales',
}
