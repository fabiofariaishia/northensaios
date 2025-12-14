import { SERVICE_CATEGORIES } from '../utils/constants'

export const services = [
  // Ensaios em EPIs
  {
    id: 1,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Luvas Isolantes',
    description: 'Ensaios elétricos em luvas isolantes de borracha conforme NR10 e ABNT NBR 16297',
    image: 'https://placehold.co/400x300/006B3F/FFFFFF?text=Luvas+Isolantes',
    norms: ['NR10', 'ABNT NBR 16297']
  },
  {
    id: 2,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Capacetes Classe A e B',
    description: 'Ensaios dielétricos em capacetes de segurança Classes A e B conforme ABNT NBR 8221',
    image: 'https://placehold.co/400x300/006B3F/FFFFFF?text=Capacetes',
    norms: ['ABNT NBR 8221', 'NR10']
  },
  {
    id: 3,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Mangas Isolantes',
    description: 'Ensaios elétricos em mangas isolantes de borracha para proteção de braços',
    image: 'https://placehold.co/400x300/006B3F/FFFFFF?text=Mangas+Isolantes',
    norms: ['NR10', 'ABNT NBR 16295']
  },
  {
    id: 4,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Lençóis de Borracha',
    description: 'Ensaios em lençóis e tapetes isolantes de borracha',
    image: 'https://placehold.co/400x300/006B3F/FFFFFF?text=Lencois+Isolantes',
    norms: ['NR10', 'ABNT']
  },
  {
    id: 5,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Detectores de Tensão',
    description: 'Ensaios elétricos em detectores de tensão portáteis',
    image: 'https://placehold.co/400x300/006B3F/FFFFFF?text=Detectores+Tensao',
    norms: ['NR10', 'ABNT NBR 16325']
  },
  {
    id: 6,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Bastões de Manobra',
    description: 'Ensaios dielétricos em bastões de manobra isolados',
    image: 'https://placehold.co/400x300/006B3F/FFFFFF?text=Bastoes+Manobra',
    norms: ['NR10', 'ABNT']
  },
  {
    id: 7,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Escadas Isoladas',
    description: 'Ensaios elétricos em escadas extensíveis e de abrir isoladas',
    image: 'https://placehold.co/400x300/006B3F/FFFFFF?text=Escadas+Isoladas',
    norms: ['NR10', 'ABNT NBR 10622']
  },
  {
    id: 8,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Cestas Aéreas',
    description: 'Ensaios elétricos em cestas aéreas isoladas para trabalho em altura',
    image: 'https://placehold.co/400x300/006B3F/FFFFFF?text=Cestas+Aereas',
    norms: ['NR10', 'ABNT']
  },

  // Calibração e Manutenção
  {
    id: 9,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Alicates Mecânicos',
    description: 'Calibração e manutenção de alicates compressores mecânicos com rastreabilidade RBC',
    image: 'https://placehold.co/400x300/1A1A1A/FFFFFF?text=Alicates+Mecanicos',
    norms: ['RBC/INMETRO']
  },
  {
    id: 10,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Alicates Hidráulicos',
    description: 'Calibração e manutenção de alicates compressores hidráulicos',
    image: 'https://placehold.co/400x300/1A1A1A/FFFFFF?text=Alicates+Hidraulicos',
    norms: ['RBC/INMETRO']
  },
  {
    id: 11,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Tesourões',
    description: 'Calibração de tesourões hidráulicos para corte de cabos',
    image: 'https://placehold.co/400x300/1A1A1A/FFFFFF?text=Tesouroes',
    norms: ['RBC/INMETRO']
  },
  {
    id: 12,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Bombas Hidráulicas',
    description: 'Calibração de bombas hidráulicas manuais e elétricas',
    image: 'https://placehold.co/400x300/1A1A1A/FFFFFF?text=Bombas+Hidraulicas',
    norms: ['RBC/INMETRO']
  },
  {
    id: 13,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Varas de Manobra',
    description: 'Calibração de varas telescópicas de manobra',
    image: 'https://placehold.co/400x300/1A1A1A/FFFFFF?text=Varas+Manobra',
    norms: ['ABNT']
  },
  {
    id: 14,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Dinamômetros',
    description: 'Calibração de dinamômetros para medição de força e tração',
    image: 'https://placehold.co/400x300/1A1A1A/FFFFFF?text=Dinamometros',
    norms: ['RBC/INMETRO']
  },
  {
    id: 15,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Terrômetros',
    description: 'Calibração de terrômetros digitais e analógicos',
    image: 'https://placehold.co/400x300/1A1A1A/FFFFFF?text=Terrometros',
    norms: ['RBC/INMETRO']
  },
  {
    id: 16,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Volt-Amperímetros',
    description: 'Calibração de multímetros, volt-amperímetros e alicates amperímetros',
    image: 'https://placehold.co/400x300/1A1A1A/FFFFFF?text=Voltimetros',
    norms: ['RBC/INMETRO']
  },
  {
    id: 17,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Curvadeiras',
    description: 'Calibração de curvadeiras hidráulicas para barramento',
    image: 'https://placehold.co/400x300/1A1A1A/FFFFFF?text=Curvadeiras',
    norms: ['RBC/INMETRO']
  },
  {
    id: 18,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Talhas',
    description: 'Calibração de talhas elétricas e manuais',
    image: 'https://placehold.co/400x300/1A1A1A/FFFFFF?text=Talhas',
    norms: ['RBC/INMETRO', 'ABNT']
  },

  // Equipamentos Eletro-hidráulicos
  {
    id: 19,
    category: SERVICE_CATEGORIES.EQUIPMENT,
    title: 'Conectores Isolantes',
    description: 'Ensaios e manutenção em conectores isolantes para redes elétricas',
    image: 'https://placehold.co/400x300/006B3F/FFFFFF?text=Conectores',
    norms: ['NR10', 'ABNT']
  },
  {
    id: 20,
    category: SERVICE_CATEGORIES.EQUIPMENT,
    title: 'Equipamentos Eletro-hidráulicos',
    description: 'Manutenção preventiva e corretiva em equipamentos eletro-hidráulicos',
    image: 'https://placehold.co/400x300/006B3F/FFFFFF?text=Equipamentos',
    norms: ['ABNT']
  }
]

// Agrupar serviços por categoria
export const servicesByCategory = services.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = []
  }
  acc[service.category].push(service)
  return acc
}, {})
