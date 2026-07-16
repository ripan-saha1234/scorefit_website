import { cn } from '../../../utils/helpers'
import './Card.css'

const Card = ({ children, className = '', as: Component = 'article', ...props }) => (
  <Component className={cn('sf-card', className)} {...props}>
    {children}
  </Component>
)

export default Card
