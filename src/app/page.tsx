import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { WHATSAPP_TRIAL } from '@/lib/constants'
import {
  HOME_FEATURES,
  TESTIMONIALS,
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
  title: 'IPTV Brasil | +150.000 Canais HD, Full HD e 4K | WebCSGO IPTV',
  description:
    'Melhor IPTV do Brasil com +150.000 canais ao vivo, filmes e séries. Qualidade 4K, sem travamentos. Teste grátis 24h. Planos a partir de R$24,99/mês.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-300 sm:text-sm">
            O Provedor de IPTV Mais Confiável do Brasil
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Experiência IPTV Sem Interrupções, com{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              150.000+ Canais
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Tecnologia Anti-Freeze, qualidade 4K Ultra HD e suporte técnico 24/7.
            Streaming perfeito em todos os seus dispositivos. Teste grátis agora.
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

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-3 text-gray-400">
            Milhares de brasileiros já confiam na IPTV WebCSGO todos os dias.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#111827] p-6"
            >
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5Z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
              </div>
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
              Tudo que você precisa para uma experiência de streaming perfeita.
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
              Se você não ficar satisfeito, devolvemos o seu dinheiro em até 7 dias
              corridos após a compra. Sem burocracia.
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
          subtitle="Junte-se a milhares de clientes satisfeitos e comece a assistir seus canais favoritos hoje mesmo."
          buttonLabel="Falar no WhatsApp"
          message="Olá! Quero começar a assistir agora mesmo. Pode me ajudar a escolher um plano?"
        />
      </div>
    </>
  )
}
