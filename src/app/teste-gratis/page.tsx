import { buildMetadata } from '@/lib/seo'
import { WHATSAPP_TRIAL } from '@/lib/constants'
import { TRIAL_INCLUDES, TRIAL_STEPS, TRIAL_WHY, TRIAL_REQUIREMENTS, TRIAL_FAQ } from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata = buildMetadata({
  title: 'Teste Grátis - IPTV WEBCSGO',
  description:
    'Sabemos que escolher um serviço de IPTV é uma decisão importante. Por isso, oferecemos um teste grátis de 6 horas para você testar a qualidade dos nossos canais antes de assinar um plano.',
  path: '/teste-gratis/',
})

export default function TesteGratisPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Teste Grátis' }]} />

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-400 sm:text-sm">
            Sem Compromisso · Sem Cartão de Crédito
          </span>
          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
            Teste Grátis por 6 Horas
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            Sabemos que escolher um serviço de IPTV é uma decisão importante. Por isso,
            antes de assinar qualquer plano, você pode experimentar o nosso serviço
            gratuitamente por 6 horas. Sem compromisso, sem cartão de crédito e sem
            burocracia.
          </p>
          <a
            href={WHATSAPP_TRIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-600/30 transition-transform hover:scale-105"
          >
            Solicitar Teste Grátis
          </a>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#111827] p-8 sm:p-12">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            O Que Está Incluso no Teste
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {TRIAL_INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-300 sm:text-base">
                <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to request - steps */}
      <section className="bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Como Solicitar Seu Teste
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {TRIAL_STEPS.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-extrabold text-white">
                  {step.number}
                </div>
                <h3 className="mt-4 text-base font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why test */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
          Por Que Testar Antes de Assinar?
        </h2>
        <ul className="mt-10 flex flex-col gap-4">
          {TRIAL_WHY.map((reason) => (
            <li
              key={reason}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#111827] px-6 py-4 text-sm leading-relaxed text-gray-300 sm:text-base"
            >
              <span className="text-xl">✅</span>
              {reason}
            </li>
          ))}
        </ul>
      </section>

      {/* Requirements */}
      <section className="bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
            Requisitos Para o Teste
          </h2>
          <ul className="mt-10 flex flex-col gap-4">
            {TRIAL_REQUIREMENTS.map((req) => (
              <li
                key={req}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#111827] px-6 py-4 text-sm leading-relaxed text-gray-300 sm:text-base"
              >
                <span className="text-xl">📶</span>
                {req}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* After the test */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Depois do Teste
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
            Gostou do nosso serviço? Escolha um dos nossos planos de 1, 3, 6 ou 12
            meses e continue aproveitando o catálogo completo de canais, filmes e
            séries, com a mesma estabilidade e qualidade que você testou. Nossa equipe
            te ajuda a migrar para o plano pago sem perder nenhum dado.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
          Perguntas Sobre o Teste Grátis
        </h2>
        <div className="mt-10">
          <FaqAccordion items={TRIAL_FAQ} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-green-950 via-[#0e0e1a] to-blue-950 px-6 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-green-600/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Peça Seu Teste Grátis Agora
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-300">
              Leva menos de 5 minutos para começar a assistir.
            </p>
            <a
              href={WHATSAPP_TRIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-green-600/30 transition-transform hover:scale-105"
            >
              Quero Meu Teste Grátis
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
