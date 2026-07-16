import { cn } from '../../../utils/helpers'
import './Container.css'

const Container = ({ children, className = '', as: Component = 'div', ...props }) => (
  <Component className={cn('sf-container', className)} {...props}>
    {children}
  </Component>
)

export default Container
