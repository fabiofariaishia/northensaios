import ServiceCard from './ServiceCard'
import './ServiceCategory.css'

function ServiceCategory({ category, services }) {
  return (
    <div className="service-category">
      <h2 className="category-title">{category}</h2>
      <div className="category-services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

export default ServiceCategory
