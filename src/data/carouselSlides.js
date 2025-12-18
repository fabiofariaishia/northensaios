const carouselHeroImage = {
  src: '/images/carousel/branded-van-960.jpg',
  srcSet: [
    '/images/carousel/branded-van-640.jpg 640w',
    '/images/carousel/branded-van-960.jpg 960w',
    '/images/carousel/branded-van-1440.jpg 1440w',
  ].join(', '),
  sizes: '100vw',
  width: 1792,
  height: 576,
  alt: 'Laboratório móvel North Ensaios',
}

export const carouselSlides = [
  {
    id: 1,
    title: 'Laboratório Móvel que vai até você',
    description: 'Ensaios e calibrações realizados na sua empresa em todo o Brasil',
    image: carouselHeroImage,
    cta: {
      text: 'Agende uma Visita',
      link: '/contato'
    }
  },
  {
    id: 2,
    title: 'Ensaios em EPIs com Certificação',
    description: 'Luvas isolantes, capacetes, mangas e muito mais com certificação NR10',
    image: carouselHeroImage,
    cta: {
      text: 'Conheça Nossos Serviços',
      link: '/servicos'
    }
  },
  {
    id: 3,
    title: 'Conformidade NR10 e ABNT',
    description: 'Mais de 20 anos garantindo segurança com certificações reconhecidas',
    image: carouselHeroImage,
    cta: {
      text: 'Fale Conosco',
      link: '/contato'
    }
  }
]
