import { useState } from 'react'
import Button from '../common/Button'
import { sendEmail } from '../../utils/emailService'
import { SERVICE_CATEGORIES } from '../../utils/constants'
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    const result = await sendEmail(formData)

    if (result.success) {
      setStatus({ type: 'success', message: result.message })
      setFormData({
        from_name: '',
        from_email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
    } else {
      setStatus({ type: 'error', message: result.message })
    }

    setIsSubmitting(false)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="from_name">Nome *</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="from_email">Email *</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Telefone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Empresa</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="service">Serviço de Interesse</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Selecione um serviço</option>
          <option value={SERVICE_CATEGORIES.EPIS}>Ensaios em EPIs</option>
          <option value={SERVICE_CATEGORIES.CALIBRATION}>Calibração e Manutenção</option>
          <option value={SERVICE_CATEGORIES.EQUIPMENT}>Equipamentos Eletro-hidráulicos</option>
          <option value="Laboratório Móvel">Laboratório Móvel</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensagem *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {status.message && (
        <div className={`form-status ${status.type}`}>
          {status.message}
        </div>
      )}

      <Button type="submit" variant="primary" disabled={isSubmitting} fullWidth>
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>
    </form>
  )
}

export default ContactForm
