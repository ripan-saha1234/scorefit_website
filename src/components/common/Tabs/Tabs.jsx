import { useState } from 'react'
import { cn } from '../../../utils/helpers'
import './Tabs.css'

const Tabs = ({ items = [], defaultId }) => {
  const [activeId, setActiveId] = useState(defaultId ?? items[0]?.id)
  const active = items.find((item) => item.id === activeId) ?? items[0]

  return (
    <div className="sf-tabs">
      <div className="sf-tabs__list" role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === activeId}
            className={cn('sf-tabs__tab', item.id === activeId && 'is-active')}
            onClick={() => setActiveId(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="sf-tabs__panel" role="tabpanel">{active?.content}</div>
    </div>
  )
}

export default Tabs
