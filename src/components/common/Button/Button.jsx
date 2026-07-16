import { cn } from '../../../utils/helpers'
import './Button.css'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  as: Component = 'button',
  ...props
}) => {
  const classes = cn('sf-button', `sf-button--${variant}`, `sf-button--${size}`, className)

  return (
    <Component type={Component === 'button' ? type : undefined} className={classes} {...props}>
      {children}
    </Component>
  )
}

export default Button
