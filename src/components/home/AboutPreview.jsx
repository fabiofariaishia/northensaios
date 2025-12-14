import { Link } from 'react-router-dom'
import Button from '../common/Button'
import './AboutPreview.css'

function AboutPreview() {
  return (
    <div className="about-preview">
      <div className="about-preview-content">
        <div className="about-preview-text">
          <h2>Mais de 20 anos de experiência em ensaios elétricos</h2>
          <p>
            A North Ensaios é especializada em ensaios elétricos e calibração de equipamentos,
            oferecendo serviços de alta qualidade com certificação NR10 e ABNT. Nossa experiência
            de mais de duas décadas garante segurança e conformidade para sua empresa.
          </p>
          <p>
            Com laboratório móvel próprio, atendemos todo o território nacional, levando
            praticidade e eficiência até você. Nossos laudos técnicos são reconhecidos e
            respeitados no mercado, garantindo tranquilidade para sua operação.
          </p>
          <Link to="/sobre">
            <Button variant="outline">Conheça Nossa História</Button>
          </Link>
        </div>
        <div className="about-preview-image">
          <img
            src="https://placehold.co/600x400/006B3F/FFFFFF?text=North+Ensaios"
            alt="North Ensaios - Equipe"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutPreview
