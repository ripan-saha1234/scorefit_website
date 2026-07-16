/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { LOCAL_STORAGE_KEYS } from '../utils/constants'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage(LOCAL_STORAGE_KEYS.AUTH, null)
  const [isLoading, setIsLoading] = useState(false)

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      login: async (payload) => {
        setIsLoading(true)
        try {
          // Replace with real auth service when backend is ready
          const nextUser = { email: payload.email, name: payload.name || 'Member' }
          setUser(nextUser)
          return { success: true, user: nextUser }
        } finally {
          setIsLoading(false)
        }
      },
      logout: () => setUser(null),
    }),
    [user, isLoading, setUser],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

export default AuthContext
