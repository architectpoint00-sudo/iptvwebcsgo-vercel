import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import {
  CHANNEL_MAIN_CATEGORIES,
  CHANNEL_DETAILED_SECTIONS,
  CHANNELS_STATS,
  DEVICE_COMPATIBILITY,
} from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'
import StatsBar from '@/components/StatsBar'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'Lista de Canais IPTV | +150.000 Canais ao Vivo | WebCSGO',
  description:
    'Veja a lista completa de canais IPTV WebCSGO: esportes, cinema, séries, infantil, notícias, documentários, música e canais internacionais. Mais de 150.000 opções.',
  path: '/canais/',
})

export default function CanaisPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Canais' }]} />

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Lista Completa de Canais IPTV
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            Conheça o catálogo da IPTV WebCSGO: mais de 150.000 canais e conteúdos entre
            TV ao vivo, filmes e séries em VOD. Esportes, cinema, notícias, infantil,
            documentários, música e uma grade internacional gigante, tudo em qualidade
            HD, Full HD e 4K Ultra HD, com tecnologia anti-freeze para você assistir
            sem travamentos.
          </p>
        </div>
      </section>

      {/* Overview cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNEL_MAIN_CATEGORIES.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="scroll-mt-24 rounded-2xl border border-white/10 bg-[#111827] p-6 transition-colors hover:border-blue-500/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{category.icon}</span>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-300">
                  {category.count}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-white">{category.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {category.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.sample.map((name) => (
                  <span
                    key={name}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed sections */}
      <section className="bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Catálogo Completo por Categoria
            </h2>
            <p className="mt-3 text-gray-400">
              Confira todos os canais e conteúdos disponíveis em cada categoria.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-14">
            {CHANNEL_DETAILED_SECTIONS.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{section.icon}</span>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {section.title}
                    </h3>
                  </div>
                  {section.count && (
                    <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 text-xs font-bold text-white">
                      {section.count} canais
                    </span>
                  )}
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-400">
                  {section.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {section.channels.map((channel) => (
                    <span
                      key={channel}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-gray-200 sm:text-sm"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <StatsBar stats={CHANNELS_STATS} />
      </section>

      {/* Device compatibility */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Assista em Qualquer Dispositivo
          </h2>
          <p className="mt-3 text-gray-400">
            Todo o catálogo acima está disponível nos principais dispositivos do
            mercado.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {DEVICE_COMPATIBILITY.map((device) => (
            <div
              key={device.name}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-[#111827] p-5 text-center"
            >
              <span className="text-3xl">{device.icon}</span>
              <span className="text-xs font-medium text-gray-300">{device.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">
          Veja o passo a passo completo no nosso{' '}
          <Link href="/guia-de-instalacao/" className="text-blue-400 hover:text-blue-300">
            Guia de Instalação
          </Link>
          .
        </p>
      </section>

      <CtaSection
        title="Gostou do Catálogo?"
        subtitle="Comece agora com um teste grátis de 6 horas e comprove a qualidade de todos esses canais."
        buttonLabel="Quero Testar Grátis"
        message="Olá! Vi a lista de canais no site e gostaria de solicitar meu teste grátis de 6 horas."
      />
    </>
  )
}
