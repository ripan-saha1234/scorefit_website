import { cn } from '../../../utils/helpers'
import './GradientBorder.css'

const GradientBorder = ({ children, className = '' }) => (
  <div className={cn('sf-gradientborder', className)}>{children}</div>
)

export default GradientBorder
