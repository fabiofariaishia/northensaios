import { FaCertificate, FaAward, FaShieldAlt, FaCheckDouble } from 'react-icons/fa'
import './CertificationsBadges.css'

const certifications = [
  { icon: <FaCertificate />, name: 'CREA' },
  { icon: <FaAward />, name: 'NR10' },
  { icon: <FaShieldAlt />, name: 'ABNT' },
  { icon: <FaCheckDouble />, name: 'RBC/INMETRO' }
]

function CertificationsBadges() {
  return (
    <div className="certifications-badges">
      {certifications.map((cert, index) => (
        <div key={index} className="cert-badge">
          <div className="cert-icon">{cert.icon}</div>
          <span>{cert.name}</span>
        </div>
      ))}
    </div>
  )
}

export default CertificationsBadges
