import useCounter from '../../../hooks/useCounter'
import useIntersection from '../../../hooks/useIntersection'
import './Counter.css'

const Counter = ({ end, label, suffix = '', duration = 1400 }) => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.4 })
  const value = useCounter(end, { duration, enabled: isIntersecting })

  return (
    <div className="sf-counter" ref={ref}>
      <p className="sf-counter__value">{value}{suffix}</p>
      {label ? <p className="sf-counter__label">{label}</p> : null}
    </div>
  )
}

export default Counter
