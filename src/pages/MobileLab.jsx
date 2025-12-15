import SEO from '../components/shared/SEO'
import PageHeader from '../components/common/PageHeader'
import Section from '../components/common/Section'
import CertificationsBadges from '../components/lab/CertificationsBadges'
import { FaTruck, FaClock, FaCheckCircle, FaFileAlt } from 'react-icons/fa'
import Button from '../components/common/Button'
import { Link } from 'react-router-dom'
import vanSprinterImg from '../assets/images/lab-movel/branded-van.png'
import truck2Img from '../assets/images/lab-movel/truck-2.jpg'
import truck3Img from '../assets/images/lab-movel/truck-3.jpg'
import truck4Img from '../assets/images/lab-movel/truck-4.jpg'
import './MobileLab.css'

function MobileLab() {
  const howItWorks = [
    {
      icon: <FaCheckCircle />,
      title: '1. Agendamento',
      description: 'Entre em contato e agende a visita do laboratório móvel.'
    },
    {
      icon: <FaTruck />,
      title: '2. Deslocamento',
      description: 'Nossa equipe se desloca até sua empresa com todos os equipamentos.'
    },
    {
      icon: <FaFileAlt />,
      title: '3. Ensaios/Calibrações',
      description: 'Realizamos os serviços in loco com a mesma qualidade do laboratório fixo.'
    },
    {
      icon: <FaCheckCircle />,
      title: '4. Relatórios',
      description: 'Entregamos laudos técnicos certificados imediatamente.'
    },
    {
      icon: <FaClock />,
      title: '5. Orientações',
      description: 'Fornecemos orientações técnicas e suporte pós-serviço.'
    }
  ]

  const advantages = [
    'Economia de tempo e logística',
    'Não há necessidade de enviar equipamentos',
    'Resultados imediatos',
    'Menor tempo de parada de equipamentos',
    'Cobertura em todo território nacional',
    'Mesma qualidade e certificação do laboratório fixo'
  ]

  const galleryImages = [
    { src: vanSprinterImg, alt: 'Laboratório Móvel North Ensaios - van plotada' },
    { src: truck2Img, alt: 'Laboratório Móvel North Ensaios em operação - 2' },
    { src: truck3Img, alt: 'Laboratório Móvel North Ensaios em operação - 3' },
    { src: truck4Img, alt: 'Laboratório Móvel North Ensaios em operação - 4' }
  ]

  return (
    <>
      <SEO
        title="Laboratório Móvel"
        description="Laboratório móvel North Ensaios: ensaios e calibrações in loco em todo Brasil. Economia de tempo, resultados imediatos e certificação NR10/ABNT."
        keywords="laboratório móvel, ensaios in loco, calibração móvel, atendimento nacional, NR10"
        canonical="/laboratorio-movel"
      />

      <PageHeader
        title="Laboratório Móvel"
        breadcrumbs={[{ label: 'Laboratório Móvel' }]}
      />

      {/* O que é */}
      <Section
        title="O que é o Laboratório Móvel"
        subtitle="Levamos nossos serviços até você, com a mesma qualidade e certificação"
        background="white"
      >
        <div className="lab-intro">
          <div className="lab-intro-text">
            <p>
              Nosso laboratório móvel é uma unidade totalmente equipada que realiza ensaios
              elétricos e calibrações de equipamentos diretamente na sua empresa, em qualquer
              lugar do Brasil.
            </p>
            <p>
              Com a mesma estrutura técnica e certificações do laboratório fixo, oferecemos
              praticidade e agilidade sem comprometer a qualidade e confiabilidade dos serviços.
            </p>
          </div>
          <div className="lab-intro-image">
            <img
              src={vanSprinterImg}
              alt="Laboratório Móvel North Ensaios"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* Como Funciona */}
      <Section
        title="Como Funciona"
        subtitle="Processo simples e eficiente"
        background="light"
      >
        <div className="how-it-works">
          {howItWorks.map((step, index) => (
            <div key={index} className="workflow-step">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Vantagens */}
      <Section
        title="Vantagens do Laboratório Móvel"
        subtitle="Por que escolher o atendimento in loco"
        background="white"
      >
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-item">
              <FaCheckCircle className="advantage-icon" />
              <span>{advantage}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Certificações */}
      <Section
        title="Certificações e Credenciais"
        subtitle="Reconhecimento oficial que garante a qualidade dos nossos serviços móveis"
        background="green"
      >
        <CertificationsBadges />
        <div className="lab-certifications-text">
          <p>
            Nosso laboratório móvel possui as mesmas certificações e credenciais do laboratório
            fixo: registro CREA, credenciamento equivalente às concessionárias, conformidade NR10
            e ABNT, e rastreabilidade RBC/INMETRO. Nossa competência técnica garante a
            excelência de cada serviço realizado.
          </p>
        </div>
      </Section>

      {/* Galeria */}
      <Section
        title="Galeria de Imagens"
        subtitle="Conheça nossa estrutura móvel"
        background="light"
      >
        <div className="lab-gallery">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
            Agende uma Visita do Laboratório Móvel
          </h2>
          <p style={{ marginBottom: 'var(--spacing-lg)', fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
            Entre em contato e solicite a visita do nosso laboratório móvel em sua empresa
          </p>
          <Link to="/contato">
            <Button variant="primary">Solicitar Visita</Button>
          </Link>
        </div>
      </Section>
    </>
  )
}

export default MobileLab
