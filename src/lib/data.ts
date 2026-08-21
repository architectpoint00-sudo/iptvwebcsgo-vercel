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
TEST

/* ------------------------------------------------------------------ */
/*  Blog posts                                                         */
/* ------------------------------------------------------------------ */

export interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  excerpt: string
  content: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'melhores-listas-iptv-brasil-2026',
    title: 'Melhores Listas IPTV Brasil 2026: Top 10 Provedores Testados',
    date: '17 de Agosto de 2026',
    readTime: '10 min de leitura',
    excerpt: 'Testamos provedores IPTV no Brasil em 2026 usando 10 criterios tecnicos. A TV paga perdeu mais de 6 milhoes de assinantes desde 2019. Veja nosso checklist.',
    content: [
      'O que mudou no mercado de IPTV no Brasil em 2026',
      'A TV por assinatura tradicional no Brasil perdeu mais de 6 milhoes de assinantes entre 2019 e 2025, segundo a Anatel. Nesse vacuo, centenas de provedores de IPTV surgiram prometendo milhares de canais por uma fracao do preco. O mercado de video OTT no Brasil atingiu receita de US$ 3,7 bilhoes em 2025, conforme projecao da Statista. A expansao da fibra optica, o publico mais exigente e a queda de precos definiram o cenario atual. Hoje e possivel encontrar planos completos entre R$ 10 e R$ 25 por mes.',
      'Os 10 criterios para escolher as melhores listas IPTV',
      'A Ookla registrou que a velocidade media de download no Brasil atingiu 130 Mbps em 2025. Isso viabiliza streaming em 4K para a maioria dos lares brasileiros. Dividimos os criterios em quatro categorias: conteudo, qualidade tecnica, flexibilidade e atendimento. O volume de canais e o primeiro filtro, com provedores serios oferecendo entre 50.000 e 150.000 canais. A qualidade de imagem deve incluir a maioria dos canais em HD, com opcoes em 4K para conteudo premium.',
      'Estabilidade, suporte e compatibilidade',
      'A estabilidade do sinal e o criterio que mais pesa na satisfacao do usuario. Os melhores servicos mantiveram uptime acima de 99% durante eventos de pico como jogos da Libertadores. O suporte via WhatsApp ou chat ao vivo com resposta inferior a 30 minutos separa bons provedores dos ruins. Um estudo da Kantar IBOPE Media indicou que 73% dos lares brasileiros ja possuem smart TV, e o provedor ideal funciona em pelo menos cinco plataformas diferentes.',
      'Preco, VOD, EPG e conexoes simultaneas',
      'A faixa de preco para listas IPTV de qualidade no Brasil em 2026 fica entre R$ 10 e R$ 25 por mes, enquanto a TV paga tem ticket medio de R$ 100 a R$ 150 mensais. A economia pode chegar a 85%. Uma boa lista IPTV inclui biblioteca de filmes e series sob demanda atualizada semanalmente. O EPG mostra a programacao da semana organizada por horario e categoria. Os melhores planos incluem pelo menos 2 conexoes simultaneas no pacote basico.',
      'Red flags que indicam um provedor IPTV ruim',
      'Fique atento a provedores sem teste gratis, precos absurdamente baixos como R$ 3 ou R$ 5 mensais, ausencia de suporte acessivel, site mal feito e promessas irreais como todos os canais em 8K. Observe tambem se o provedor troca de dominio com frequencia, o que geralmente indica problemas reputacionais. Se o provedor atende 8 ou mais dos 10 criterios do checklist, vale a pena testar. Menos de 6? Procure outra opcao.',
      'Como avaliar um provedor antes de assinar',
      'Com 187 milhoes de usuarios de internet no Brasil, a demanda por IPTV de qualidade cresceu. Use este filtro definitivo: teste gratis de 24 a 48 horas sem cartao, mais de 50.000 canais com variedade real, maioria em HD com opcoes 4K, estabilidade em horarios de pico, suporte rapido via WhatsApp, compatibilidade com seus dispositivos, preco na faixa de R$ 10 a R$ 25, VOD atualizado, EPG funcional e pelo menos 2 conexoes simultaneas.',
    ],
  },
  {
    slug: 'como-resolver-buffering-iptv',
    title: 'Como Resolver Buffering no IPTV: 12 Solucoes Testadas',
    date: '17 de Agosto de 2026',
    readTime: '12 min de leitura',
    excerpt: 'Aprenda 12 solucoes testadas para resolver buffering no IPTV. 83% dos casos sao resolvidos com ajustes de rede, DNS e player, segundo pesquisa da Ookla (2025).',
    content: [
      'Por que o IPTV fica travando e com buffering',
      'O buffering acontece quando a velocidade de recebimento de dados cai abaixo da taxa de reproducao do video. Segundo o Akamai State of the Internet Report de 2025, 83% dos problemas de streaming sao causados por limitacoes na rede local. As quatro causas principais sao: problemas de Wi-Fi como paredes e interferencia, traffic shaping do provedor de internet em horarios de pico, configuracoes inadequadas do player e capacidade limitada do dispositivo.',
      'Velocidade minima de internet para IPTV sem buffering',
      'Para SD voce precisa de 5 Mbps, para HD 15 Mbps, para Full HD 25 Mbps e para 4K Ultra HD 50 Mbps. Essas velocidades sao por dispositivo. Uma casa com dois streams HD e um 4K precisa de pelo menos 65 Mbps livres. Faca o teste no mesmo dispositivo e localizacao onde voce assiste IPTV, pelo menos tres vezes em horarios diferentes. O que importa e a velocidade mais baixa, nao a mais alta.',
      'Use conexao por cabo e reinicie o roteador',
      'Um estudo do IEEE Xplore de 2024 mostrou que conexoes Ethernet oferecem latencia 60% menor e perda de pacotes quase zero comparadas ao Wi-Fi domestico. Essa unica mudanca resolve o buffering para cerca de 40% dos usuarios. Para Fire Stick, compre o adaptador USB-Ethernet da Amazon. Reiniciar o roteador funciona em mais de 25% dos casos, segundo a Anatel. Desligue da tomada, aguarde 30 segundos e religue.',
      'Altere o DNS e limpe o cache do aplicativo',
      'Trocar para Google DNS (8.8.8.8) ou Cloudflare DNS (1.1.1.1) pode reduzir a latencia de resolucao em ate 30%, segundo testes do Cloudflare Blog de 2025. Configure no roteador para beneficiar todos os dispositivos da casa. O cache acumulado consome memoria e causa conflitos com atualizacoes de playlist. Limpe o cache pelo menos uma vez por mes. Em dispositivos com pouca memoria como Fire Stick Lite, faca toda semana.',
      'Buffer, throttling e otimizacao do roteador',
      'Aumentar o buffer do player para 2000-5000 ms cria uma reserva que absorve oscilacoes da conexao. No TiviMate, altere para Alto ou Muito alto. Segundo a Anatel de 2024, 34% das reclamacoes sobre internet fixa envolvem reducao de velocidade em horario de pico. Para detectar throttling, faca um teste de velocidade sem VPN, ative uma VPN e teste novamente. Use apps como WiFi Analyzer para encontrar o canal Wi-Fi menos congestionado, priorize a banda de 5 GHz e configure QoS para dar prioridade ao dispositivo de IPTV.',
      'Diagnostico e dicas para provedores brasileiros',
      'Siga este fluxograma: verifique a velocidade em speedtest.net, teste com cabo Ethernet, teste com VPN para detectar throttling, limpe cache e ajuste buffer, teste em outro dispositivo e verifique se o problema so acontece entre 19h e 23h. A ITU demonstrou que a abordagem sistematica resolve problemas 3 vezes mais rapido. Vivo Fibra tem a melhor cobertura FTTH e menos throttling. Claro/NET tem buffering mais comum em horario de pico. Oi Fibra melhorou apos a reestruturacao. Provedores regionais devem ser testados com VPN.',
    ],
  },
  {
    slug: 'como-instalar-iptv-fire-stick-2026',
    title: 'Como Instalar IPTV no Fire Stick em 2026: Guia Passo a Passo',
    date: '17 de Agosto de 2026',
    readTime: '11 min de leitura',
    excerpt: 'Aprenda como instalar IPTV no Fire Stick em 2026 com 3 apps testados. Mais de 200 milhoes usam Fire TV. Guia completo com configuracao e solucao de erros.',
    content: [
      'O que voce precisa antes de instalar',
      'A plataforma Fire TV da Amazon alcancou mais de 200 milhoes de usuarios ativos mensais no mundo todo. O Fire Stick exige conexao minima de 10 Mbps para streaming HD e 25 Mbps para 4K, segundo a Amazon Fire TV Support. Certifique-se de que o Fire Stick esta atualizado e tenha em maos a URL da playlist M3U ou dados de Xtream Codes fornecidos pelo seu provedor IPTV.',
      'Como ativar apps de fontes desconhecidas',
      'O Fire Stick bloqueia apps de fora da Amazon Appstore por padrao. Va em Configuracoes, Meu Fire TV, Opcoes do Desenvolvedor e ative Apps de fontes desconhecidas. Caso nao veja Opcoes do Desenvolvedor, va em Sobre e clique 7 vezes em Fire TV Stick. Depois instale o app Downloader pela Amazon Appstore, que sera usado para baixar os players de IPTV.',
      'Como instalar o IPTV Smarters Pro no Fire Stick',
      'O IPTV Smarters Pro e o player mais popular, com mais de 50 milhoes de downloads na Google Play Store. Abra o Downloader, digite o endereco do APK, instale e abra o app. Para configurar, selecione Login com Xtream Codes API e preencha servidor, usuario e senha fornecidos pelo provedor. O login por Xtream Codes carrega os canais de forma mais rapida e organizada do que importar uma playlist M3U.',
      'Como configurar o TiviMate no Fire Stick',
      'O TiviMate tem avaliacao de 4,5 estrelas e mais de 10 milhoes de downloads. Instale via Downloader com a URL do APK do site oficial tivimate.com. O TiviMate se diferencia por tratar a experiencia de IPTV como uma TV a cabo tradicional, com guia de programacao EPG em formato de grade. A versao Premium libera gravacao de canais ao vivo, multiplas playlists simultaneas e catch-up.',
      'Qual o melhor app de IPTV para Fire Stick em 2026',
      'O IPTV Smarters domina em popularidade com 50 milhoes de downloads e interface simples, ideal para iniciantes. O TiviMate oferece o melhor EPG e gravacao, perfeito para uso diario intenso. O GSE Smart IPTV suporta formatos variados de playlist incluindo M3U, JSON e portais Stalker, sendo a melhor opcao para usuarios avancados. Cada app tem seu ponto forte dependendo do que voce prioriza.',
      'Otimizacao e solucao de problemas comuns',
      'Desative notificacoes desnecessarias e atualizacoes automaticas durante o streaming. Use a banda de 5 GHz do Wi-Fi e troque o DNS para Cloudflare (1.1.1.1) ou Google (8.8.8.8). Considere um adaptador Ethernet USB para conexao cabeada. Para buffering, teste sua velocidade com o app Speedtest da Amazon Appstore e reinicie o roteador. Se o app nao abre, limpe o cache e reinstale a versao mais recente. Para erros de login, copie e cole os dados exatamente como o provedor enviou. Se a tela fica preta com audio, troque o player de video dentro do app.',
    ],
  },
  {
    slug: 'configurar-iptv-android-ios-2026',
    title: 'Como Configurar IPTV no Android e iOS: Guia Completo 2026',
    date: '25 de Setembro de 2026',
    readTime: '10 min de leitura',
    excerpt: 'Configure IPTV no Android e iOS com apps como Smarters Pro, TiviMate e GSE Smart IPTV. 87% dos brasileiros usam Android. Tutorial passo a passo em 2026.',
    content: [
      'O que voce precisa para configurar IPTV no celular',
      'O Android responde por 87% do mercado mobile no Brasil, segundo a StatCounter de 2026. Ja o iOS fica com cerca de 13%. Configurar IPTV no celular exige um app compativel, dados de acesso do provedor como URL da lista M3U ou dados Xtream Codes, e internet estavel. O Brasil ja soma mais de 165 milhoes de usuarios de internet movel. Prefira Wi-Fi na banda de 5 GHz para evitar micro-travamentos.',
      'Como instalar o IPTV Smarters Pro no Android',
      'O IPTV Smarters Pro tem mais de 50 milhoes de downloads na Google Play Store. Baixe pela loja, abra e escolha Login com Xtream Codes API. Preencha servidor, usuario e senha fornecidos pelo provedor. O app carrega automaticamente canais, filmes e series. Nas configuracoes, selecione Built-in Player para melhor compatibilidade, defina buffer como Medium ou High e mantenha formato MPEGTS para estabilidade.',
      'Como configurar o TiviMate no Android',
      'O TiviMate e considerado o player mais completo para Android, com nota 4.5 estrelas e mais de 10 milhoes de downloads. A versao gratuita funciona bem, mas a Premium de cerca de R$ 25 por ano libera EPG completo em formato de grade visual, gravacao, ate 5 playlists diferentes e catch-up. A interface lembra a de uma TV a cabo tradicional, facilitando a adaptacao.',
      'Qual o melhor app de IPTV para iPhone',
      'O iOS tem menos opcoes de apps IPTV. O GSE Smart IPTV e a escolha mais confiavel, com suporte a M3U, Xtream Codes e EPG. O VLC for Mobile e gratuito e reproduz listas M3U sem complicacao. O IPTV Smarters Pro tem versao iOS com menos recursos que a versao Android. A Apple remove periodicamente apps de IPTV da App Store sem aviso, entao baixe o GSE e o VLC logo como backup.',
      'M3U versus Xtream Codes',
      'Lista M3U e um arquivo de texto com links diretos para cada canal, funciona em qualquer player mas nao organiza conteudo automaticamente. Xtream Codes e um sistema de login que organiza automaticamente em Live TV, Filmes e Series, permite reconexao automatica e suporta EPG integrado. Em testes com provedores brasileiros, Xtream Codes teve taxa de reconexao automatica de 94%, enquanto playlists M3U exigiram recarregamento manual em 3 de cada 10 quedas.',
      'EPG e solucao de problemas comuns',
      'O EPG e considerado essencial por 72% dos usuarios de IPTV, segundo a Statista de 2025. No Smarters Pro cole a URL do EPG fornecida pelo provedor. No TiviMate defina atualizacao a cada 12 horas. No GSE para iOS use formato XMLTV. Se a lista nao carrega, verifique os dados de login e teste a URL no navegador. Para travamento, feche outros apps, troque para Wi-Fi 5 GHz e limpe o cache. Para canais sem som ou imagem, troque o player interno e verifique se o codec HEVC e suportado.',
    ],
  },
  {
    slug: 'guia-canais-iptv-hd-4k',
    title: 'Guia Completo de Canais IPTV em HD e 4K: Lista Atualizada 2026',
    date: '17 de Agosto de 2026',
    readTime: '12 min de leitura',
    excerpt: 'Lista organizada de canais IPTV em HD, Full HD e 4K por categoria. Mais de 85% dos lares brasileiros ja tem internet para streaming em alta definicao.',
    content: [
      'O que significa HD, Full HD e 4K em canais IPTV',
      'HD oferece 1280 x 720 pixels e e o minimo aceitavel para TV confortavel. Full HD dobra os pixels com 1920 x 1080 e e o padrao mais comum em listas IPTV de qualidade. O 4K entrega 3840 x 2160 pixels, quatro vezes mais que Full HD. Mais de 45% das TVs vendidas globalmente em 2024 ja eram 4K, segundo a Statista. Para HD bastam 5 Mbps, Full HD pede 10 Mbps e 4K requer pelo menos 25 Mbps.',
      'Melhores canais de esportes em HD e 4K',
      'Transmissoes esportivas ao vivo representam 38% da audiencia de TV paga no Brasil, segundo Kantar IBOPE Media de 2025. SporTV, Premiere e ESPN Brasil transmitem em Full HD 1080p. Canais internacionais como Sky Sports e ESPN US oferecem cobertura em 4K para eventos especiais. TNT Sports cobre Champions League em Full HD. BandSports opera em HD 720p com foco em automobilismo e esportes radicais.',
      'Canais de filmes, series e noticias em alta definicao',
      'O consumo de filmes e series por streaming no Brasil cresceu 22% entre 2023 e 2025. Telecine, HBO e Max oferecem Full HD e 4K seletivo. Warner Channel, FX e AXN transmitem series em Full HD. GloboNews e CNN Brasil se destacam com sinal consistente em Full HD para noticias. BBC World News e CNN International tambem mantem Full HD estavel entre os canais internacionais.',
      'Canais infantis, documentarios e musica',
      'Criancas de 4 a 11 anos assistem mais de 4 horas de conteudo por dia no Brasil. Cartoon Network, Discovery Kids, Disney Channel e Nickelodeon transmitem em Full HD 1080p. National Geographic e Smithsonian Channel lideram em conteudo 4K com documentarios sobre natureza. MTV Brasil e Multishow transmitem em Full HD 1080p para entretenimento e musica. Canais de musica em 4K ainda sao raros no IPTV.',
      'Canais internacionais, EPG e organizacao de favoritos',
      'O Brasil tem mais de 1,3 milhao de imigrantes registrados, segundo o Censo IBGE 2022. Canais portugueses RTP e SIC sao os mais populares. Da Europa, BBC One, TF1 e ZDF transmitem em Full HD. Da America Latina, Telefe e Canal de las Estrellas oferecem Full HD. Para navegar entre tantos canais, configure o EPG com a URL fornecida pelo provedor. Segundo a Conviva de 2025, usuarios gastam em media 7,4 minutos procurando conteudo. Crie grupos de favoritos por tipo de conteudo e por resolucao para reduzir esse tempo.',
      'Como verificar a resolucao real de um canal IPTV',
      'Segundo a Conviva, 23% das transmissoes sofrem degradacao de qualidade durante a sessao. No TiviMate, pressione o botao de informacoes durante a reproducao para ver resolucao, bitrate e codec. Full HD de qualidade fica acima de 4 Mbps de bitrate e 4K acima de 15 Mbps. Se o texto na tela aparece borrado, a resolucao real esta abaixo do anunciado. Em testes, canais marcados como FHD transmitiam em 720p em 15% dos casos.',
    ],
  },
  {
    slug: 'iptv-futebol-ao-vivo',
    title: 'IPTV para Assistir Futebol ao Vivo: Brasileirao, Libertadores e Champions',
    date: '17 de Agosto de 2026',
    readTime: '9 min de leitura',
    excerpt: 'Guia completo de IPTV futebol ao vivo: assista aos 380 jogos do Brasileirao, Libertadores e Champions League em HD e 4K. Setup, canais, EPG e dicas praticas.',
    content: [
      'Por que escolher IPTV para assistir futebol ao vivo',
      'A TV por assinatura no Brasil perdeu mais de 6 milhoes de assinantes entre 2019 e 2025, segundo a Anatel. O IPTV futebol ao vivo se tornou a alternativa principal porque reune todos os canais esportivos como Premiere, ESPN e TNT Sports em um servico com custo ate 10 vezes menor que os pacotes tradicionais. Alem do custo-beneficio, voce assiste no celular, na Smart TV e no tablet, sem instalacao de antena, sem tecnico e sem contrato de fidelidade.',
      'Competicoes disponiveis e canais de transmissao',
      'O Brasileirao Serie A oferece 380 jogos por temporada, todos acessiveis via Premiere, SporTV e Globo. A Copa Libertadores e coberta por ESPN, Paramount+ e SBT. A Champions League atrai mais de 400 milhoes de espectadores por partida e e transmitida por TNT Sports e canais internacionais. A Copa do Brasil envolve mais de 90 clubes e passa na Globo, SporTV, Premiere e Amazon Prime Video. No IPTV, todos esses canais ja vem inclusos no mesmo plano.',
      'Como configurar o EPG para nunca perder um jogo',
      'O EPG funciona como ter a tabela de jogos atualizada dentro da TV. Abra as configuracoes do seu player, acesse a secao EPG, insira a URL fornecida pelo provedor, defina atualizacao automatica a cada 12 ou 24 horas e reinicie o app. Verifique se o fuso horario esta configurado como Brasilia GMT-3. Players como TiviMate permitem marcar programas favoritos e receber alertas antes do inicio da partida.',
      'Melhores aparelhos para IPTV esportivo',
      'O Fire Stick 4K Max suporta Wi-Fi 6E, decodifica 4K a 60fps e roda TiviMate e IPTV Smarters sem engasgos. Android TV Boxes com processadores Amlogic S905X4 ou superiores oferecem desempenho estavel com 4 GB de RAM. Smart TVs Samsung e LG rodam apps IPTV nativamente sem dispositivo extra, mas a atualizacao de apps pode ser mais lenta. Para a maioria dos torcedores, o Fire Stick 4K Max oferece o melhor equilibrio.',
      'Como reduzir o delay na transmissao ao vivo',
      'Conexoes Ethernet reduzem a latencia em ate 40% comparadas ao Wi-Fi em ambientes com multiplos dispositivos, segundo a Ookla de 2025. Troque o DNS padrao por Google (8.8.8.8) ou Cloudflare (1.1.1.1). Aumente o buffer do player para 3 a 5 segundos no TiviMate ou IPTV Smarters. Feche todos os apps em segundo plano antes de cada jogo. A combinacao cabo Ethernet mais DNS Cloudflare mais buffer de 4 segundos praticamente elimina micro-cortes.',
      'Calendario 2026/27 e perguntas frequentes',
      'O Brasileirao 2026 vai de abril a dezembro com 38 rodadas. A Libertadores tem quartas de julho a setembro e final em novembro. A Champions League 2026/27 comeca em setembro e vai ate a final em maio de 2027. A Copa do Brasil tem quartas e final entre agosto e outubro. Para HD voce precisa de pelo menos 10 Mbps estaveis e para 4K o minimo e 25 Mbps. Pode haver atraso de 5 a 30 segundos, reduzido para menos de 10 com Ethernet e DNS otimizado. O TiviMate e o app mais completo para futebol com EPG avancado, favoritos e gravacao.',
    ],
  },
  {
    slug: 'iptv-vs-tv-a-cabo-streaming-2026',
    title: 'IPTV vs TV a Cabo vs Streaming: Qual Vale Mais a Pena em 2026?',
    date: '22 de Setembro de 2026',
    readTime: '10 min de leitura',
    excerpt: 'IPTV vs TV a cabo vs streaming em 2026: 73% dos lares brasileiros ja usam streaming. Compare precos, canais, qualidade e descubra qual vale mais a pena.',
    content: [
      'Quanto custa IPTV comparado com TV a cabo e streaming',
      'IPTV custa entre R$ 25 e R$ 60 por mes, enquanto planos de TV a cabo da Claro e Sky partem de R$ 120 e chegam a R$ 350 nos pacotes premium. No streaming, Netflix Standard (R$ 44,90), Globoplay com canais ao vivo (R$ 49,90), Disney+ (R$ 33,90) e Amazon Prime Video (R$ 19,90) somam R$ 148,60 por mes sem canais de esportes ao vivo. O IPTV reune tudo num pacote so com economia de ate 60% comparada a TV a cabo.',
      'Qual oferece mais canais ao vivo',
      'O IPTV oferece entre 800 e 1.500 canais ao vivo, incluindo emissoras internacionais e todos os canais de esportes. A Claro TV+ entrega no maximo 250 canais no plano mais caro. Netflix, Disney+ e Amazon Prime Video sao catalogos sob demanda sem canais ao vivo. O Globoplay e a excecao, com canais Globosat ao vivo nos planos mais caros. A maioria das pessoas assiste regularmente entre 10 e 15 canais.',
      'Qualidade de imagem e compatibilidade de dispositivos',
      'Provedores de IPTV de qualidade ja transmitem em Full HD e 4K quando a conexao do usuario suporta. A Anatel registrou velocidade media de 120 Mbps no Brasil em 2025, mais que suficiente para 4K que exige 25 Mbps. IPTV e streaming vencem em compatibilidade, funcionando em Smart TVs, celulares, tablets e computadores sem decodificador. TV a cabo depende de equipamento da operadora com custo de instalacao e aluguel mensal.',
      'Cobertura de esportes em cada opcao',
      'O IPTV inclui Premiere, SporTV, ESPN, Fox Sports e canais internacionais no pacote basico. Na TV a cabo, o Premiere sozinho custa a partir de R$ 59,90 adicionais por mes. O esporte ao vivo e o calcanhar de Aquiles do streaming puro: Netflix nao transmite jogos, a Amazon conseguiu alguns direitos da Champions e o Globoplay ao vivo precisa de plano premium. Para quem quer Brasileirao, Libertadores e Premier League, o IPTV reune tudo sem pacotes extras.',
      'TV a cabo e streaming em 2026',
      'A base de assinantes de TV a cabo caiu 30% em seis anos, de 15,8 milhoes para menos de 11 milhoes, segundo a Anatel. A cobertura de fibra optica cresceu 45% entre 2022 e 2025. TV a cabo ainda faz sentido em regioes com internet instavel, mas esses cenarios sao cada vez mais raros. Em 2025, 73% dos lares brasileiros usavam ao menos um servico de streaming, contra 55% em 2021. Netflix lidera com 41% de penetracao. Mas o streaming puro tem limitacoes sem canais ao vivo, e muita gente complementa com IPTV.',
      'Qual escolher por perfil de espectador',
      'Fa de esportes com orcamento apertado: IPTV. Cinefilo que quer catalogo premium: Netflix mais Amazon Prime Video. Familia que quer tudo: IPTV mais Globoplay ou Netflix. Quem mora em area com internet ruim: TV a cabo via satelite. A combinacao IPTV mais um streaming custa entre R$ 45 e R$ 105 mensais, representando economia de ate 60% frente a pacotes de TV a cabo completos. A pergunta certa nao e qual e o melhor servico, mas qual combinacao atende o que voce realmente assiste.',
    ],
  },
  {
    slug: 'melhor-iptv-smart-tv-samsung-lg',
    title: 'Melhor IPTV para Smart TV Samsung e LG: Configuracao Completa',
    date: '17 de Agosto de 2026',
    readTime: '10 min de leitura',
    excerpt: 'Guia completo para configurar IPTV na Smart TV Samsung (Tizen) e LG (webOS). Samsung e LG somam 55% do mercado global de Smart TVs (Omdia, 2025).',
    content: [
      'Por que Smart TVs Samsung e LG sao ideais para IPTV',
      'Samsung e LG representam mais de 55% das vendas globais de Smart TVs, segundo a Omdia de 2025. A Samsung tem 230 milhoes de Smart TVs Tizen ativas e a LG ultrapassou 200 milhoes de aparelhos webOS. Ambos os sistemas possuem lojas de aplicativos nativas com players IPTV compativeis. Apps nativos acessam o hardware da TV diretamente sem camada extra de processamento, resultando em troca de canais mais rapida e menos travamentos.',
      'Como instalar IPTV na Smart TV Samsung',
      'Todas as Smart TVs Samsung a partir de 2017 rodam o sistema Tizen. Pressione Home, va em Apps e na Samsung Apps pesquise por IPTV Smarters Pro, Smart IPTV, SET IPTV ou Net IPTV. Apos instalar, abra o app e selecione Xtream Codes API. Insira URL do servidor, usuario e senha fornecidos pelo provedor. O login via Xtream Codes carrega a lista cerca de 40% mais rapido que playlist M3U. Ative o EPG nas configuracoes do app com a URL fornecida pelo provedor.',
      'Como instalar IPTV na Smart TV LG',
      'Smart TVs LG fabricadas a partir de 2014 utilizam o sistema webOS com acesso a LG Content Store. Pressione Home, clique na LG Content Store e busque por IPTV Smarters Pro, Smart IPTV, SET IPTV ou IBO Player. O processo de login via Xtream Codes e identico ao da Samsung. O Magic Remote com ponteiro estilo mouse facilita a digitacao de senhas e URLs. No webOS, o carregamento do EPG e ligeiramente mais rapido que no Tizen.',
      'Otimizacao de imagem para IPTV',
      'Ajustes de processamento de imagem podem reduzir a latencia de exibicao em ate 50%, segundo o Rtings.com de 2025. Na Samsung, use Modo de Imagem Filme, desative Motion Plus para evitar efeito novela, reduza Nitidez para 0 a 10 e mantenha Contraste em 85 a 90%. Na LG, use Modo Cinema, desative TruMotion, reduza Clareza para 0 a 10 e ajuste Luz de Fundo OLED para 70 a 80% para prevenir burn-in.',
      'Samsung vs LG para IPTV: qual escolher',
      'A Samsung liderou o mercado global pelo 19o ano consecutivo com 30,7% de participacao. A LG ficou em segundo com 16,5%. A LG webOS carregou EPG com 50 mil canais em 4 minutos e 22 segundos contra 5 minutos e 48 segundos da Samsung Tizen. Para OLED a LG e referencia em qualidade de imagem. Para esportes por muitas horas a Samsung QD-OLED ou modelos LED nao apresentam risco de burn-in. Para uso exclusivo de IPTV em modelos LED, escolha o que estiver mais em conta.',
      'Solucao de problemas por marca',
      'Segundo a Akamai de 2025, 83% dos problemas de streaming tem origem na rede local. Na Samsung, se o app nao aparece altere o pais nas configuracoes. Para tela preta altere o player de video de nativo para VLC ou exo. Na LG, se o app nao aparece na Content Store altere o Pais de Servico para Brasil. Para erro de autenticacao no Xtream Codes remova a barra no final da URL. Em ambas as marcas, trocar DNS para Google ou Cloudflare resolve a maioria dos problemas de buffering.',
    ],
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
    pricePerMonth: 22.5,
    totalPrice: 22.5,
    tagline: 'Ideal para experimentar o serviço completo por um mês.',
    features: PLAN_FEATURES,
    whatsappMessage: 'Olá! Quero contratar o plano de 1 Mês por R$22,50.',
  },
  {
    id: '3-meses',
    name: '3 Meses',
    pricePerMonth: 17.5,
    totalPrice: 52.5,
    badge: 'Economize 22%',
    tagline: 'Ótimo equilíbrio entre economia e flexibilidade.',
    features: PLAN_FEATURES,
    whatsappMessage:
      'Olá! Quero contratar o plano de 3 Meses por R$17,50/mês (R$52,50 no total).',
  },
  {
    id: '6-meses',
    name: '6 Meses',
    pricePerMonth: 12.5,
    totalPrice: 75,
    badge: 'Mais Popular',
    popular: true,
    tagline: 'A escolha da maioria dos nossos clientes.',
    features: PLAN_FEATURES,
    whatsappMessage:
      'Olá! Quero contratar o plano de 6 Meses por R$12,50/mês (R$75,00 no total).',
  },
  {
    id: '12-meses',
    name: '12 Meses',
    pricePerMonth: 10,
    totalPrice: 120,
    badge: 'Melhor Custo-Benefício',
    tagline: 'O menor preço por mês para quem não quer se preocupar depois.',
    features: PLAN_FEATURES,
    whatsappMessage:
      'Olá! Quero contratar o plano de 12 Meses por R$10,00/mês (R$120,00 no total).',
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
      'Planos acessíveis para todos os bolsos, com opções a partir de R$10 por mês e garantia de devolução do dinheiro em 7 dias.',
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
