import { Link } from 'react-router-dom'
import './Breadcrumb.css'

const Breadcrumb = ({ items = [] }) => (
  <nav className="sf-breadcrumb" aria-label="Breadcrumb">
    <ol>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <li key={`${item.label}-${index}`}>
            {isLast || !item.path ? (
              <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </li>
        )
      })}
    </ol>
  </nav>
)

export default Breadcrumb
