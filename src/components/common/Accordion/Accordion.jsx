import { useState } from 'react'
import './Accordion.css'

const Accordion = ({ items = [] }) => {
  const [openId, setOpenId] = useState(items[0]?.id ?? null)

  return (
    <div className="sf-accordion">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id} className={`sf-accordion__item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="sf-accordion__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span>{item.question}</span>
              <span className="sf-accordion__icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="2" className="sf-accordion__icon-v" />
                  <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </button>
            <div className="sf-accordion__panel-wrap">
              <div className="sf-accordion__panel">{item.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
