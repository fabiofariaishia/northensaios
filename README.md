# North Ensaios - Site Institucional

Site institucional da North Ensaios, empresa especializada em ensaios elétricos, calibração de equipamentos e laboratório móvel.

## Tecnologias

- **React** 19.2.3
- **Vite** 7.2.7 - Build tool e dev server
- **React Router DOM** 7.10.1 - Navegação e rotas
- **Swiper** 12.0.3 - Carrossel responsivo
- **EmailJS** 4.4.1 - Formulário de contato
- **React Icons** 5.5.0 - Ícones
- **React Helmet Async** 2.0.5 - SEO (meta tags)

## Estrutura do Projeto

```
northensaios/
├── public/                 # Arquivos estáticos
│   ├── robots.txt         # Configuração para crawlers
│   ├── sitemap.xml        # Mapa do site
│   └── favicon.ico        # Ícone do site
├── src/
│   ├── pages/             # Páginas principais (6 páginas)
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── MobileLab.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── components/        # Componentes organizados por categoria
│   │   ├── layout/        # Header, Navbar, Footer, Layout
│   │   ├── common/        # Button, Card, Section, Hero, PageHeader
│   │   ├── home/          # Carousel, ServicesPreview, AboutPreview, WhyChooseUs
│   │   ├── services/      # ServiceCard, ServiceCategory, NormsCompliance
│   │   ├── contact/       # ContactForm, ContactInfo, Map
│   │   ├── lab/           # CertificationsBadges
│   │   └── shared/        # SEO, Loading, WhatsAppButton
│   ├── assets/images/     # Imagens (logo2.jpg + placeholders)
│   ├── css/               # Estilos globais
│   │   ├── index.css      # Variáveis de tema e estilos globais
│   │   ├── reset.css      # Reset CSS
│   │   └── responsive.css # Media queries
│   ├── data/              # Dados centralizados
│   │   ├── services.js
│   │   ├── carouselSlides.js
│   │   └── contactInfo.js
│   ├── utils/             # Utilitários
│   │   ├── constants.js
│   │   └── emailService.js
│   ├── routes.js          # Rotas centralizadas com lazy loading
│   ├── App.jsx            # Componente raiz
│   └── index.jsx          # Entry point
├── package.json
├── vite.config.js
├── CLAUDE.md
└── README.md
```

## Como Rodar o Projeto

### Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Acesse: http://localhost:5173
```

### Build de Produção

```bash
# Criar build otimizado
npm run build

# Preview do build
npm run preview
```

## Cores da Marca

As cores foram extraídas da logo (logo2.jpg):

- **Verde Principal**: #006B3F
- **Verde Escuro**: #004d2d
- **Verde Claro**: #008a50
- **Preto**: #1A1A1A

## Características

### SEO Otimizado
- Meta tags personalizadas por página (React Helmet)
- Sitemap.xml
- Robots.txt
- URLs semânticas
- Tags semânticas (header, nav, main, section, footer)
- Open Graph e Twitter Cards

### Performance
- Code splitting com React.lazy()
- Lazy loading de imagens
- Bundle otimizado com manual chunks
- CSS otimizado
- Swiper com carregamento eficiente

### Responsivo
- Mobile-first design
- Breakpoints: 480px, 768px, 1024px, 1440px+
- Menu mobile hambúrguer
- Imagens adaptativas
- Grid responsivo

### Funcionalidades
- Carrossel automático na home (Swiper)
- Formulário de contato funcional (EmailJS)
- Botão flutuante WhatsApp em todas as páginas
- 20 serviços categorizados
- Galeria de imagens
- Mapa do Google Maps

## Configurações Necessárias

### 1. EmailJS (Formulário de Contato)

Para o formulário de contato funcionar em produção:

1. Crie uma conta gratuita em https://www.emailjs.com
2. Configure um serviço de email (Gmail, Outlook, etc.)
3. Crie um template com as variáveis:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{company}}`
   - `{{service}}`
   - `{{message}}`
4. Obtenha as credenciais:
   - Service ID
   - Template ID
   - Public Key
5. Atualize em `src/utils/constants.js`:

```javascript
export const EMAILJS_CONFIG = {
  serviceId: 'seu_service_id',
  templateId: 'seu_template_id',
  publicKey: 'sua_public_key'
}
```

### 2. Google Maps

Atualize a URL do mapa em `src/data/contactInfo.js`:

```javascript
maps: {
  embedUrl: 'URL_DO_GOOGLE_MAPS_EMBED',
  link: 'URL_LINK_DIRETO_MAPS'
}
```

### 3. Informações de Contato

Atualize os dados reais em `src/data/contactInfo.js`:
- Telefone
- WhatsApp
- Email
- Endereço completo
- Horário de funcionamento

### 4. Imagens Reais

Substitua os placeholders por imagens reais em:
- `src/assets/images/` (logo, carrossel, serviços, sobre, laboratório)
- Formatos recomendados: WebP, JPG otimizado
- Comprimir imagens antes de usar (TinyPNG)

### 5. URL do Site

Atualize a URL do site em:
- `src/components/shared/SEO.jsx` (variável `siteUrl`)
- `public/robots.txt`
- `public/sitemap.xml`

## Deploy

### Opções Recomendadas

**Vercel (Recomendado)**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Configurações de Deploy

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 22.x

## Dados da Empresa

**Informações atualizadas com base no CNPJ:**

- **Razão Social:** FMS North Ensaios Ltda
- **CNPJ:** 49.285.584/0001-88
- **Endereço:** R. Antônio Ferreira Oliveira, 90A - Sala 01, Monte Carmelo, Montes Claros - MG, CEP 39.402-506
- **Telefone:** (38) 9857-7740
- **WhatsApp:** (38) 98577-7740
- **Email:** fmsnorthensaios@gmail.com
- **Horário:** Segunda a Sexta: 07:30 às 17:30

**Ainda precisam ser atualizados:**
- Imagens: Substituir placeholders por fotos reais
- EmailJS: Configurar credenciais em `src/utils/constants.js`
- Google Maps: Verificar coordenadas exatas do endereço

## Estrutura de Páginas

1. **Home** (`/`)
   - Carrossel (3 slides)
   - Preview de serviços (6 cards)
   - Sobre preview
   - Por que escolher (4 diferenciais)
   - CTA final

2. **Serviços** (`/servicos`)
   - 3 categorias de serviços
   - 20 serviços no total
   - Conformidade normativa
   - CTA

3. **Sobre** (`/sobre`)
   - História
   - Missão e Visão
   - Valores (4 cards)
   - Certificações

4. **Laboratório Móvel** (`/laboratorio-movel`)
   - O que é
   - Como funciona (5 passos)
   - Vantagens (6 itens)
   - Certificações
   - Galeria de imagens
   - CTA

5. **Contato** (`/contato`)
   - Informações de contato (5 cards)
   - Formulário funcional
   - Mapa Google Maps

6. **404** (`/*`)
   - Página de erro personalizada

## Suporte e Manutenção

Para dúvidas ou suporte:
- Verifique a documentação do React: https://react.dev
- Documentação do Vite: https://vite.dev
- EmailJS: https://www.emailjs.com/docs

## Licença

MIT

---

**Desenvolvido com React + Vite para North Ensaios**
