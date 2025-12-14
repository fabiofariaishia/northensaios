// Constantes da aplicação

export const COMPANY_NAME = 'North Ensaios'

export const MENU_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Laboratório Móvel', path: '/laboratorio-movel' },
  { label: 'Contato', path: '/contato' }
]

export const SERVICE_CATEGORIES = {
  EPIS: 'Ensaios em EPIs',
  CALIBRATION: 'Calibração e Manutenção',
  EQUIPMENT: 'Equipamentos Eletro-hidráulicos'
}

export const CERTIFICATIONS = [
  'CREA',
  'NR10',
  'ABNT',
  'Rastreabilidade RBC/INMETRO',
  'Credenciamento equivalente CEMIG'
]

export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // Substituir ao configurar EmailJS
  templateId: 'YOUR_TEMPLATE_ID', // Substituir ao configurar EmailJS
  publicKey: 'YOUR_PUBLIC_KEY' // Substituir ao configurar EmailJS
}
