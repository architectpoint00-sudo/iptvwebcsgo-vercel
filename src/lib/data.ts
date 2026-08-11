/* ------------------------------------------------------------------ */
/*  Homepage: features                                                 */
/* ------------------------------------------------------------------ */

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export const HOME_FEATURES: FeatureItem[] = [
  {
    icon: '📺',
    title: '150.000+ Canais',
    description:
      'Acesso a mais de 150 mil canais de TV ao vivo de todo o mundo, incluindo esportes, filmes, séries, notícias e muito mais.',
  },
  {
    icon: '🎬',
    title: 'Qualidade 4K Ultra HD',
    description:
      'Transmissão em alta definição, chegando a 4K Ultra HD, para uma experiência visual incrível em qualquer tela.',
  },
  {
    icon: '⚡',
    title: 'Tecnologia Anti-Freeze',
    description:
      'Nossa tecnologia exclusiva elimina travamentos e buffering, garantindo streaming contínuo 24 horas por dia.',
  },
  {
    icon: '💬',
    title: 'Suporte 24/7 via WhatsApp',
    description:
      'Equipe de suporte técnico disponível 24 horas por dia, 7 dias por semana, diretamente pelo WhatsApp.',
  },
]

/* ------------------------------------------------------------------ */
/*  Homepage: testimonials                                             */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  name: string
  location: string
  rating: number
  quote: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carlos Silva',
    location: 'São Paulo, SP',
    rating: 5,
    quote:
      'Uso a IPTV WebCSGO há mais de 1 ano e nunca tive problema de travamento. A qualidade em 4K é impressionante e o suporte responde em minutos!',
  },
  {
    name: 'Ana Oliveira',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    quote:
      'Testei vários serviços de IPTV antes de encontrar a WebCSGO. É de longe o melhor custo-benefício, com canais que realmente funcionam e não travam.',
  },
  {
    name: 'Roberto Santos',
    location: 'Belo Horizonte, BH',
    rating: 5,
    quote:
      'Minha família toda usa: eu assisto aos jogos, minha esposa às novelas, e meus filhos aos canais infantis. Tudo funciona perfeitamente em vários dispositivos ao mesmo tempo.',
  },
]

/* ------------------------------------------------------------------ */
/*  Stats bars (reused on Home / Sobre / Canais)                       */
/* ------------------------------------------------------------------ */

export interface StatItem {
  value: string
  label: string
}

export const HOME_STATS: StatItem[] = [
  { value: '150.000+', label: 'Canais' },
  { value: '4K UHD', label: 'Qualidade' },
  { value: 'Anti-Freeze', label: 'Tecnologia' },
  { value: '99.9%', label: 'Uptime' },
]

export const ABOUT_STATS: StatItem[] = [
  { value: '150.000+', label: 'Canais' },
  { value: '50.000+', label: 'Clientes' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Suporte' },
]

export const CHANNELS_STATS: StatItem[] = [
  { value: '150.000+', label: 'Canais e Conteúdos' },
  { value: '4K UHD', label: 'Qualidade Máxima' },
  { value: '99.9%', label: 'Uptime' },
  { value: 'Diária', label: 'Atualização' },
]

/* ------------------------------------------------------------------ */
/*  Pricing plans (Home + /precos/)                                    */
/* ------------------------------------------------------------------ */

export interface PricingPlan {
  id: string
  name: string
  pricePerMonth: number
  totalPrice: number
  badge?: string
  popular?: boolean
  tagline: string
  features: string[]
  whatsappMessage: string
}

const PLAN_FEATURES = [
  '+150.000 canais ao vivo',
  'Filmes e séries em VOD',
  'Qualidade 4K Ultra HD',
  'Tecnologia Anti-Freeze',
  'Compatível com todos os dispositivos',
  'Suporte 24/7 via WhatsApp',
  'Ativação imediata',
  'Garantia de 7 dias',
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1-mes',
    name: '1 Mês',
    pricePerMonth: 45,
    totalPrice: 45,
    tagline: 'Ideal para experimentar o serviço completo por um mês.',
    features: PLAN_FEATURES,
    whatsappMessage: 'Olá! Quero contratar o plano de 1 Mês por R$45,00.',
  },
  {
    id: '3-meses',
    name: '3 Meses',
    pricePerMonth: 35,
    totalPrice: 105,
    badge: 'Economize 22%',
    tagline: 'Ótimo equilíbrio entre economia e flexibilidade.',
    features: PLAN_FEATURES,
    whatsappMessage:
      'Olá! Quero contratar o plano de 3 Meses por R$35,00/mês (R$105,00 no total).',
  },
  {
    id: '6-meses',
    name: '6 Meses',
    pricePerMonth: 25,
    totalPrice: 150,
    badge: 'Mais Popular',
    popular: true,
    tagline: 'A escolha da maioria dos nossos clientes.',
    features: PLAN_FEATURES,
    whatsappMessage:
      'Olá! Quero contratar o plano de 6 Meses por R$25,00/mês (R$150,00 no total).',
  },
  {
    id: '12-meses',
    name: '12 Meses',
    pricePerMonth: 20,
    totalPrice: 240,
    badge: 'Melhor Custo-Benefício',
    tagline: 'O menor preço por mês para quem não quer se preocupar depois.',
    features: PLAN_FEATURES,
    whatsappMessage:
      'Olá! Quero contratar o plano de 12 Meses por R$20,00/mês (R$240,00 no total).',
  },
]

