import { PRICING_PLANS } from '@/lib/data'
import { whatsappLink } from '@/lib/constants'

export default function PricingGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PRICING_PLANS.map((plan) => (
        <div
          key={plan.id}
          className={`relative flex flex-col rounded-2xl border p-6 transition-transform hover:-translate-y-1 ${
            plan.popular
              ? 'border-transparent bg-gradient-to-b from-blue-950/60 to-[#111827] shadow-2xl shadow-blue-600/20 ring-2 ring-blue-500'
              : 'border-white/10 bg-[#111827]'
          }`}
        >
          {plan.badge && (
            <span
              className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-200'
              }`}
            >
              {plan.badge}
            </span>
          )}

          <h3 className="mt-3 text-lg font-bold text-white">{plan.name}</h3>
          <p className="mt-1 text-sm text-gray-400">{plan.tagline}</p>

          <div className="mt-5 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-white">
              R${plan.pricePerMonth}
            </span>
            <span className="text-sm text-gray-400">/mês</span>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Total de R${plan.totalPrice} cobrado uma única vez
          </p>

          <ul className="mt-6 flex flex-1 flex-col gap-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          {detailed && (
            <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-relaxed text-gray-500">
              Pagamento único via PIX, cartão de crédito ou boleto. Acesso liberado
              automaticamente após a confirmação do pagamento.
            </p>
          )}

          <a
            href={whatsappLink(plan.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105 ${
              plan.popular
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Comprar Agora
          </a>
        </div>
      ))}
    </div>
  )
}
