import { FaWhatsapp } from 'react-icons/fa'
import { contactInfo, whatsappMessage } from '../../data/contactInfo'
import './WhatsAppButton.css'

function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(whatsappMessage)
    const url = `https://wa.me/${contactInfo.whatsapp}?text=${message}`
    window.open(url, '_blank')
  }

  return (
    <button
      className="whatsapp-button"
      onClick={handleClick}
      aria-label="Fale conosco pelo WhatsApp"
      title="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp />
    </button>
  )
}

export default WhatsAppButton
