import { contactInfo } from '../../data/contactInfo'
import './Map.css'

function Map() {
  return (
    <div className="map-container">
      <iframe
        src={contactInfo.maps.embedUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização North Ensaios"
      ></iframe>
    </div>
  )
}

export default Map
