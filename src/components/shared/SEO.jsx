import { Helmet } from 'react-helmet-async'

function SEO({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonical
}) {
  const defaultTitle = 'North Ensaios - Ensaios Elétricos e Calibração'
  const defaultDescription = 'Ensaios elétricos, calibração de equipamentos e laboratório móvel. Certificação NR10 e ABNT com mais de 20 anos de experiência.'
  const defaultKeywords = 'ensaios elétricos, calibração, laboratório móvel, NR10, ABNT, EPIs, luvas isolantes, capacetes, alicates'

  const siteUrl = 'https://northensaios.com.br' // Atualizar com URL real
  const fullTitle = title ? `${title} - North Ensaios` : defaultTitle

  return (
    <Helmet>
      {/* Título */}
      <title>{fullTitle}</title>

      {/* Meta Tags Básicas */}
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:url" content={`${siteUrl}${canonical || ''}`} />
      <meta property="og:site_name" content="North Ensaios" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Outras */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="North Ensaios" />
    </Helmet>
  )
}

export default SEO
