import SEO from '../components/shared/SEO'
import PageHeader from '../components/common/PageHeader'
import Section from '../components/common/Section'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import Map from '../components/contact/Map'

function Contact() {
  return (
    <>
      <SEO
        title="Contato"
        description="Entre em contato com a North Ensaios. Telefone, WhatsApp, email e formulário de contato. Atendemos em todo Brasil."
        keywords="contato, orçamento, telefone, email, whatsapp, Belo Horizonte"
        canonical="/contato"
      />

      <PageHeader
        title="Entre em Contato"
        breadcrumbs={[{ label: 'Contato' }]}
      />

      {/* Informações de Contato */}
      <Section
        title="Fale Conosco"
        subtitle="Estamos prontos para atender você"
        background="white"
      >
        <ContactInfo />
      </Section>

      {/* Formulário de Contato */}
      <Section
        title="Envie uma Mensagem"
        subtitle="Preencha o formulário abaixo e retornaremos em breve"
        background="light"
      >
        <ContactForm />
      </Section>

      {/* Mapa */}
      <Section
        title="Nossa Localização"
        subtitle="Venha nos visitar"
        background="white"
      >
        <Map />
      </Section>
    </>
  )
}

export default Contact
