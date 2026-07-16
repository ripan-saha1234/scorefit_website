import { cn } from '../../../utils/helpers'
import './Input.css'

const Input = ({
  id,
  label,
  type = 'text',
  error,
  className = '',
  ...props
}) => (
  <label className={cn('sf-input', className)} htmlFor={id}>
    {label ? <span className="sf-input__label">{label}</span> : null}
    <input id={id} type={type} className="sf-input__field" aria-invalid={Boolean(error)} {...props} />
    {error ? <span className="sf-input__error">{error}</span> : null}
  </label>
)

export default Input
