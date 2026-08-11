import { buildMetadata } from '@/lib/seo'
import { ABOUT_WHY_CARDS, ABOUT_STATS, ABOUT_VALUES } from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'
import StatsBar from '@/components/StatsBar'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'Sobre a IPTV WebCSGO | Melhor Provedor IPTV do Brasil',
  description:
    'Conheça a IPTV WebCSGO, provedor líder de IPTV no Brasil. Nossa história, missão e os valores que fazem de nós a escolha de mais de 50.000 clientes.',
  path: '/sobre/',
})

export default function SobrePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Sobre Nós' }]} />

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Sobre a IPTV WebCSGO
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            Conheça a história, a missão e os valores por trás do provedor de IPTV mais
            confiável do Brasil.
          </p>
        </div>
      </section>

      {/* Nossa história */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#111827] p-8 sm:p-12">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Nossa História
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-300 sm:text-base">
            <p>
              A IPTV WebCSGO nasceu em 2019 com uma missão simples: oferecer aos
              brasileiros acesso a entretenimento de qualidade sem as limitações da TV
              tradicional. Começamos com uma pequena equipe apaixonada por tecnologia e
              streaming, decidida a construir um serviço mais estável e acessível do que
              tudo o que existia no mercado até então.
            </p>
            <p>
              Ao longo dos anos, investimos continuamente em infraestrutura de
              servidores, tecnologia anti-freeze e um catálogo cada vez maior de canais
              e conteúdos sob demanda. Hoje, somos um dos provedores de IPTV mais
              confiáveis do Brasil, atendendo milhares de clientes em todo o país e no
              exterior, com um time de suporte disponível 24 horas por dia.
            </p>
          </div>

          <blockquote className="mt-8 rounded-2xl border-l-4 border-blue-500 bg-blue-500/5 px-6 py-5 text-base italic text-gray-200 sm:text-lg">
            &ldquo;Nossa missão é entregar entretenimento sem interrupções, com a
            melhor qualidade de imagem e o suporte mais rápido do mercado.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Por Que Nos Escolher
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_WHY_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-[#111827] p-6 transition-colors hover:border-blue-500/40"
              >
                <span className="text-3xl">{card.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <StatsBar stats={ABOUT_STATS} />
      </section>

      {/* Valores */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Nossos Valores
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ABOUT_VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center"
            >
              <span className="text-3xl">{value.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        title="Faça Parte da Nossa Família de Clientes"
        subtitle="Junte-se a mais de 50.000 clientes satisfeitos e descubra por que somos referência em IPTV no Brasil."
        buttonLabel="Falar no WhatsApp"
        message="Olá! Conheci a história da IPTV WebCSGO no site e gostaria de saber mais sobre os planos."
      />
    </>
  )
}
