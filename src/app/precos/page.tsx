import { buildMetadata } from '@/lib/seo'
import { PRICING_PLANS } from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'
import PricingGrid from '@/components/PricingGrid'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'Planos IPTV Brasil | Preços a Partir de R$24,99 | WebCSGO',
  description:
    'Confira os planos IPTV WebCSGO: 1, 3, 6 ou 12 meses, com preços a partir de R$20/mês. Pagamento via PIX, cartão ou boleto. Garantia de 7 dias.',
  path: '/precos/',
})

const PAYMENT_METHODS = [
  {
    icon: '⚡',
    title: 'PIX',
    description: 'Aprovação instantânea, 24 horas por dia, todos os dias da semana.',
  },
  {
    icon: '💳',
    title: 'Cartão de Crédito',
    description: 'Aceitamos Visa, Mastercard, Elo e American Express, com opção de parcelamento.',
  },
  {
    icon: '🧾',
    title: 'Boleto Bancário',
    description: 'Confirmação em até 1-2 dias úteis após o pagamento.',
  },
]

export default function PrecosPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Preços' }]} />

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Planos e Preços
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            Escolha o plano ideal para você. Todos incluem o catálogo completo de mais
            de 150.000 canais, qualidade 4K e suporte 24/7, com garantia de devolução
            em 7 dias.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <PricingGrid detailed />
      </section>

      {/* Comparison table */}
      <section className="bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Compare os Planos
            </h2>
            <p className="mt-3 text-gray-400">
              Quanto maior o período, maior a sua economia mensal.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#111827] text-gray-300">
                  <th className="px-5 py-4 font-semibold">Recurso</th>
                  {PRICING_PLANS.map((plan) => (
                    <th key={plan.id} className="px-5 py-4 text-center font-semibold text-white">
                      {plan.name}
                      {plan.popular && (
                        <span className="ml-1 text-blue-400">★</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="bg-[#0b0b12]">
                  <td className="px-5 py-4 text-gray-400">Preço por mês</td>
                  {PRICING_PLANS.map((plan) => (
                    <td key={plan.id} className="px-5 py-4 text-center font-bold text-white">
                      R${plan.pricePerMonth}
                    </td>
                  ))}
                </tr>
                <tr className="bg-[#111827]">
                  <td className="px-5 py-4 text-gray-400">Valor total</td>
                  {PRICING_PLANS.map((plan) => (
                    <td key={plan.id} className="px-5 py-4 text-center text-gray-200">
                      R${plan.totalPrice}
                    </td>
                  ))}
                </tr>
                <tr className="bg-[#0b0b12]">
                  <td className="px-5 py-4 text-gray-400">Canais inclusos</td>
                  {PRICING_PLANS.map((plan) => (
                    <td key={plan.id} className="px-5 py-4 text-center text-gray-200">
                      +150.000
                    </td>
                  ))}
                </tr>
                <tr className="bg-[#111827]">
                  <td className="px-5 py-4 text-gray-400">Qualidade máxima</td>
                  {PRICING_PLANS.map((plan) => (
                    <td key={plan.id} className="px-5 py-4 text-center text-gray-200">
                      4K Ultra HD
                    </td>
                  ))}
                </tr>
                <tr className="bg-[#0b0b12]">
                  <td className="px-5 py-4 text-gray-400">Tecnologia Anti-Freeze</td>
                  {PRICING_PLANS.map((plan) => (
                    <td key={plan.id} className="px-5 py-4 text-center text-green-400">
                      ✓
                    </td>
                  ))}
                </tr>
                <tr className="bg-[#111827]">
                  <td className="px-5 py-4 text-gray-400">Suporte 24/7</td>
                  {PRICING_PLANS.map((plan) => (
                    <td key={plan.id} className="px-5 py-4 text-center text-green-400">
                      ✓
                    </td>
                  ))}
                </tr>
                <tr className="bg-[#0b0b12]">
                  <td className="px-5 py-4 text-gray-400">Garantia de devolução</td>
                  {PRICING_PLANS.map((plan) => (
                    <td key={plan.id} className="px-5 py-4 text-center text-gray-200">
                      7 dias
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Payment methods */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Formas de Pagamento
          </h2>
          <p className="mt-3 text-gray-400">
            Escolha a opção mais conveniente para você, com total segurança.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PAYMENT_METHODS.map((method) => (
            <div
              key={method.title}
              className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center"
            >
              <span className="text-3xl">{method.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{method.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-green-500/20 bg-green-500/5 px-6 py-12 text-center sm:flex-row sm:text-left">
          <span className="text-5xl">🛡️</span>
          <div>
            <h3 className="text-2xl font-extrabold text-white">
              7 Dias de Garantia de Devolução
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Assine com tranquilidade. Se não ficar satisfeito, devolvemos o seu
              dinheiro em até 7 dias corridos após a compra, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Escolha Seu Plano Agora"
        subtitle="Fale com a nossa equipe pelo WhatsApp e comece a assistir em poucos minutos."
        buttonLabel="Falar no WhatsApp"
        message="Olá! Vi os planos no site e gostaria de assinar a IPTV WebCSGO."
      />
    </>
  )
}
