import { FaCertificate, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'
import Card from '../common/Card'
import './NormsCompliance.css'

const norms = [
  {
    icon: <FaCertificate />,
    title: 'NR10',
    description: 'Segurança em Instalações e Serviços em Eletricidade'
  },
  {
    icon: <FaShieldAlt />,
    title: 'ABNT',
    description: 'Normas técnicas brasileiras para ensaios e calibrações'
  },
  {
    icon: <FaCheckCircle />,
    title: 'CREA',
    description: 'Registro profissional e responsabilidade técnica'
  },
  {
    icon: <FaCertificate />,
    title: 'RBC/INMETRO',
    description: 'Rastreabilidade e credenciamento metrológico'
  }
]

function NormsCompliance() {
  return (
    <div className="norms-compliance">
      <div className="norms-grid">
        {norms.map((norm, index) => (
          <Card key={index} className="norm-card" hoverable={false}>
            <div className="norm-icon">{norm.icon}</div>
            <h3>{norm.title}</h3>
            <p>{norm.description}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default NormsCompliance