/* ------------------------------------------------------------------ */
/*  Category tags (Home)                                               */
/* ------------------------------------------------------------------ */

export const CATEGORY_TAGS: string[] = [
  'Esportes',
  'Cinema',
  'Notícias',
  'Infantil',
  'Documentários',
  'Música',
  'Internacional',
  'Séries',
]

/* ------------------------------------------------------------------ */
/*  "Por Que Escolher" (Home)                                          */
/* ------------------------------------------------------------------ */

export interface WhyItem {
  icon: string
  title: string
  description: string
}

export const WHY_CHOOSE_US: WhyItem[] = [
  {
    icon: '🛡️',
    title: 'Estabilidade',
    description:
      'Servidores robustos com tecnologia anti-freeze que garantem transmissão estável, sem travamentos ou buffering.',
  },
  {
    icon: '⭐',
    title: 'Canais Exclusivos',
    description:
      'Acesso a canais exclusivos que você não encontra em outros provedores, incluindo PPV e eventos especiais.',
  },
  {
    icon: '📱',
    title: 'Compatibilidade',
    description:
      'Funciona em Smart TVs, Android, iOS, Fire Stick, MAG Box, computadores e muito mais dispositivos.',
  },
  {
    icon: '🚀',
    title: 'Suporte Rápido',
    description:
      'Atendimento via WhatsApp com resposta em minutos, todos os dias da semana, incluindo feriados.',
  },
  {
    icon: '🎁',
    title: 'Teste Grátis',
    description:
      'Experimente antes de comprar com nosso teste grátis de 6 horas, sem compromisso e sem cartão de crédito.',
  },
  {
    icon: '🔒',
    title: 'Pagamento Seguro',
    description:
      'Diversas formas de pagamento seguras: PIX, cartão de crédito e boleto bancário.',
  },
]

/* ------------------------------------------------------------------ */
/*  "Como Funciona" (Home)                                             */
/* ------------------------------------------------------------------ */

export interface StepItem {
  number: string
  title: string
  description: string
}

export const HOW_IT_WORKS: StepItem[] = [
  {
    number: '1',
    title: 'Escolha Seu Plano',
    description:
      'Selecione o plano ideal para você entre nossas opções de 1, 3, 6 ou 12 meses.',
  },
  {
    number: '2',
    title: 'Faça o Pagamento',
    description:
      'Pague com PIX, cartão de crédito ou boleto bancário de forma rápida e segura.',
  },
  {
    number: '3',
    title: 'Comece a Assistir',
    description:
      'Receba seus dados de acesso em minutos e comece a assistir imediatamente.',
  },
]

/* ------------------------------------------------------------------ */
/*  FAQ                                                                 */
/* ------------------------------------------------------------------ */

