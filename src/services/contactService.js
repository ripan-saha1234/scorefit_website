import api from './api'
import { validateContactForm } from '../utils/validators'

export const submitContactForm = async (payload) => {
  const validation = validateContactForm(payload)
  if (!validation.isValid) {
    return { success: false, errors: validation.errors }
  }

  try {
    const { data } = await api.post('/contact', payload)
    return { success: true, data }
  } catch (error) {
    return { success: false, message: error.message }
  }
}
