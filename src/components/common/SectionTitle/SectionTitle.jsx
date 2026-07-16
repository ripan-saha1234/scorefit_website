import { cn } from '../../../utils/helpers'
import './SectionTitle.css'

const SectionTitle = ({ eyebrow, title, description, align = 'left', className = '' }) => (
  <header className={cn('sf-section-title', `sf-section-title--${align}`, className)}>
    {eyebrow ? <p className="sf-section-title__eyebrow">{eyebrow}</p> : null}
    <h2>{title}</h2>
    {description ? <p className="sf-section-title__description">{description}</p> : null}
  </header>
)

export default SectionTitle
