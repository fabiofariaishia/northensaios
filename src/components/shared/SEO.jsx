import { useEffect } from 'react'

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

  useEffect(() => {
    const upsertMeta = (attr, key, value) => {
      if (!value) return
      const selector = `meta[${attr}="${key}"]`
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attr, key)
        document.head.appendChild(element)
      }
      element.setAttribute('content', value)
    }

    const removeMeta = (attr, key) => {
      const selector = `meta[${attr}="${key}"]`
      const element = document.head.querySelector(selector)
      if (element) {
        element.remove()
      }
    }

    const upsertLink = (relValue, hrefValue) => {
      if (!hrefValue) return
      const selector = `link[rel="${relValue}"]`
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', relValue)
        document.head.appendChild(element)
      }
      element.setAttribute('href', hrefValue)
    }

    document.title = fullTitle

    upsertMeta('name', 'description', description || defaultDescription)
    upsertMeta('name', 'keywords', keywords || defaultKeywords)

    const canonicalUrl = canonical ? `${siteUrl}${canonical}` : `${siteUrl}${window.location.pathname}`
    upsertLink('canonical', canonicalUrl)

    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description || defaultDescription)
    upsertMeta('property', 'og:type', ogType)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:site_name', 'North Ensaios')
    if (ogImage) {
      upsertMeta('property', 'og:image', ogImage)
    } else {
      removeMeta('property', 'og:image')
    }

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description || defaultDescription)
    if (ogImage) {
      upsertMeta('name', 'twitter:image', ogImage)
    } else {
      removeMeta('name', 'twitter:image')
    }

    upsertMeta('name', 'robots', 'index, follow')
    upsertMeta('name', 'language', 'Portuguese')
    upsertMeta('name', 'revisit-after', '7 days')
    upsertMeta('name', 'author', 'North Ensaios')
  }, [canonical, defaultDescription, defaultKeywords, description, fullTitle, keywords, ogImage, ogType, siteUrl])

  return null
}

export default SEO
