const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/

export const isRequired = (value) =>
  value !== null && value !== undefined && String(value).trim().length > 0

export const isEmail = (value) => EMAIL_PATTERN.test(String(value).trim())

export const isPhone = (value) => PHONE_PATTERN.test(String(value).trim())

export const minLength = (value, length) =>
  String(value ?? '').trim().length >= length

export const validateContactForm = ({ name, email, message }) => {
  const errors = {}

  if (!isRequired(name)) errors.name = 'Name is required'
  if (!isRequired(email)) errors.email = 'Email is required'
  else if (!isEmail(email)) errors.email = 'Enter a valid email'
  if (!isRequired(message)) errors.message = 'Message is required'
  else if (!minLength(message, 10)) errors.message = 'Message must be at least 10 characters'

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
