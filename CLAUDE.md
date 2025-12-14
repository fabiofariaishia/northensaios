# North Ensaios - Site Institucional

## Sobre o Projeto

Site estático institucional para a **North Ensaios**, empresa especializada em ensaios elétricos e reforma de equipamentos com geração de laudos de calibração. O site apresenta os serviços, certificações e diferenciais da empresa, com foco em credibilidade, conformidade normativa e facilidade de contato.

## Plano de Implementação

**Path do plano completo:** `C:\Users\fabio\.claude\plans\rosy-juggling-manatee.md`

Este arquivo contém o plano detalhado de implementação com:
- Estrutura completa do projeto
- Componentes e páginas
- Ordem de desenvolvimento em 13 fases
- Configurações técnicas
- Otimizações de performance e SEO

## Tecnologias

- **React** - Framework frontend
- **Vite** - Build tool (mais rápido e leve)
- **React Router DOM** - Roteamento
- **Swiper** - Carrossel otimizado
- **EmailJS** - Formulário de contato funcional
- **React Helmet Async** - SEO (meta tags)
- **React Icons** - Ícones

## Estrutura do Site

### Páginas
1. **Home** - Carrossel + preview de serviços + sobre + diferenciais
2. **Serviços** - Lista completa de serviços categorizados
3. **Sobre** - História, missão/visão/valores, certificações
4. **Laboratório Móvel** - Serviço móvel + certificações e credenciais
5. **Contato** - Formulário funcional + informações + mapa

### Componentes Principais

```
src/
├── pages/              # Páginas (uma por rota)
├── components/
│   ├── layout/        # Layout, Header, Navbar, Footer
│   ├── common/        # Button, Card, Section, Hero, PageHeader
│   ├── home/          # Carousel, ServicesPreview, AboutPreview, WhyChooseUs
│   ├── services/      # ServiceCard, ServiceCategory, NormsCompliance
│   ├── contact/       # ContactForm, ContactInfo, Map
│   ├── lab/           # MobileLab, CertificationsBadges, Credentials
│   └── shared/        # WhatsAppButton, SEO, Loading
├── assets/images/     # Logo, carousel, services, etc
├── css/               # Estilos globais e responsivos
├── data/              # services.js, carouselSlides.js, contactInfo.js
├── utils/             # emailService.js, constants.js
└── routes.js          # Rotas centralizadas
```

## Design System

### Cores da Marca
Extraídas da logo (`logo2.jpg`):

```css
--primary-green: #006B3F;        /* Verde principal (raio/círculo) */
--primary-green-dark: #004d2d;   /* Verde escuro (hover) */
--primary-black: #1A1A1A;        /* Preto (texto) */
--bg-secondary: #F5F5F5;         /* Cinza claro (backgrounds) */
```

### Tipografia
- **Headings:** Poppins (bold, semibold)
- **Body:** Inter (regular, medium)
- Hierarquia: H1 (título principal) → H2 (seções) → H3 (subseções)

## Requisitos Essenciais

### 1. Carrossel na Home
- **DEVE ser o primeiro elemento** após o menu superior
- 3 slides com Swiper:
  1. "Laboratório Móvel que vai até você"
  2. "Ensaios em EPIs com Certificação"
  3. "Conformidade NR10 e ABNT"
- Autoplay, navigation, responsivo

### 2. Formulário de Contato Funcional
- Integração com **EmailJS**
- Campos: Nome*, Email*, Telefone*, Empresa, Serviço de Interesse, Mensagem*
- Validação client-side
- Feedback visual (loading, sucesso, erro)

### 3. WhatsApp Button
- Botão flutuante fixo (bottom-right) em todas as páginas
- Link direto para conversa
- Z-index alto, animação de entrada

### 4. Certificações no Laboratório Móvel
- Seção especial de certificações dentro da página Laboratório Móvel
- Badges: CREA, NR10, ABNT, credenciamento equivalente às concessionárias
- Destacar 20+ anos de experiência

### 5. Componentização Máxima
- Criar componentes reutilizáveis para evitar duplicação
- Layout único com Header, Footer, WhatsAppButton
- Section, Card, Button genéricos

### 6. Performance e SEO
- Code splitting (React.lazy)
- Lazy loading de imagens
- Bundle otimizado (< 200KB inicial)
- Meta tags por página
- Sitemap.xml e robots.txt
- Schema.org (LocalBusiness)
- Lighthouse score >90

## Conteúdo

### Fonte de Conteúdo
Baseado no site concorrente **www.oficinadoalicate.com.br**, adaptado para North Ensaios.

### Serviços Principais

**Ensaios em EPIs:**
- Luvas isolantes de borracha
- Capacetes de segurança Classes A e B
- Mangas isolantes
- Lençóis isolantes
- Detectores de tensão
- Bastões de manobra
- Escadas isoladas
- Cestas aéreas

**Calibração e Manutenção:**
- Alicates mecânicos e hidráulicos
- Tesourões
- Bombas hidráulicas
- Varas de manobra
- Dinamômetros
- Terrômetros
- Volt-amperímetros
- Curvadeiras hidráulicas
- Talhas

**Equipamentos Eletro-hidráulicos:**
- Conectores e isolantes

### Conformidade Normativa
- **NR10** - Segurança em Instalações Elétricas
- **ABNT** - Normas técnicas
- **CREA** - Registro profissional
- **Credenciamento** equivalente às concessionárias

## Ordem de Implementação (13 Fases)

