import { cn } from '../../../utils/helpers'
import './FloatingIcons.css'

const FloatingIcons = ({ children, className = '' }) => (
  <div className={cn('sf-floatingicons', className)}>{children}</div>
)

export default FloatingIcons
