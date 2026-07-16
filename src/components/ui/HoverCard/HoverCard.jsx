import { cn } from '../../../utils/helpers'
import './HoverCard.css'

const HoverCard = ({ children, className = '' }) => (
  <div className={cn('sf-hovercard', className)}>{children}</div>
)

export default HoverCard