export interface FaqItem {
  question: string
  answer: string
}

export const FAQ_HOME: FaqItem[] = [
  {
    question: 'O que é IPTV?',
    answer:
      'IPTV (Internet Protocol Television) é uma tecnologia que permite assistir a canais de TV, filmes e séries através da internet, sem necessidade de antena ou TV a cabo tradicional.',
  },
  {
    question: 'Em quais dispositivos posso usar?',
    answer:
      'Nossa IPTV funciona em Smart TVs, Android, iOS, Fire Stick, MAG Box, computadores, notebooks e tablets. Basta ter uma conexão de internet estável.',
  },
  {
    question: 'Como funciona o teste grátis?',
    answer:
      'Oferecemos um teste grátis de 6 horas para você experimentar a qualidade do nosso serviço antes de assinar um plano, sem compromisso.',
  },
  {
    question: 'Como faço a instalação?',
    answer:
      'A instalação é simples e leva poucos minutos. Enviamos um passo a passo completo e nossa equipe de suporte ajuda em todo o processo pelo WhatsApp.',
  },
  {
    question: 'O serviço é estável, sem travamentos?',
    answer:
      'Sim! Utilizamos tecnologia anti-freeze e servidores de alta performance para garantir uma transmissão estável 24 horas por dia, 7 dias por semana.',
  },
  {
    question: 'Quais formas de pagamento vocês aceitam?',
    answer:
      'Aceitamos PIX, cartão de crédito e boleto bancário para sua comodidade e segurança em todas as transações.',
  },
]

export const FAQ_EXTRA: FaqItem[] = [
  {
    question: 'Qual o tempo de resposta do suporte?',
    answer:
      'Nosso suporte via WhatsApp responde em menos de 5 minutos na maioria das vezes. Por e-mail, o prazo é de até 24 horas.',
  },
  {
    question: 'Vocês atendem finais de semana e feriados?',
    answer:
      'Sim, nosso suporte funciona 24 horas por dia, 7 dias por semana, incluindo finais de semana e feriados.',
  },
  {
    question: 'Posso tirar dúvidas antes de comprar?',
    answer:
      'Claro! Fale com nossa equipe pelo WhatsApp para tirar todas as suas dúvidas antes de assinar qualquer plano.',
  },
  {
    question: 'Como recebo meus dados de acesso após a compra?',
    answer:
      'Após a confirmação do pagamento, você recebe seus dados de acesso diretamente no WhatsApp em poucos minutos.',
  },
]

export const FAQ_ALL: FaqItem[] = [...FAQ_HOME, ...FAQ_EXTRA]

/* ------------------------------------------------------------------ */
/*  Sobre Nós                                                           */
/* ------------------------------------------------------------------ */

export const ABOUT_WHY_CARDS: WhyItem[] = [
  {
    icon: '🖥️',
    title: 'Tecnologia',
    description:
      'Investimos constantemente em infraestrutura de servidores de alta performance e tecnologia anti-freeze para garantir a melhor experiência de streaming do mercado.',
  },
  {
    icon: '📚',
    title: 'Catálogo',
    description:
      'Mais de 150.000 canais e conteúdos sob demanda, incluindo esportes, filmes, séries, documentários e muito mais, atualizados diariamente.',
  },
  {
    icon: '🎧',
    title: 'Suporte',
    description:
      'Equipe de suporte técnico disponível 24 horas por dia, 7 dias por semana, via WhatsApp, pronta para resolver qualquer dúvida ou problema.',
  },
  {
    icon: '💰',
    title: 'Preços',
    description:
      'Planos acessíveis para todos os bolsos, com opções a partir de R$20 por mês e garantia de devolução do dinheiro em 7 dias.',
  },
]

export interface ValueItem {
  icon: string
  title: string
  description: string
}

