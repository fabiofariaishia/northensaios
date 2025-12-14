import { FaCheckCircle } from 'react-icons/fa'
import Card from '../common/Card'
import './ServiceCard.css'

function ServiceCard({ service }) {
  return (
    <Card className="service-card">
      <div className="service-card-image">
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>
      <div className="service-card-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="service-norms">
          {service.norms.map((norm, index) => (
            <span key={index} className="norm-badge">
              <FaCheckCircle />
              {norm}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default ServiceCard
