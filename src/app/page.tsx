import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { WHATSAPP_TRIAL, SITE_URL } from '@/lib/constants'
import {
  HOME_FEATURES,
  HOME_STATS,
  CATEGORY_TAGS,
  WHY_CHOOSE_US,
  HOW_IT_WORKS,
  FAQ_HOME,
} from '@/lib/data'
import PricingGrid from '@/components/PricingGrid'
import StatsBar from '@/components/StatsBar'
import FaqAccordion from '@/components/FaqAccordion'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'IPTV Brasil: Teste Grátis de 6 Horas e Planos | WebCSGO IPTV',
  description:
    'IPTV com canais ao vivo, filmes e séries em HD e 4K. Peça o teste grátis de 6 horas e veja os planos a partir de R$10/mês, com guias de instalação.',
  path: '/',
})

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "WebCSGO IPTV - Assinatura",
  "description": "Assinatura de IPTV com canais ao vivo, filmes e séries sob demanda em HD, Full HD e 4K, nos planos de 1, 3, 6 e 12 meses.",
  "brand": { "@type": "Brand", "name": "WebCSGO IPTV" },
  "image": `${SITE_URL}/og-image-webcsgo.png`,
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "BRL",
    "lowPrice": "22.50",
    "highPrice": "120.00",
    "offerCount": "4",
    "availability": "https://schema.org/InStock"
  }
}

const GUIDE_LINKS = [
  { href: '/blog/como-instalar-iptv-fire-stick-2026/', title: 'IPTV no Fire Stick', text: 'Do Downloader ao login, com solução para os erros mais comuns.' },
  { href: '/blog/melhor-iptv-smart-tv-samsung-lg/', title: 'IPTV na Smart TV Samsung e LG', text: 'Como achar um player na loja da TV e configurar o acesso.' },
  { href: '/blog/configurar-iptv-android-ios-2026/', title: 'IPTV no Android e iOS', text: 'Configuração no celular e no tablet, com Xtream Codes ou M3U.' },
  { href: '/blog/como-resolver-buffering-iptv/', title: 'IPTV travando: o que fazer', text: 'Diagnóstico por sintoma: rede, Wi-Fi, DNS, app e servidor.' },
  { href: '/blog/iptv-futebol-ao-vivo/', title: 'IPTV para jogos de futebol', text: 'Como se preparar para o dia de jogo e reduzir travadas.' },
  { href: '/blog/melhores-listas-iptv-brasil-2026/', title: 'Como escolher um provedor IPTV', text: '10 critérios e um checklist para usar antes de pagar.' },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_HOME.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": { "@type": "Answer", "text": item.answer },
  })),
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-300 sm:text-sm">
            IPTV para o Brasil · Teste Grátis de 6 Horas
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            IPTV Brasil:{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Canais ao Vivo, Filmes e Séries
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Assista em Smart TV, Fire Stick, celular ou computador, em HD, Full HD e 4K
            quando o canal e a sua internet permitirem. Peça o teste grátis de 6 horas
            pelo WhatsApp e confira antes de assinar. Precisa de ajuda para instalar?
            Veja o{' '}
            <Link href="/guia-de-instalacao/" className="text-blue-300 underline underline-offset-2 hover:text-blue-200">guia de instalação</Link>.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-600/30 transition-transform hover:scale-105 sm:w-auto"
            >
              Comprar Agora
            </a>
            <a
              href={WHATSAPP_TRIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Teste Grátis
            </a>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Guias Para Instalar e Resolver Problemas
          </h2>
          <p className="mt-3 text-gray-400">
            Passo a passo por aparelho, escritos para quem vai configurar a própria IPTV.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDE_LINKS.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-2xl border border-white/10 bg-[#111827] p-5 transition-colors hover:border-blue-500/40"
            >
              <h3 className="text-base font-bold text-white">{guide.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{guide.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center transition-colors hover:border-blue-500/40"
            >
              <span className="text-4xl">{feature.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <StatsBar stats={HOME_STATS} />
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24 bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Escolha o Plano Ideal Para Você
            </h2>
            <p className="mt-3 text-gray-400">
              Todos os planos incluem acesso completo ao catálogo, sem taxas escondidas.
            </p>
          </div>
          <div className="mt-12">
            <PricingGrid />
          </div>
        </div>
      </section>

      {/* Category tags */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Conteúdo Para Todos os Gostos
          </h2>
          <p className="mt-3 text-gray-400">
            Explore as principais categorias do nosso catálogo.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CATEGORY_TAGS.map((tag) => (
            <Link
              key={tag}
              href="/canais/"
              className="rounded-full border border-white/10 bg-[#111827] px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:border-blue-500/50 hover:text-white"
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>

      {/* Por que escolher */}
      <section className="bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Por Que Escolher a IPTV WebCSGO
            </h2>
            <p className="mt-3 text-gray-400">
              O que você encontra ao assinar e como começar.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#111827] p-6 transition-colors hover:border-purple-500/40"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Como Funciona</h2>
          <p className="mt-3 text-gray-400">Comece a assistir em três passos simples.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {HOW_IT_WORKS.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-xl font-extrabold text-white">
                {step.number}
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Garantia */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-green-500/20 bg-green-500/5 px-6 py-12 text-center sm:flex-row sm:text-left">
          <span className="text-5xl">🛡️</span>
          <div>
            <h3 className="text-2xl font-extrabold text-white">
              7 Dias de Garantia de Devolução
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Se o serviço não atender, você pode pedir a devolução em até 7 dias
              corridos após a compra, conforme a política de reembolso.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-gray-400">
              Tire suas dúvidas sobre a IPTV WebCSGO antes de assinar.
            </p>
          </div>
          <div className="mt-12">
            <FaqAccordion items={FAQ_HOME} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="pt-20">
        <CtaSection
          title="Comece Agora"
          subtitle="Peça seu teste grátis de 6 horas e comece a assistir seus canais favoritos hoje mesmo."
          buttonLabel="Falar no WhatsApp"
          message="Olá! Quero começar a assistir agora mesmo. Pode me ajudar a escolher um plano?"
        />
      </div>
    </>
  )
}