export const ABOUT_VALUES: ValueItem[] = [
  {
    icon: '✅',
    title: 'Qualidade',
    description:
      'Comprometidos em oferecer a melhor qualidade de imagem e som, sem travamentos, em todos os nossos canais e conteúdos.',
  },
  {
    icon: '🔍',
    title: 'Transparência',
    description:
      'Preços claros, sem taxas escondidas, e comunicação honesta com todos os nossos clientes, do primeiro contato ao suporte contínuo.',
  },
  {
    icon: '💡',
    title: 'Inovação',
    description:
      'Sempre em busca das últimas tecnologias para melhorar a experiência de streaming e a estabilidade do serviço para os nossos assinantes.',
  },
]

/* ------------------------------------------------------------------ */
/*  Contato                                                             */
/* ------------------------------------------------------------------ */

export interface ResponseTime {
  channel: string
  time: string
}

export const RESPONSE_TIMES: ResponseTime[] = [
  { channel: 'WhatsApp', time: 'menos de 5 minutos' },
  { channel: 'E-mail', time: 'até 24 horas' },
]

/* ------------------------------------------------------------------ */
/*  Teste Grátis                                                       */
/* ------------------------------------------------------------------ */

export const TRIAL_INCLUDES: string[] = [
  'Acesso completo a todos os canais ao vivo',
  'Qualidade de imagem em até 4K Ultra HD',
  'Suporte via WhatsApp durante todo o período de teste',
  'Compatibilidade com o seu dispositivo (Smart TV, celular, computador etc.)',
  'Catálogo de filmes e séries em VOD',
]

export const TRIAL_STEPS: StepItem[] = [
  {
    number: '1',
    title: 'Envie uma mensagem no WhatsApp',
    description: 'Clique no botão de teste grátis e fale com a nossa equipe.',
  },
  {
    number: '2',
    title: 'Informe seu dispositivo',
    description:
      'Conte pra gente se você vai testar em Smart TV, celular, computador, Fire Stick ou outro aparelho.',
  },
  {
    number: '3',
    title: 'Receba seus dados de acesso',
    description:
      'Nossa equipe envia usuário, senha e o link do aplicativo recomendado em poucos minutos.',
  },
  {
    number: '4',
    title: 'Instale o aplicativo recomendado',
    description:
      'Siga o passo a passo simples de instalação enviado junto com seus dados de acesso.',
  },
  {
    number: '5',
    title: 'Comece a assistir por 6 horas',
    description:
      'Aproveite o teste grátis de 6 horas com acesso completo, sem compromisso.',
  },
]

export const TRIAL_WHY: string[] = [
  'Comprovar a estabilidade e a qualidade da transmissão antes de pagar qualquer valor.',
  'Verificar a compatibilidade com o seu dispositivo específico.',
  'Avaliar a qualidade da imagem e do som em 4K Ultra HD.',
  'Conhecer a agilidade e a qualidade do nosso suporte via WhatsApp.',
]

export const TRIAL_REQUIREMENTS: string[] = [
  'Conexão de internet com no mínimo 10 Mbps de velocidade',
  'Dispositivo compatível: Smart TV, Android, iOS, Fire Stick, MAG Box ou computador',
  'Aplicativo de IPTV instalado (nós indicamos o melhor para o seu aparelho)',
]

export const TRIAL_FAQ: FaqItem[] = [
  {
    question: 'O teste é realmente gratuito?',
    answer:
      'Sim, totalmente gratuito e sem compromisso. Você não precisa fornecer dados de pagamento para testar.',
  },
  {
    question: 'Posso testar mais de uma vez?',
    answer:
      'O teste grátis está disponível uma vez por cliente, mas nossa equipe pode avaliar exceções em casos especiais.',
  },
]

/* ------------------------------------------------------------------ */
/*  Programa de Revendedor                                             */
/* ------------------------------------------------------------------ */

export const RESELLER_BENEFITS: WhyItem[] = [
  {
    icon: '💵',
    title: 'Preços Exclusivos',
    description:
      'Compre créditos com desconto especial de atacado e revenda com a sua própria margem de lucro.',
  },
  {
    icon: '📊',
    title: 'Painel de Revendedor',
    description:
      'Acesso a um painel completo para gerenciar seus clientes, créditos e ativações em tempo real.',
  },
  {
    icon: '🚫',
    title: 'Sem Investimento Mínimo',
    description:
      'Comece com o investimento que fizer sentido para você, sem valores mínimos obrigatórios.',
  },
  {
    icon: '🎧',
    title: 'Suporte Prioritário',
    description:
      'Atendimento exclusivo e prioritário para revendedores, com uma linha direta de suporte técnico.',
  },
  {
    icon: '📣',
    title: 'Material de Marketing',
    description:
      'Receba banners, textos e materiais prontos para divulgar o seu negócio nas redes sociais.',
  },
]

