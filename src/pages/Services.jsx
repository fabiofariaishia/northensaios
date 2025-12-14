import SEO from '../components/shared/SEO'
import PageHeader from '../components/common/PageHeader'
import Section from '../components/common/Section'
import ServiceCategory from '../components/services/ServiceCategory'
import NormsCompliance from '../components/services/NormsCompliance'
import { FaUserCheck, FaCertificate, FaClock } from 'react-icons/fa'
import { servicesByCategory } from '../data/services'
import { SERVICE_CATEGORIES } from '../utils/constants'

function Services() {
  const reportHighlights = [
    {
      icon: <FaUserCheck />,
      title: 'Dupla assinatura digital',
      description: 'Cada laudo é assinado pelo engenheiro responsável e pelo técnico executor no padrão ICP-Brasil.'
    },
    {
      icon: <FaCertificate />,
      title: 'ICP-Brasil',
      description: 'Assinaturas digitais com validade jurídica e rastreabilidade; os ensaios seguem NR10 e ABNT.'
    },
    {
      icon: <FaClock />,
      title: 'Entrega imediata 24/7',
      description: 'Assim que concluímos os ensaios, os laudos ficam liberados para download.'
    }
  ]

  return (
    <>
      <SEO
        title="Serviços"
        description="Ensaios elétricos em EPIs, calibração de equipamentos e manutenção. Certificação NR10, ABNT e rastreabilidade RBC/INMETRO."
        keywords="ensaios elétricos, calibração, luvas isolantes, capacetes, alicates, termômetros, NR10, ABNT"
        canonical="/servicos"
      />

      <PageHeader
        title="Nossos Serviços"
        breadcrumbs={[{ label: 'Serviços' }]}
      />

      {/* Introdução */}
      <Section background="white">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            A North Ensaios oferece uma gama completa de serviços em ensaios elétricos e calibração
            de equipamentos. Todos os nossos serviços são realizados com certificação reconhecida e
            em conformidade com as normas NR10, ABNT e rastreabilidade RBC/INMETRO.
          </p>
        </div>
      </Section>

      {/* Categorias de Serviços */}
      <Section background="light">
        <ServiceCategory
          category={SERVICE_CATEGORIES.EPIS}
          services={servicesByCategory[SERVICE_CATEGORIES.EPIS]}
        />

        <ServiceCategory
          category={SERVICE_CATEGORIES.CALIBRATION}
          services={servicesByCategory[SERVICE_CATEGORIES.CALIBRATION]}
        />

        <ServiceCategory
          category={SERVICE_CATEGORIES.EQUIPMENT}
          services={servicesByCategory[SERVICE_CATEGORIES.EQUIPMENT]}
        />
      </Section>

      {/* Conformidade Normativa */}
      <Section
        title="Conformidade Normativa"
        subtitle="Todos os nossos serviços seguem rigorosamente as normas e regulamentações vigentes"
        background="white"
      >
        <NormsCompliance />
      </Section>

      {/* Assinaturas digitais e disponibilidade */}
      <Section background="light">
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

      {/* CTA */}
      <Section background="green">
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--text-white)', marginBottom: 'var(--spacing-md)' }}>
            Precisa de algum destes serviços?
          </h2>
          <p style={{ color: 'var(--text-white)', marginBottom: 'var(--spacing-lg)', fontSize: '1.125rem' }}>
            Entre em contato conosco e solicite um orçamento personalizado
          </p>
          <a href="/contato" className="btn btn-secondary">
            Solicitar Orçamento
          </a>
        </div>
      </Section>
    </>
  )
}

export default Services
