import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa'
import { contactInfo } from '../../data/contactInfo'
import { MENU_ITEMS, COMPANY_NAME } from '../../utils/constants'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Sobre */}
          <div className="footer-column">
            <h3>{COMPANY_NAME}</h3>
            <p>
              Ensaios elétricos, calibração de equipamentos e laboratório móvel.
              Certificação NR10 e ABNT.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="footer-column">
            <h3>Links Rápidos</h3>
            <ul className="footer-links">
              {MENU_ITEMS.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="footer-column">
            <h3>Contato</h3>
            <ul className="footer-contact">
              <li>
                <FaPhone />
                <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}>
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <FaWhatsapp />
                <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  {contactInfo.whatsappFormatted}
                </a>
              </li>
              <li>
                <FaEnvelope />
                <a href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>{contactInfo.address.full}</span>
              </li>
              <li>
                <FaClock />
                <span>{contactInfo.hours.weekdays}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {contactInfo.company}. Todos os direitos reservados.</p>
          <p>CNPJ: {contactInfo.cnpj}</p>
          <p>Desenvolvido com dedicação para excelência em ensaios elétricos.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
