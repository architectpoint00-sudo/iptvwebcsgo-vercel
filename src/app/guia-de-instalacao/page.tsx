import { buildMetadata } from '@/lib/seo'
import { INSTALL_GUIDES } from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'Guia de Instalação - IPTV WEBCSGO',
  description:
    'Configurar IPTV é simples e rápido. Veja o passo a passo completo de instalação para Smart TV, Android, Fire Stick, celular, computador e MAG Box.',
  path: '/guia-de-instalacao/',
})

export default function GuiaDeInstalacaoPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[{ label: 'Início', href: '/' }, { label: 'Guia de Instalação' }]}
        />

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Guia de Instalação
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            Configurar a sua IPTV é simples e rápido. Escolha o seu dispositivo abaixo
            e siga o passo a passo. Se precisar de ajuda, nossa equipe de suporte está
            disponível 24 horas por dia pelo WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {INSTALL_GUIDES.map((guide, index) => (
            <div
              key={guide.device}
              className="rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-2xl">
                  {guide.icon}
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                    Dispositivo {index + 1}
                  </span>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    {guide.device}
                  </h2>
                </div>
              </div>

              <ol className="mt-6 flex flex-col gap-4">
                {guide.steps.map((step, stepIndex) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                      {stepIndex + 1}
                    </span>
                    <span className="pt-0.5 text-sm leading-relaxed text-gray-300 sm:text-base">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 text-center sm:p-12">
          <span className="text-4xl">🛠️</span>
          <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
            Precisa de Ajuda com a Instalação?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
            Nossa equipe de suporte pode te ajudar a configurar seu dispositivo passo a
            passo, gratuitamente, por chamada de vídeo ou mensagens no WhatsApp.
          </p>
        </div>
      </section>

      <CtaSection
        title="Fale com o Suporte Técnico"
        subtitle="Estamos disponíveis 24 horas por dia, 7 dias por semana, para te ajudar com a instalação."
        buttonLabel="Preciso de Ajuda"
        message="Olá! Estou tentando instalar a IPTV WebCSGO e preciso de ajuda."
      />
    </>
  )
}
