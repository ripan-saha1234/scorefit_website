import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ROUTES } from './RouteConstants'
import Loader from '../components/common/Loader'

const ProtectedRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) return <Loader />
  if (!isAuthenticated) return <Navigate to={ROUTES.JOIN} replace />

  return <Outlet />
}

export default ProtectedRoutes
