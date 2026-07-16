export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Essential access for consistent weekly training.',
    features: ['Gym floor access', '2 group classes / week', 'App workout plans'],
    highlighted: false,
  },
  {
    id: 'performance',
    name: 'Performance',
    monthlyPrice: 59,
    yearlyPrice: 590,
    description: 'Best for athletes building strength and conditioning.',
    features: [
      'Unlimited classes',
      '1 personal session / month',
      'Recovery zone access',
      'Nutrition basics',
    ],
    highlighted: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: 'Full coaching support with personalized programming.',
    features: [
      'Unlimited everything',
      'Weekly coaching check-ins',
      'Custom program design',
      'Priority booking',
    ],
    highlighted: false,
  },
]
