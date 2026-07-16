import { PRICING_PLANS } from '../data/pricingData'
import api from './api'

export const getMembershipPlans = async () => {
  try {
    const { data } = await api.get('/memberships')
    return data
  } catch {
    return PRICING_PLANS
  }
}

export const joinMembership = async (planId, billingCycle = 'monthly') => {
  const { data } = await api.post('/memberships/join', { planId, billingCycle })
  return data
}
