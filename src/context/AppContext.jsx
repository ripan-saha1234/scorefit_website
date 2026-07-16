/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react'

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [billingCycle, setBillingCycle] = useState('monthly')

  const value = useMemo(
    () => ({
      isMobileMenuOpen,
      openMobileMenu: () => setIsMobileMenuOpen(true),
      closeMobileMenu: () => setIsMobileMenuOpen(false),
      toggleMobileMenu: () => setIsMobileMenuOpen((prev) => !prev),
      billingCycle,
      setBillingCycle,
    }),
    [isMobileMenuOpen, billingCycle],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}

export default AppContext
