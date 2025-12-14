import SEO from '../components/shared/SEO'
import PageHeader from '../components/common/PageHeader'
import Section from '../components/common/Section'
import ServiceCategory from '../components/services/ServiceCategory'
import NormsCompliance from '../components/services/NormsCompliance'
import { servicesByCategory } from '../data/services'
import { SERVICE_CATEGORIES } from '../utils/constants'

function Services() {
  return (
    <>
      <SEO
        title="Serviços"
        description="Ensaios elétricos em EPIs, calibração de equipamentos e manutenção. Certificação NR10, ABNT e rastreabilidade RBC/INMETRO."
        keywords="ensaios elétricos, calibração, luvas isolantes, capacetes, alicates, terrômetros, NR10, ABNT"
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
