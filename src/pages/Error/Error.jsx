import Button from '../../components/common/Button'
import Container from '../../components/common/Container'
import './Error.css'

const Error = ({ resetErrorBoundary }) => (
  <Container className="sf-error">
    <h1>Something went wrong</h1>
    <p>Please try again. If the issue persists, contact support.</p>
    <Button type="button" onClick={resetErrorBoundary}>Try again</Button>
  </Container>
)

export default Error
