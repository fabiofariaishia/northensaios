import SEO from '../components/shared/SEO'
import Carousel from '../components/home/Carousel'
import Section from '../components/common/Section'
import ServicesPreview from '../components/home/ServicesPreview'
import AboutPreview from '../components/home/AboutPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'

function Home() {
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

      {/* Sobre Preview */}
      <Section
        background="light"
      >
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
