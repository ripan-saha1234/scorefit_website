import './Loader.css'

const Loader = ({ label = 'Loading' }) => (
  <div className="sf-loader" role="status" aria-live="polite">
    <span className="sf-loader__spinner animate-pulse-soft" aria-hidden="true" />
    <span className="u-sr-only">{label}</span>
  </div>
)

export default Loader
