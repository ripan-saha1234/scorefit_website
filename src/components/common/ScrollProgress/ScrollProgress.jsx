import { useScroll } from '../../../context/ScrollContext'
import './ScrollProgress.css'

const ScrollProgress = () => {
  const { scrollY } = useScroll()
  const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
  const progress = Math.min((scrollY / max) * 100, 100)

  return <div className="sf-scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
}

export default ScrollProgress