export const RESELLER_STEPS: StepItem[] = [
  {
    number: '1',
    title: 'Entre em contato pelo WhatsApp',
    description: 'Fale com a nossa equipe comercial e conte sobre o seu objetivo.',
  },
  {
    number: '2',
    title: 'Converse sobre seu plano de revenda',
    description:
      'Definimos juntos o volume de créditos e a melhor condição para o seu negócio.',
  },
  {
    number: '3',
    title: 'Receba acesso ao painel de revendedor',
    description:
      'Você recebe login e senha do painel para gerenciar clientes e ativações.',
  },
  {
    number: '4',
    title: 'Compre créditos com preço de atacado',
    description: 'Adquira créditos com desconto progressivo conforme o volume.',
  },
  {
    number: '5',
    title: 'Comece a revender e gerar renda extra',
    description: 'Defina seus preços e comece a vender para os seus próprios clientes.',
  },
]

export const RESELLER_FAQ: FaqItem[] = [
  {
    question: 'Preciso ter experiência para ser revendedor?',
    answer:
      'Não é necessário experiência prévia. Nossa equipe orienta você em todo o processo, do cadastro à primeira venda.',
  },
  {
    question: 'Qual o investimento inicial?',
    answer:
      'Não há valor mínimo obrigatório. Você pode começar com a quantidade de créditos que achar melhor para o seu negócio.',
  },
  {
    question: 'Como funciona o suporte para revendedores?',
    answer:
      'Revendedores têm uma linha prioritária de atendimento via WhatsApp, com respostas rápidas para você e para os seus clientes.',
  },
  {
    question: 'Posso definir meus próprios preços de venda?',
    answer:
      'Sim! Você tem total liberdade para definir os preços de revenda para os seus clientes finais.',
  },
]

/* ------------------------------------------------------------------ */
/*  Guia de Instalação                                                  */
/* ------------------------------------------------------------------ */

export interface InstallGuide {
  icon: string
  device: string
  steps: string[]
}

