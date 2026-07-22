import { BUSINESS_COMPARISON } from '../../../../data/businessData'
import Container from '../../../common/Container'
import SectionTitle from '../../../common/SectionTitle'
import './BusinessComparison.css'

const CellValue = ({ value }) => {
  if (value === true) {
    return (
      <span className="sf-biz-compare__yes" aria-label="Included">
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M13.5 4.5L6.5 11.5L2.5 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    )
  }

  if (value === false) {
    return (
      <span className="sf-biz-compare__no" aria-label="Not included">
        —
      </span>
    )
  }

  return <span className="sf-biz-compare__text">{value}</span>
}

const BusinessComparison = () => {
  const { columns, rows, eyebrow, title } = BUSINESS_COMPARISON

  return (
    <section className="sf-biz-compare" aria-label="Plan comparison">
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} align="center" />

        <div className="sf-biz-compare__scroll">
          <table className="sf-biz-compare__table">
            <thead>
              <tr>
                <th scope="col" className="sf-biz-compare__feature-col">
                  Feature
                </th>
                {columns.map((col) => (
                  <th key={col.id} scope="col">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  {columns.map((col) => (
                    <td key={col.id}>
                      <CellValue value={row[col.id]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}

export default BusinessComparison
