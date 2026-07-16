import Button from '../../common/Button'
import { cn } from '../../../utils/helpers'
import './AnimatedButton.css'

const AnimatedButton = ({ children, className = '', ...props }) => (
  <Button className={cn('sf-animatedbutton', className)} {...props}>
    {children}
  </Button>
)

export default AnimatedButton
