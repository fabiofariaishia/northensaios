import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa'
import { contactInfo } from '../../data/contactInfo'
import Card from '../common/Card'
import './ContactInfo.css'

function ContactInfo() {
  return (
    <div className="contact-info-grid">
      <Card className="contact-info-card" hoverable={false}>
        <FaPhone className="contact-info-icon" />
        <h3>Telefone</h3>
        <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}>
          {contactInfo.phone}
        </a>
      </Card>

      <Card className="contact-info-card" hoverable={false}>
        <FaWhatsapp className="contact-info-icon" />
        <h3>WhatsApp</h3>
        <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
          {contactInfo.whatsappFormatted}
        </a>
      </Card>

      <Card className="contact-info-card" hoverable={false}>
        <FaEnvelope className="contact-info-icon" />
        <h3>Email</h3>
        <a href={`mailto:${contactInfo.email}`}>
          {contactInfo.email}
        </a>
      </Card>

      <Card className="contact-info-card" hoverable={false}>
        <FaMapMarkerAlt className="contact-info-icon" />
        <h3>Endereço</h3>
        <p>{contactInfo.address.full}</p>
      </Card>

      <Card className="contact-info-card" hoverable={false}>
        <FaClock className="contact-info-icon" />
        <h3>Horário</h3>
        <p>{contactInfo.hours.weekdays}</p>
        <p style={{ fontSize: '0.875rem', marginTop: '4px' }}>{contactInfo.hours.weekend}</p>
      </Card>
    </div>
  )
}

export default ContactInfo
