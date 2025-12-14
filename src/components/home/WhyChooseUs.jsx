import { FaCertificate, FaTrophy, FaTruck, FaFileAlt } from 'react-icons/fa'
import Card from '../common/Card'
import './WhyChooseUs.css'

const reasons = [
  {
    icon: <FaCertificate />,
    title: 'Credenciamento Oficial',
    description: 'Registrados no CREA com credenciamento equivalente às concessionárias de energia'
  },
  {
    icon: <FaTrophy />,
    title: '20+ Anos de Experiência',
    description: 'Mais de duas décadas garantindo segurança e conformidade no setor elétrico'
  },
  {
    icon: <FaTruck />,
    title: 'Laboratório Móvel',
    description: 'Atendimento in loco em todo Brasil, economizando tempo e logística'
  },
  {
    icon: <FaFileAlt />,
    title: 'Relatórios Certificados',
    description: 'Laudos técnicos reconhecidos com rastreabilidade RBC/INMETRO'
  }
]

function WhyChooseUs() {
  return (
    <div className="why-choose-us">
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <Card key={index} className="reason-card" hoverable={false}>
            <div className="reason-icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
