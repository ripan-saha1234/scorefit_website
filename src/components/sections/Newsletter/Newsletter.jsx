import { useState } from 'react'
import Container from '../../common/Container'
import Input from '../../common/Input'
import Button from '../../common/Button'
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  return (
    <section className="sf-newsletter">
      <Container className="sf-newsletter__inner">
        <div>
          <h2>Get training insights in your inbox</h2>
          <p>Weekly coaching notes, class highlights, and member-only offers.</p>
        </div>
        <form className="sf-newsletter__form" onSubmit={(e) => e.preventDefault()}>
          <Input id="newsletter-email" type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" />
          <Button type="submit">Subscribe</Button>
        </form>
      </Container>
    </section>
  )
}

export default Newsletter
