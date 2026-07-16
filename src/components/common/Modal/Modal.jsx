import { useEffect } from 'react'
import { cn } from '../../../utils/helpers'
import './Modal.css'

const Modal = ({ isOpen, onClose, title, children, className = '' }) => {
  useEffect(() => {
    if (!isOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="sf-modal" role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" className="sf-modal__backdrop" aria-label="Close modal" onClick={onClose} />
      <div className={cn('sf-modal__panel', className)}>
        <header className="sf-modal__header">
          <h3>{title}</h3>
          <button type="button" className="sf-modal__close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>
        <div className="sf-modal__body">{children}</div>
      </div>
    </div>
  )
}

export default Modal
