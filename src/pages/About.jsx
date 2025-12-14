import SEO from '../components/shared/SEO'
import PageHeader from '../components/common/PageHeader'
import Section from '../components/common/Section'
import CertificationsBadges from '../components/lab/CertificationsBadges'
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa'
import Card from '../components/common/Card'
import './About.css'

function About() {
  const values = [
    {
      icon: <FaBullseye />,
      title: 'Segurança',
      description: 'Compromisso absoluto com a segurança de pessoas e equipamentos'
    },
    {
      icon: <FaEye />,
      title: 'Qualidade',
      description: 'Excelência técnica em cada ensaio e calibração realizada'
    },
    {
      icon: <FaHeart />,
      title: 'Ética',
      description: 'Transparência e integridade em todas as nossas relações'
    },
    {
      icon: <FaBullseye />,
      title: 'Inovação',
      description: 'Busca constante por melhorias e atualizações tecnológicas'
    }
  ]

  return (
    <>
      <SEO
        title="Sobre Nós"
        description="Conheça a North Ensaios: especializada em ensaios elétricos e calibração. Missão, visão, valores e certificações."
        keywords="sobre north ensaios, história, missão, visão, valores, certificações, CREA, NR10"
        canonical="/sobre"
      />

      <PageHeader
        title="Sobre a North Ensaios"
        breadcrumbs={[{ label: 'Sobre' }]}
      />

      {/* História */}
      <Section
        title="Nossa História"
        subtitle="Garantindo segurança e conformidade"
        background="white"
      >
        <div className="about-content">
          <div className="about-text">
            <p>
              A North Ensaios nasceu com o propósito de oferecer serviços especializados em
              ensaios elétricos e calibração de equipamentos de alta qualidade e confiabilidade.
            </p>
            <p>
              Construímos uma sólida reputação no mercado, baseada em nossa competência técnica,
              ética profissional e compromisso com a segurança. Nossa equipe é formada por
              profissionais altamente qualificados e em constante atualização.
            </p>
            <p>
              Hoje, somos referência em ensaios elétricos, atendendo empresas de diversos
              setores com nosso laboratório móvel e instalações fixas, sempre com a mesma dedicação
              e excelência.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://placehold.co/600x400/006B3F/FFFFFF?text=North+Ensaios"
              alt="North Ensaios - História"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* Missão, Visão */}
      <Section background="light">
        <div className="mission-vision">
          <Card className="mv-card">
            <h3>Missão</h3>
            <p>
              Garantir a segurança de pessoas e equipamentos através de ensaios elétricos precisos
              e calibrações confiáveis, sempre em conformidade com as normas técnicas vigentes.
            </p>
          </Card>
          <Card className="mv-card">
            <h3>Visão</h3>
            <p>
              Ser reconhecida como a referência nacional em ensaios elétricos e calibração de
              equipamentos, pela excelência técnica e compromisso com a segurança.
            </p>
          </Card>
        </div>
      </Section>

      {/* Valores */}
      <Section
        title="Nossos Valores"
        subtitle="Princípios que guiam nossa atuação"
        background="white"
      >
        <div className="values-grid">
          {values.map((value, index) => (
            <Card key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certificações */}
      <Section
        title="Certificações e Credenciais"
        subtitle="Reconhecimento oficial de nossa competência técnica"
        background="light"
      >
        <CertificationsBadges />
        <div className="certifications-text">
          <p>
            Somos registrados no CREA (Conselho Regional de Engenharia e Agronomia) e possuímos
            credenciamento equivalente às concessionárias de energia. Todos os nossos ensaios e
            calibrações seguem rigorosamente as normas NR10 e ABNT, com rastreabilidade
            RBC/INMETRO garantida.
          </p>
        </div>
      </Section>
    </>
  )
}

export default About
