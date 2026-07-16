export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)

export const formatNumber = (value, locale = 'en-US') =>
  new Intl.NumberFormat(locale).format(value)

export const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  }).format(new Date(date))

export const truncateText = (text = '', maxLength = 120) => {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trim()}…`
}
