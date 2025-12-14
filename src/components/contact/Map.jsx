import { contactInfo } from '../../data/contactInfo'
import { FaMapMarkedAlt, FaDirections } from 'react-icons/fa'
import './Map.css'

function Map() {
  return (
    <div className="map-wrapper">
      {/* Botões de Ação */}
      <div className="map-actions">
        <a
          href={contactInfo.maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-button map-button-primary"
        >
          <FaDirections />
          <span>Traçar Rota</span>
        </a>
        <a
          href={contactInfo.maps.link}
          target="_blank"
          rel="noopener noreferrer"
          className="map-button map-button-secondary"
        >
          <FaMapMarkedAlt />
          <span>Abrir no Google Maps</span>
        </a>
      </div>

      {/* Mapa Embutido */}
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
    </div>
  )
}

export default Map