1. **Setup Inicial** - Vite, dependências, estrutura de pastas, CSS global
2. **Layout e Navegação** - Header, Navbar, Footer, rotas
3. **Componentes Comuns** - Button, Card, Section, Hero, SEO
4. **Página Home** - Carousel, ServicesPreview, AboutPreview
5. **Página Serviços** - ServiceCard, categorias, NormsCompliance
6. **Página Sobre** - História, missão/visão/valores, certificações
7. **Página Lab Móvel** - MobileLab, certificações, galeria
8. **Página Contato** - ContactForm (EmailJS), Map, ContactInfo
9. **WhatsApp Button** - Botão flutuante global
10. **Conteúdo e Imagens** - Textos finais, imagens reais, otimização
11. **SEO e Performance** - Meta tags, sitemap, code splitting, Lighthouse
12. **Testes e Responsividade** - Mobile, tablet, desktop, cross-browser
13. **Deploy** - Build, Vercel/Netlify, domínio

## Configurações Técnicas

### EmailJS Setup
1. Criar conta em https://www.emailjs.com
2. Adicionar serviço de email (Gmail, Outlook, etc)
3. Criar template com variáveis: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{company}}`, `{{service}}`, `{{message}}`
4. Obter credenciais: Service ID, Template ID, Public Key
5. Implementar em `src/utils/emailService.js`

### Google Maps
- Obter API key do Google Maps
- Embed no componente `Map.jsx`
- Link para abrir no app

### Vite Config (Otimizações)
```js
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        'swiper-vendor': ['swiper']
      }
    }
  },
  minify: 'terser',
  terserOptions: {
    compress: { drop_console: true }
  }
}
```

## Comandos

### Desenvolvimento
```bash
npm install          # Instalar dependências
npm run dev          # Servidor de desenvolvimento (http://localhost:5173)
```

### Build e Deploy
```bash
npm run build        # Build de produção (dist/)
npm run preview      # Preview do build local
```

### Análise
```bash
npm run analyze      # Analisar tamanho do bundle
```

## Checklist de Qualidade

### Performance
- [ ] Code splitting implementado
- [ ] Lazy loading de imagens
- [ ] Bundle < 200KB inicial
- [ ] Lighthouse Performance >90

### SEO
- [ ] Meta tags em todas as páginas
- [ ] Sitemap.xml criado
- [ ] Robots.txt configurado
- [ ] Schema.org implementado
- [ ] URLs semânticas
- [ ] Lighthouse SEO >90

### Funcionalidade
- [ ] Todas as páginas navegáveis
- [ ] Menu responsivo (desktop + mobile)
- [ ] Carrossel funcionando
- [ ] Formulário enviando emails
- [ ] WhatsApp button funcionando
- [ ] Google Maps funcionando

### Responsividade
- [ ] Mobile (320px-480px)
- [ ] Tablet (768px-1024px)
- [ ] Desktop (1280px+)
- [ ] Cross-browser testado

### Acessibilidade
- [ ] Alt text em imagens
- [ ] Labels em inputs
- [ ] Contraste WCAG AA
- [ ] Navegação por teclado
- [ ] Lighthouse Accessibility >90

## Referências

### Concorrente
- **Site:** www.oficinadoalicate.com.br
- **Uso:** Referência de conteúdo e estrutura (adaptar, não copiar)

### Documentação
- React: https://react.dev
- React Router: https://reactrouter.com
- Swiper: https://swiperjs.com/react
- EmailJS: https://www.emailjs.com/docs
- Vite: https://vitejs.dev

## Notas de Desenvolvimento

### Prioridades
1. **Simplicidade** - Código simples e direto, evitar over-engineering
2. **Performance** - Site super leve e rápido
3. **SEO** - Otimizado para buscadores
4. **Componentização** - Máxima reutilização de componentes
5. **Responsividade** - Mobile-first

### Convenções
- Componentes funcionais com Hooks
- CSS Variables para tema
- Lazy loading de rotas com React.lazy()
- Navegação com Link do react-router-dom
- Imagens otimizadas (WebP quando possível)
- Nomenclatura em inglês para código, português para conteúdo

### Assets Necessários
- **Logo:** `logo2.jpg` (já existe)
- **Carousel:** 3 imagens de alta qualidade
- **Serviços:** Fotos de EPIs e equipamentos
- **Lab Móvel:** Fotos do laboratório móvel
- **Sobre:** Fotos da equipe/instalações
- **Certificações:** Logos de CREA, NR10, ABNT

### Dados a Coletar
- Endereço completo da empresa
- Telefones (fixo + WhatsApp)
- Email de contato
- Horário de atendimento
- Número CREA
- Credenciamentos específicos
- Anos de fundação (para calcular experiência)
- Coordenadas GPS (para Google Maps)

## Estimativa

**Desenvolvimento:** ~32 dias
- Setup e Layout: 7 dias
- Páginas: 15 dias
- Conteúdo/Imagens: 3 dias
- SEO/Performance: 2 dias
- Testes: 3 dias
- Deploy: 2 dias

**Escopo:** Site estático de 5 páginas, totalmente responsivo, otimizado e com formulário funcional.

---

**Última atualização:** 2025-12-14
**Versão do plano:** 1.0
**Status:** Em planejamento
## Instruções adicionais
- Usar codificação UTF-8 padrão ao ler e editar arquivos, mantendo acentuação e caracteres especiais quando fizer sentido no conteúdo.
