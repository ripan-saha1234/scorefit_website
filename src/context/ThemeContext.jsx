/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo } from 'react'
import { THEME } from '../config/theme'
import { LOCAL_STORAGE_KEYS } from '../utils/constants'
import useLocalStorage from '../hooks/useLocalStorage'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage(LOCAL_STORAGE_KEYS.THEME, THEME.light)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === THEME.dark,
      toggleTheme: () =>
        setTheme((prev) => (prev === THEME.dark ? THEME.light : THEME.dark)),
      setTheme,
    }),
    [theme, setTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

export default ThemeContext
