import SEO from '../components/shared/SEO'
import Carousel from '../components/home/Carousel'
import Section from '../components/common/Section'
import ServicesPreview from '../components/home/ServicesPreview'
import AboutPreview from '../components/home/AboutPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import { FaUserCheck, FaCertificate, FaClock } from 'react-icons/fa'

function Home() {
  const reportHighlights = [
    {
      icon: <FaUserCheck />,
      title: 'Dupla assinatura digital',
      description: 'Laudos assinados pelo engenheiro responsável e pelo técnico executor, certificados no padrão ICP-Brasil.'
    },
    {
      icon: <FaCertificate />,
      title: 'Validade jurídica',
      description: 'Documentos com assinatura ICP-Brasil; nossos ensaios seguem NR10 e ABNT para conformidade técnica.'
    },
    {
      icon: <FaClock />,
      title: 'Disponíveis 24/7',
      description: 'Liberamos os laudos assim que os equipamentos são verificados; acesso on-line a qualquer hora.'
    }
  ]

  return (
    <>
      <SEO
        title="Home"
        description="North Ensaios - Ensaios elétricos, calibração de equipamentos e laboratório móvel. Certificação NR10 e ABNT com mais de 20 anos de experiência."
        keywords="ensaios elétricos, calibração, laboratório móvel, NR10, ABNT, EPIs, Montes Claros, Norte de Minas"
        canonical="/"
      />

      {/* Carrossel - PRIMEIRO elemento após o header */}
      <Carousel />

      {/* Serviços em Destaque */}
      <Section
        title="Nossos Serviços"
        subtitle="Soluções completas em ensaios elétricos e calibração de equipamentos"
        background="white"
      >
        <ServicesPreview />
      </Section>

      <Section
        title="Laudos com assinatura digital dupla"
        subtitle="Segurança jurídica e acesso imediato aos documentos"
        background="light"
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}
        >
          {reportHighlights.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#fff',
                border: `1px solid var(--border-color)`,
                borderRadius: 'var(--border-radius)',
                padding: 'var(--spacing-lg)',
                boxShadow: 'var(--shadow-sm)',
                display: 'grid',
                gap: 'var(--spacing-sm)'
              }}
            >
              <div style={{ color: 'var(--primary-green)', fontSize: '1.5rem' }}>
                {item.icon}
              </div>
              <h3 style={{ margin: 0 }}>{item.title}</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Sobre Preview */}
      <Section background="light">
        <AboutPreview />
      </Section>

      {/* Por Que Escolher */}
      <Section
        title="Por Que Escolher a North Ensaios"
        subtitle="Diferenciais que nos tornam referência no mercado"
        background="white"
      >
        <WhyChooseUs />
      </Section>

      {/* CTA Final */}
      <Section
        background="green"
        className="cta-section"
      >
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--text-white)', marginBottom: 'var(--spacing-md)' }}>
            Precisa de Ensaios ou Calibração?
          </h2>
          <p style={{ color: 'var(--text-white)', marginBottom: 'var(--spacing-lg)', fontSize: '1.125rem' }}>
            Entre em contato conosco e solicite um orçamento sem compromisso
          </p>
          <a href="/contato" className="btn btn-secondary">
            Solicitar Orçamento
          </a>
        </div>
      </Section>
    </>
  )
}

export default Home
