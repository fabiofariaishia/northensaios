import { SERVICE_CATEGORIES } from '../utils/constants'
import gloveBagImg from '../assets/images/services/glove-bag.jpg'
import shoulderBagImg from '../assets/images/services/shoulder-bag.jpg'
import toolBagImg from '../assets/images/services/tool-bag.jpg'
import nylonSlingImg from '../assets/images/services/nylon-sling.jpg'
import loadbusterImg from '../assets/images/services/loadbuster.jpg'
import wheelChockImg from '../assets/images/services/wheel-chock.jpg'
import hoistBucketImg from '../assets/images/services/hoist-bucket.jpg'
import mechanicalPlierImg from '../assets/images/services/mechanical-plier.jpg'
import hydraulicPlierImg from '../assets/images/services/hydraulic-plier.jpg'
import crimpDiesImg from '../assets/images/services/crimp-dies.jpg'
import testWeightBagImg from '../assets/images/services/test-weight-bag.jpg'
import dynamometerImg from '../assets/images/services/dynamometer.jpg'

export const services = [
  // Ensaios em EPIs
  {
    id: 1,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Luvas Isolantes',
    description: 'Ensaios elétricos em luvas isolantes de borracha conforme NR10 e ABNT NBR 16297',
    image: gloveBagImg,
    norms: ['NR10', 'ABNT NBR 16297']
  },
  {
    id: 2,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Capacetes Classe A e B',
    description: 'Ensaios dielétricos em capacetes de segurança Classes A e B conforme ABNT NBR 8221',
    image: shoulderBagImg,
    norms: ['ABNT NBR 8221', 'NR10']
  },
  {
    id: 3,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Mangas Isolantes',
    description: 'Ensaios elétricos em mangas isolantes de borracha para proteção de braços',
    image: toolBagImg,
    norms: ['NR10', 'ABNT NBR 16295']
  },
  {
    id: 4,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Lençóis de Borracha',
    description: 'Ensaios em lençóis e tapetes isolantes de borracha',
    image: nylonSlingImg,
    norms: ['NR10', 'ABNT']
  },
  {
    id: 5,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Detectores de Tensão',
    description: 'Ensaios elétricos em detectores de tensão portáteis',
    image: loadbusterImg,
    norms: ['NR10', 'ABNT NBR 16325']
  },
  {
    id: 6,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Bastões de Manobra',
    description: 'Ensaios dielétricos em bastões de manobra isolados',
    image: loadbusterImg,
    norms: ['NR10', 'ABNT']
  },
  {
    id: 7,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Escadas Isoladas',
    description: 'Ensaios elétricos em escadas extensíveis e de abrir isoladas',
    image: wheelChockImg,
    norms: ['NR10', 'ABNT NBR 10622']
  },
  {
    id: 8,
    category: SERVICE_CATEGORIES.EPIS,
    title: 'Ensaios em Cestas Aéreas',
    description: 'Ensaios elétricos em cestas aéreas isoladas para trabalho em altura',
    image: hoistBucketImg,
    norms: ['NR10', 'ABNT']
  },

  // Calibração e Manutenção
  {
    id: 9,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Alicates Mecânicos',
    description: 'Calibração e manutenção de alicates compressores mecânicos com rastreabilidade RBC',
    image: mechanicalPlierImg,
    norms: ['RBC/INMETRO']
  },
  {
    id: 10,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Alicates Hidráulicos',
    description: 'Calibração e manutenção de alicates compressores hidráulicos',
    image: hydraulicPlierImg,
    norms: ['RBC/INMETRO']
  },
  {
    id: 11,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Tesourões',
    description: 'Calibração de tesourões hidráulicos para corte de cabos',
    image: crimpDiesImg,
    norms: ['RBC/INMETRO']
  },
  {
    id: 12,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Bombas Hidráulicas',
    description: 'Calibração de bombas hidráulicas manuais e elétricas',
    image: testWeightBagImg,
    norms: ['RBC/INMETRO']
  },
  {
    id: 13,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Varas de Manobra',
    description: 'Calibração de varas telescópicas de manobra',
    image: loadbusterImg,
    norms: ['ABNT']
  },
  {
    id: 14,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Dinamômetros',
    description: 'Calibração de dinamômetros para medição de força e tração',
    image: dynamometerImg,
    norms: ['RBC/INMETRO']
  },
  {
    id: 15,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Terrômetros',
    description: 'Calibração de terrômetros digitais e analógicos',
    image: toolBagImg,
    norms: ['RBC/INMETRO']
  },
  {
    id: 16,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Volt-Amperímetros',
    description: 'Calibração de multímetros, volt-amperímetros e alicates amperímetros',
    image: shoulderBagImg,
    norms: ['RBC/INMETRO']
  },
  {
    id: 17,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Curvadeiras',
    description: 'Calibração de curvadeiras hidráulicas para barramento',
    image: crimpDiesImg,
    norms: ['RBC/INMETRO']
  },
  {
    id: 18,
    category: SERVICE_CATEGORIES.CALIBRATION,
    title: 'Calibração de Talhas',
    description: 'Calibração de talhas elétricas e manuais',
    image: nylonSlingImg,
    norms: ['RBC/INMETRO', 'ABNT']
  },

  // Equipamentos Eletro-hidráulicos
  {
    id: 19,
    category: SERVICE_CATEGORIES.EQUIPMENT,
    title: 'Conectores Isolantes',
    description: 'Ensaios e manutenção em conectores isolantes para redes elétricas',
    image: toolBagImg,
    norms: ['NR10', 'ABNT']
  },
  {
    id: 20,
    category: SERVICE_CATEGORIES.EQUIPMENT,
    title: 'Equipamentos Eletro-hidráulicos',
    description: 'Manutenção preventiva e corretiva em equipamentos eletro-hidráulicos',
    image: hydraulicPlierImg,
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
