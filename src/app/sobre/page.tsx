import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { ABOUT_WHY_CARDS, ABOUT_STATS, ABOUT_VALUES } from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'
import StatsBar from '@/components/StatsBar'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'Sobre a IPTV WebCSGO | Como o Serviço Funciona',
  description:
    'Conheça a IPTV WebCSGO: como funciona o serviço, o teste grátis de 6 horas, os planos e como falar com o suporte pelo WhatsApp.',
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
            Entenda como funciona a IPTV WebCSGO, o que está incluído e como falar com a equipe.
          </p>
        </div>
      </section>

      {/* Nossa história */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#111827] p-8 sm:p-12">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Como Funciona o Serviço
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-300 sm:text-base">
            <p>
              A IPTV WebCSGO é um serviço de IPTV voltado ao público brasileiro. Você
              contrata um plano de 1, 3, 6 ou 12 meses, recebe os dados de acesso pelo
              WhatsApp e assiste por um aplicativo de IPTV na Smart TV, no Fire Stick,
              no celular, no tablet ou no computador.
            </p>
            <p>
              Este site reúne o que é preciso para decidir e configurar sozinho: os{' '}
              <Link href="/precos/" className="text-blue-400 hover:text-blue-300">planos e preços</Link>,
              o <Link href="/teste-gratis/" className="text-blue-400 hover:text-blue-300">teste grátis de 6 horas</Link>,
              o <Link href="/guia-de-instalacao/" className="text-blue-400 hover:text-blue-300">guia de instalação</Link>{' '}
              e artigos no <Link href="/blog/" className="text-blue-400 hover:text-blue-300">blog</Link>{' '}
              sobre configuração, travamentos e como avaliar qualquer provedor antes de
              pagar. O atendimento é feito pelo WhatsApp e pelo e-mail de suporte.
            </p>
          </div>

          <blockquote className="mt-8 rounded-2xl border-l-4 border-blue-500 bg-blue-500/5 px-6 py-5 text-base italic text-gray-200 sm:text-lg">
            Nossa proposta é simples: você testa primeiro, confere na sua própria
            internet e só assina se o serviço atender.
          </blockquote>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              O Que Você Encontra Aqui
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
            Como Trabalhamos
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
        title="Experimente Antes de Assinar"
        subtitle="Peça um teste grátis de 6 horas, confira a qualidade na sua própria TV e só então escolha um plano."
        buttonLabel="Falar no WhatsApp"
        message="Olá! Li a página Sobre da IPTV WebCSGO e gostaria de saber mais sobre os planos."
      />
    </>
  )
}
