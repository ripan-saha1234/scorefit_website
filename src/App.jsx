import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from './context/ThemeContext'
import { ScrollProvider } from './context/ScrollContext'
import { AuthProvider } from './context/AuthContext'
import { AppProvider } from './context/AppContext'

const App = () => (
  <ThemeProvider>
    <ScrollProvider>
      <AuthProvider>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </AuthProvider>
    </ScrollProvider>
  </ThemeProvider>
)

export default App
