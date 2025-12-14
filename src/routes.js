import { lazy } from 'react'

// Lazy loading das páginas para code splitting
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const MobileLab = lazy(() => import('./pages/MobileLab'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export const routes = [
  {
    path: '/',
    element: Home,
    title: 'Home - North Ensaios'
  },
  {
    path: '/servicos',
    element: Services,
    title: 'Serviços - North Ensaios'
  },
  {
    path: '/sobre',
    element: About,
    title: 'Sobre - North Ensaios'
  },
  {
    path: '/laboratorio-movel',
    element: MobileLab,
    title: 'Laboratório Móvel - North Ensaios'
  },
  {
    path: '/contato',
    element: Contact,
    title: 'Contato - North Ensaios'
  },
  {
    path: '*',
    element: NotFound,
    title: 'Página não encontrada - North Ensaios'
  }
]
