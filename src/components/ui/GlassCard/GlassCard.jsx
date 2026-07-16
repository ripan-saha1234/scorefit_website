import { cn } from '../../../utils/helpers'
import './GlassCard.css'

const GlassCard = ({ children, className = '' }) => (
  <div className={cn('sf-glasscard', className)}>{children}</div>
)

export default GlassCard
