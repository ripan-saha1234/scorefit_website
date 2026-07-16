import { cn } from '../../../utils/helpers'
import './CursorEffect.css'

const CursorEffect = ({ children, className = '' }) => (
  <div className={cn('sf-cursoreffect', className)}>{children}</div>
)

export default CursorEffect
