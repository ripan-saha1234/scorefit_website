import { Link } from 'react-router-dom'
import Container from '../../components/common/Container'
import Button from '../../components/common/Button'
import { ROUTES } from '../../routes/RouteConstants'
import './NotFound.css'

const NotFound = () => (
  <Container className="sf-not-found">
    <p>404</p>
    <h1>Page not found</h1>
    <p>The page you are looking for does not exist or has moved.</p>
    <Button as={Link} to={ROUTES.HOME}>Back to home</Button>
  </Container>
)

export default NotFound