export const INSTALL_GUIDES: InstallGuide[] = [
  {
    icon: '📺',
    device: 'Smart TV (Samsung, LG e outras)',
    steps: [
      'Acesse a loja de aplicativos da sua Smart TV.',
      'Baixe um aplicativo de IPTV compatível (ex: IPTV Smarters, Smart IPTV ou SS IPTV).',
      'Abra o aplicativo instalado.',
      'Insira os dados fornecidos pela nossa equipe (usuário, senha ou lista M3U).',
      'Aguarde o carregamento dos canais e aproveite.',
    ],
  },
  {
    icon: '📡',
    device: 'Android TV / Fire Stick',
    steps: [
      'Acesse a Google Play Store ou a Amazon App Store.',
      'Baixe o aplicativo IPTV Smarters Pro ou similar.',
      'Abra o aplicativo e selecione "Login with Xtream Codes API" ou "M3U URL".',
      'Insira as credenciais enviadas pela nossa equipe.',
      'Confirme e comece a assistir.',
    ],
  },
  {
    icon: '📱',
    device: 'Celular / Tablet (Android e iOS)',
    steps: [
      'Baixe o aplicativo IPTV Smarters ou similar na App Store ou Google Play.',
      'Abra o aplicativo.',
      'Cadastre os dados de acesso enviados pelo WhatsApp.',
      'Toque em "Adicionar usuário" e confirme.',
      'Explore os canais direto do seu celular ou tablet.',
    ],
  },
  {
    icon: '💻',
    device: 'Computador (Windows / Mac)',
    steps: [
      'Baixe um player compatível, como VLC ou IPTV Smarters para PC.',
      'Instale o aplicativo no seu computador.',
      'Abra o programa e localize a opção de adicionar lista/playlist.',
      'Insira o link M3U ou os dados fornecidos pela nossa equipe.',
      'Salve e comece a assistir.',
    ],
  },
  {
    icon: '📦',
    device: 'MAG Box',
    steps: [
      'Ligue o seu MAG Box e acesse as configurações.',
      'Vá até a opção "Configurações do Portal".',
      'Insira a URL do portal fornecida pela nossa equipe.',
      'Salve as configurações e reinicie o dispositivo.',
      'Os canais serão carregados automaticamente.',
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Compatibilidade de dispositivos (Canais + Guia de Instalação)       */
/* ------------------------------------------------------------------ */

export interface DeviceItem {
  icon: string
  name: string
}

export const DEVICE_COMPATIBILITY: DeviceItem[] = [
  { icon: '📺', name: 'Smart TV (Samsung, LG, Android TV)' },
  { icon: '🔥', name: 'Fire Stick / Fire TV' },
  { icon: '🤖', name: 'Android (celular e tablet)' },
  { icon: '🍎', name: 'iOS (iPhone e iPad)' },
  { icon: '💻', name: 'Computador (Windows e Mac)' },
  { icon: '📦', name: 'MAG Box / Formuler' },
]

/* ------------------------------------------------------------------ */
/*  Canais — categorias principais (cards de visão geral)               */
/* ------------------------------------------------------------------ */

export interface ChannelCategory {
  id: string
  icon: string
  name: string
  count: string
  description: string
  sample: string[]
}

export const CHANNEL_MAIN_CATEGORIES: ChannelCategory[] = [
  {
    id: 'esportes',
    icon: '⚽',
    name: 'Esportes',
    count: '500+',
    description:
      'Futebol, UFC, boxe, NBA, NFL, Fórmula 1 e muito mais, com cobertura completa dos principais campeonatos.',
    sample: ['ESPN', 'Fox Sports', 'Premiere', 'SporTV', 'Combate', 'TNT Sports', 'DAZN', 'beIN Sports'],
  },
  {
    id: 'cinema',
    icon: '🎬',
    name: 'Cinema',
    count: '800+',
    description: 'Canais de filmes 24 horas por dia, com lançamentos e clássicos do cinema.',
    sample: ['Telecine', 'HBO', 'HBO2', 'Cinemax', 'Paramount Channel', 'TCM', 'Megapix', 'Warner Channel'],
  },
  {
    id: 'noticias',
    icon: '📰',
    name: 'Notícias',
    count: '200+',
    description: 'Cobertura jornalística nacional e internacional 24 horas por dia.',
    sample: ['GloboNews', 'CNN Brasil', 'Band News', 'Jovem Pan News', 'Record News', 'BBC News', 'CNN International', 'Fox News'],
  },
  {
    id: 'infantil',
    icon: '🧸',
    name: 'Infantil',
    count: '150+',
    description: 'Desenhos e programação infantil para todas as idades, com controle parental disponível.',
    sample: ['Cartoon Network', 'Discovery Kids', 'Disney Channel', 'Nickelodeon', 'Gloob', 'Nick Jr.', 'Baby TV', 'Disney Junior'],
  },
  {
    id: 'documentarios',
    icon: '🌍',
    name: 'Documentários',
    count: '300+',
    description: 'Natureza, história, ciência e curiosidades para toda a família.',
    sample: ['Discovery Channel', 'History Channel', 'National Geographic', 'Animal Planet', 'Discovery Turbo', 'Discovery Science', 'ID', 'Nat Geo Wild'],
  },
  {
    id: 'musica',
    icon: '🎵',
    name: 'Música',
    count: '100+',
    description: 'Videoclipes, shows e programação musical non-stop.',
    sample: ['MTV', 'Multishow', 'Music Box Brazil', 'VH1', 'Box Brazil', 'MTV Live'],
  },
  {
    id: 'internacional',
    icon: '🌐',
    name: 'Internacional',
    count: '50.000+',
    description: 'Canais de Portugal, Estados Unidos, Espanha, Itália, França, Alemanha, América Latina, Ásia e muito mais.',
    sample: ['RTP1', 'ABC', 'La 1', 'Rai 1', 'TF1', 'ARD', 'Telemundo', 'Univision'],
  },
  {
    id: 'series',
    icon: '🍿',
    name: 'Séries',
    count: '600+',
    description: 'Canais dedicados a séries e um catálogo VOD gigante para maratonar.',
    sample: ['Warner Channel', 'Sony Channel', 'AXN', 'Universal TV', 'FX', 'TNT Séries', 'Space', 'Studio Universal'],
  },
]

/* ------------------------------------------------------------------ */
/*  Canais — seções detalhadas                                          */
/* ------------------------------------------------------------------ */

export interface ChannelSection {
  id: string
  icon: string
  title: string
  count: string
  description: string
  channels: string[]
}

export const CHANNEL_DETAILED_SECTIONS: ChannelSection[] = [
  {
    id: 'tv-aberta',
    icon: '📡',
    title: 'TV Aberta',
    count: '50+',
    description: 'Todos os canais abertos brasileiros, com sinal estável em alta definição.',
    channels: ['Globo', 'SBT', 'Record', 'Band', 'RedeTV!', 'Cultura', 'Gazeta', 'TV Brasil', 'Rede 21', 'TV Aparecida'],
  },
  {
    id: 'canais-fechados',
    icon: '📶',
    title: 'Canais Fechados',
    count: '200+',
    description: 'Toda a programação de entretenimento da TV por assinatura tradicional.',
    channels: ['GNT', 'Multishow', 'Viva', 'Sony Channel', 'Warner Channel', 'Universal TV', 'AXN', 'Space', 'FX', 'TNT', 'Paramount Network', 'A&E', 'Lifetime', 'E! Entertainment', 'Comedy Central'],
  },
  {
    id: 'esportes-detalhe',
    icon: '⚽',
    title: 'Esportes',
    count: '500+',
    description: 'A cobertura esportiva mais completa, com todos os principais campeonatos ao vivo.',
    channels: ['ESPN', 'ESPN2', 'ESPN3', 'ESPN4', 'Fox Sports', 'Fox Sports 2', 'Premiere', 'Premiere Clubes', 'SporTV', 'SporTV2', 'SporTV3', 'Combate', 'BandSports', 'TNT Sports', 'DAZN', 'beIN Sports', 'Nosso Futebol', 'Canal GOAT', 'Cazé TV', 'Onefootball'],
  },
  {
    id: 'filmes-vod',
    icon: '🎞️',
    title: 'Filmes VOD',
    count: '30.000+',
    description:
      'Catálogo com mais de 30 mil filmes sob demanda, com lançamentos, clássicos e franquias completas, atualizado semanalmente.',
    channels: ['Ação', 'Comédia', 'Drama', 'Terror', 'Ficção Científica', 'Romance', 'Animação', 'Suspense'],
  },
  {
    id: 'series-vod',
    icon: '📀',
    title: 'Séries VOD',
    count: '15.000+',
    description: 'Mais de 15 mil episódios de séries disponíveis a qualquer momento, temporadas completas.',
    channels: ['Drama', 'Comédia', 'Crime', 'Fantasia', 'Reality Show', 'Anime', 'Novelas', 'Documentário'],
  },
  {
    id: 'cinema-ao-vivo',
    icon: '🎬',
    title: 'Cinema ao Vivo',
    count: '800+',
    description: 'Canais de filmes 24 horas com programação contínua.',
    channels: ['Telecine Premium', 'Telecine Action', 'Telecine Touch', 'Telecine Fun', 'Telecine Pipoca', 'Telecine Cult', 'HBO', 'HBO2', 'HBO Plus', 'HBO Family', 'Cinemax', 'Paramount Channel', 'TCM', 'Megapix', 'Warner Channel', 'Studio Universal', 'FX Movies', 'AMC', 'Sony Movies', 'Star Channel'],
  },
  {
    id: 'infantil-detalhe',
    icon: '🧸',
    title: 'Infantil',
    count: '150+',
    description: 'Programação infantil segura e divertida, com opção de controle parental.',
    channels: ['Cartoon Network', 'Cartoonito', 'Discovery Kids', 'Disney Channel', 'Disney Junior', 'Disney XD', 'Nickelodeon', 'Nick Jr.', 'Gloob', 'Gloobinho', 'Baby TV', 'Boomerang', 'Tooncast', 'Space Kids'],
  },
  {
    id: 'noticias-detalhe',
    icon: '📰',
    title: 'Notícias',
    count: '200+',
    description: 'Jornalismo nacional e internacional 24 horas por dia.',
    channels: ['GloboNews', 'CNN Brasil', 'CNN International', 'Band News', 'Jovem Pan News', 'Record News', 'BBC News', 'Fox News', 'Euronews', 'France 24', 'Bloomberg', 'Sky News'],
  },
  {
    id: 'documentarios-detalhe',
    icon: '🌍',
    title: 'Documentários',
    count: '300+',
    description: 'Conteúdo educativo e de entretenimento sobre natureza, ciência e história.',
    channels: ['Discovery Channel', 'Discovery Turbo', 'Discovery Science', 'Discovery Theater', 'Discovery Home & Health', 'History Channel', 'History2', 'National Geographic', 'Nat Geo Wild', 'Animal Planet', 'ID Investigation Discovery', 'Off', 'Curiosity Stream'],
  },
  {
    id: 'musica-detalhe',
    icon: '🎵',
    title: 'Música',
    count: '100+',
    description: 'Videoclipes, shows ao vivo e canais musicais 24 horas.',
    channels: ['MTV', 'MTV Live', 'Multishow', 'Music Box Brazil', 'VH1', 'Box Brazil', 'Bis', 'Palco MTV'],
  },
  {
    id: 'internacional-detalhe',
    icon: '🌐',
    title: 'Internacional',
    count: '50.000+',
    description: 'A maior grade internacional do mercado, com canais de todos os continentes.',
    channels: ['Portugal: RTP1, RTP2, SIC, TVI', 'EUA: ABC, NBC, CBS, FOX, The CW', 'Espanha: La 1, Antena 3, Telecinco', 'Itália: Rai 1, Rai 2, Mediaset', 'França: TF1, France 2', 'Alemanha: ARD, ZDF, RTL', 'América Latina: Caracol, RCN, Telemundo, Univision', 'Ásia, Oriente Médio e África'],
  },
  {
    id: 'religiosos',
    icon: '🙏',
    title: 'Religiosos',
    count: '80+',
    description: 'Canais religiosos de diversas denominações, transmitindo 24 horas por dia.',
    channels: ['Rede Vida', 'Canção Nova', 'Rede Aparecida', 'TV Aparecida', 'Boas Novas', 'Rede Gospel'],
  },
  {
    id: 'animes',
    icon: '🎌',
    title: 'Animes',
    count: '5.000+',
    description: 'Catálogo completo de animes legendados e dublados, dos clássicos aos últimos lançamentos da temporada.',
    channels: ['Ação', 'Aventura', 'Shonen', 'Shojo', 'Slice of Life', 'Fantasia'],
  },
  {
    id: 'adultos',
    icon: '🔞',
    title: 'Adultos',
    count: '300+',
    description:
      'Categoria de conteúdo adulto para maiores de 18 anos, disponível mediante solicitação e que pode ser bloqueada gratuitamente via controle parental.',
    channels: ['Disponível sob solicitação', 'Pode ser desativado a qualquer momento'],
  },
  {
    id: 'recursos',
    icon: '⚙️',
    title: 'Recursos e Funcionalidades',
    count: '',
    description: 'Ferramentas incluídas em todos os planos para uma experiência completa.',
    channels: [
      'Guia de Programação (EPG) completo',
      'Catch-up TV com até 7 dias de conteúdo',
      'Multi-tela em vários dispositivos',
      'Pause, Play e Rewind ao vivo',
      'Atualização diária de conteúdo',
      'Servidores redundantes anti-queda',
      'Legendas e áudio em múltiplos idiomas',
      'Qualidade adaptável: SD, HD, Full HD e 4K',
    ],
  },
]
