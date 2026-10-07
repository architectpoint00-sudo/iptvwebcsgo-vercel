import { buildMetadata } from '@/lib/seo'
import { RESELLER_BENEFITS, RESELLER_STEPS, RESELLER_FAQ } from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'
import FaqAccordion from '@/components/FaqAccordion'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'Programa de Revendedor - IPTV WEBCSGO',
  description:
    'Programa de revenda IPTV WebCSGO: créditos com preço de atacado, painel de revendedor e atendimento pelo WhatsApp. Saiba como funciona e como começar.',
  path: '/programa-de-revendedor/',
})

export default function ProgramaDeRevendedorPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[{ label: 'Início', href: '/' }, { label: 'Programa de Revendedor' }]}
        />

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Programa de Revendedor
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            Quer revender IPTV para os seus próprios clientes? No programa de revendedor você compra créditos com preço de atacado, usa um painel para gerenciar acessos e fala com a equipe pelo WhatsApp. Os valores dependem do volume combinado.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESELLER_BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-white/10 bg-[#111827] p-6 transition-colors hover:border-blue-500/40"
            >
              <span className="text-3xl">{benefit.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Como Funciona
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {RESELLER_STEPS.map((step) => (
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

      {/* Pricing info */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#111827] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Tabela de Preços Personalizada
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
            Os preços de revenda variam de acordo com o volume de créditos adquiridos.
            Quanto maior a quantidade, maior o desconto. Entre em contato conosco para
            receber uma tabela de preços personalizada de acordo com o seu volume
            esperado de vendas.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <div className="mt-10">
            <FaqAccordion items={RESELLER_FAQ} />
          </div>
        </div>
      </section>

      <CtaSection
        title="Comece a Revender Hoje Mesmo"
        subtitle="Fale com a nossa equipe comercial e descubra as condições especiais para revendedores."
        buttonLabel="Quero Ser Revendedor"
        message="Olá! Tenho interesse em me tornar um revendedor IPTV WebCSGO."
      />
    </>
  )
}
