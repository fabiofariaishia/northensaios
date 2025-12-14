import { Link } from 'react-router-dom'
import { FaHardHat, FaHandsHelping, FaBolt, FaRuler, FaTruck, FaCertificate } from 'react-icons/fa'
import Card from '../common/Card'
import Button from '../common/Button'
import './ServicesPreview.css'

const servicesPreview = [
  {
    icon: <FaHardHat />,
    title: 'Ensaios em Luvas Isolantes',
    description: 'Ensaios conforme NR10 e ABNT com certificação reconhecida'
  },
  {
    icon: <FaHandsHelping />,
    title: 'Ensaios em Capacetes',
    description: 'Classes A e B com laudos técnicos detalhados'
  },
  {
    icon: <FaBolt />,
    title: 'Calibração de Alicates',
    description: 'Mecânicos e hidráulicos com rastreabilidade RBC'
  },
  {
    icon: <FaRuler />,
    title: 'Calibração de Terrômetros',
    description: 'Precisão garantida para medições elétricas'
  },
  {
    icon: <FaTruck />,
    title: 'Laboratório Móvel',
    description: 'Atendimento in loco em todo território nacional'
  },
  {
    icon: <FaCertificate />,
    title: 'Certificações NR10/ABNT',
    description: 'Conformidade total com normas vigentes'
  }
]

function ServicesPreview() {
  return (
    <div className="services-preview">
      <div className="services-grid">
        {servicesPreview.map((service, index) => (
          <Card key={index} className="service-preview-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Card>
        ))}
      </div>
      <div className="services-preview-cta">
        <Link to="/servicos">
          <Button variant="primary">Ver Todos os Serviços</Button>
        </Link>
      </div>
    </div>
  )
}

export default ServicesPreview
