const PortalPlaceholder = ({ placeholder }) => {
  const type = placeholder?.type ?? 'dashboard'

  return (
    <div className={`sf-biz-portal__frame sf-biz-portal__frame--${type}`}>
      <div className="sf-biz-portal__chrome" aria-hidden="true">
        <span />
        <span />
        <span />
        <p className="sf-biz-portal__chrome-label">{placeholder.label}</p>
      </div>

      <div className="sf-biz-portal__screen">
        <div className="sf-biz-portal__screen-head">
          <p className="sf-biz-portal__screen-kicker">{placeholder.subtitle}</p>
          <h4 className="sf-biz-portal__screen-title">{placeholder.title}</h4>
        </div>

        {type === 'dashboard' ? (
          <div className="sf-biz-portal__mock sf-biz-portal__mock--dashboard">
            <div className="sf-biz-portal__stat-grid">
              <div className="sf-biz-portal__stat">
                <span>Avg score</span>
                <strong>7.8</strong>
              </div>
              <div className="sf-biz-portal__stat">
                <span>Active seats</span>
                <strong>128</strong>
              </div>
              <div className="sf-biz-portal__stat">
                <span>Engagement</span>
                <strong>84%</strong>
              </div>
            </div>
            <div className="sf-biz-portal__bars" aria-hidden="true">
              <span style={{ height: '42%' }} />
              <span style={{ height: '68%' }} />
              <span style={{ height: '55%' }} />
              <span style={{ height: '82%' }} />
              <span style={{ height: '70%' }} />
              <span style={{ height: '94%' }} />
            </div>
          </div>
        ) : null}

        {type === 'scores' ? (
          <div className="sf-biz-portal__mock sf-biz-portal__mock--scores">
            <div className="sf-biz-portal__ring" aria-hidden="true">
              <span>8.4</span>
            </div>
            <ul>
              <li>
                <span>Strength</span>
                <b>+12%</b>
              </li>
              <li>
                <span>Consistency</span>
                <b>+8%</b>
              </li>
              <li>
                <span>Recovery</span>
                <b>+5%</b>
              </li>
            </ul>
          </div>
        ) : null}

        {type === 'challenges' ? (
          <div className="sf-biz-portal__mock sf-biz-portal__mock--challenges">
            <div className="sf-biz-portal__challenge-card">
              <span className="sf-biz-portal__pill">Live</span>
              <p>Team Step Challenge</p>
              <div className="sf-biz-portal__progress">
                <i style={{ width: '72%' }} />
              </div>
              <small>72% of seats participating</small>
            </div>
            <ol>
              <li>
                <span>1</span> North Squad — 1.2M steps
              </li>
              <li>
                <span>2</span> Core Lab — 980K steps
              </li>
              <li>
                <span>3</span> Pulse Desk — 870K steps
              </li>
            </ol>
          </div>
        ) : null}

        {type === 'reports' ? (
          <div className="sf-biz-portal__mock sf-biz-portal__mock--reports">
            <div className="sf-biz-portal__report-row">
              <span>Engagement</span>
              <div className="sf-biz-portal__mini-bar">
                <i style={{ width: '86%' }} />
              </div>
            </div>
            <div className="sf-biz-portal__report-row">
              <span>Score lift</span>
              <div className="sf-biz-portal__mini-bar">
                <i style={{ width: '64%' }} />
              </div>
            </div>
            <div className="sf-biz-portal__report-row">
              <span>Challenge completion</span>
              <div className="sf-biz-portal__mini-bar">
                <i style={{ width: '78%' }} />
              </div>
            </div>
            <p className="sf-biz-portal__export-note">Export · PDF / CSV</p>
          </div>
        ) : null}
      </div>

      <p className="sf-biz-portal__placeholder-tag">Image placeholder</p>
    </div>
  )
}

export default PortalPlaceholder
