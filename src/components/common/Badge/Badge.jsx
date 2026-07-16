import { cn } from '../../../utils/helpers'
import './Badge.css'

const Badge = ({ children, className = '' }) => (
  <span className={cn('sf-badge', className)}>{children}</span>
)

export default Badge
