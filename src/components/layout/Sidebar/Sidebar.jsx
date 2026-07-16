import './Sidebar.css'

const Sidebar = ({ children, title }) => (
  <aside className="sf-sidebar">
    {title ? <h3>{title}</h3> : null}
    {children}
  </aside>
)

export default Sidebar
