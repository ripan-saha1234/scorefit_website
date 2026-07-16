import { useState } from 'react'
import { submitContactForm } from '../../../services/contactService'
import Container from '../../common/Container'
import SectionTitle from '../../common/SectionTitle'
import Input from '../../common/Input'
import Button from '../../common/Button'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await submitContactForm(form)
    if (!result.success) {
      setErrors(result.errors ?? {})
      setStatus(result.message ?? 'Unable to send message.')
      return
    }
    setErrors({})
    setStatus('Message sent. We will get back to you shortly.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="sf-contact">
      <Container>
        <SectionTitle title="Contact the team" description="Membership questions, coaching inquiries, or facility tours." />
        <form className="sf-contact__form" onSubmit={handleSubmit}>
          <Input id="contact-name" label="Name" value={form.name} onChange={handleChange('name')} error={errors.name} />
          <Input id="contact-email" type="email" label="Email" value={form.email} onChange={handleChange('email')} error={errors.email} />
          <label className="sf-contact__textarea" htmlFor="contact-message">
            <span>Message</span>
            <textarea id="contact-message" rows="5" value={form.message} onChange={handleChange('message')} />
            {errors.message ? <span className="sf-contact__error">{errors.message}</span> : null}
          </label>
          <Button type="submit">Send message</Button>
          {status ? <p className="sf-contact__status">{status}</p> : null}
        </form>
      </Container>
    </section>
  )
}

export default Contact
