import { buildMetadata } from '@/lib/seo'
import { SUPPORT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_GENERIC } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = buildMetadata({
  title: 'Política de Reembolso - IPTV WEBCSGO',
  description:
    'Política de reembolso da WebCSGO IPTV: teste grátis de 6 horas, garantia de 7 dias corridos, condições para solicitar reembolso e prazos de processamento.',
  path: '/politica-de-reembolso/',
})

export default function PoliticaDeReembolsoPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[{ label: 'Início', href: '/' }, { label: 'Política de Reembolso' }]}
      />

      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
        Política de Reembolso
      </h1>
      <p className="mt-3 text-sm text-gray-500">Última atualização: 10 de julho de 2026</p>

      <p className="mt-8 text-sm leading-relaxed text-gray-300 sm:text-base">
        Esta Política de Reembolso descreve as condições, prazos e procedimentos para
        solicitação de devolução de valores pagos pelos serviços da WebCSGO IPTV.
        Recomendamos a leitura completa antes de contratar qualquer plano.
      </p>

      <div className="mt-10 flex flex-col gap-10">
        {/* 1 */}
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            1. Teste Gratuito (6 Horas)
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
            Antes de comprar, recomendamos fortemente utilizar o nosso teste grátis de
            6 horas. Esse período permite verificar a estabilidade do serviço, a
            qualidade da imagem e a compatibilidade com o seu dispositivo antes de
            realizar qualquer pagamento, reduzindo a necessidade de solicitar
            reembolso posteriormente.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            2. Período de Garantia
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
            Oferecemos garantia de devolução do dinheiro em até <strong className="text-white">7 (sete) dias corridos</strong>{' '}
            a partir da data de confirmação do pagamento, desde que respeitadas as
            condições descritas nesta política.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            3. Condições para Reembolso
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
            O reembolso será concedido quando:
          </p>
          <ul className="ml-1 mt-3 flex flex-col gap-2">
            {[
              'O serviço apresentar instabilidade técnica comprovada, originada do nosso lado (servidores).',
              'Nossa equipe não conseguir resolver o problema técnico relatado em um prazo razoável.',
              'A solicitação for feita dentro do prazo de 7 dias corridos após a compra.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            4. Situações Não Elegíveis
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
            Não são elegíveis para reembolso os casos de:
          </p>
          <ul className="ml-1 mt-3 flex flex-col gap-2">
            {[
              'Mudança de ideia após uso extensivo do serviço.',
              'Problemas causados pela conexão de internet do próprio cliente.',
              'Dispositivo incompatível que não foi informado previamente à nossa equipe.',
              'Compartilhamento de credenciais em violação aos Termos de Serviço.',
              'Solicitações realizadas fora do prazo de 7 dias corridos.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            5. Como Solicitar
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                number: '1',
                title: 'Entre em contato via WhatsApp',
                description: 'Fale com a nossa equipe de suporte informando o seu pedido.',
              },
              {
                number: '2',
                title: 'Informe o motivo',
                description: 'Descreva o problema encontrado com o máximo de detalhes possível.',
              },
              {
                number: '3',
                title: 'Nossa equipe analisa',
                description: 'Avaliamos o caso conforme as condições desta política.',
              },
              {
                number: '4',
                title: 'Reembolso processado',
                description: 'Caso aprovado, o valor é devolvido pelo mesmo meio de pagamento.',
              },
            ].map((step) => (
              <div key={step.number} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#111827] p-5">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-extrabold text-white">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white sm:text-base">{step.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            6. Prazo de Processamento
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
            Após a aprovação da solicitação, o reembolso é processado em até{' '}
            <strong className="text-white">5 (cinco) dias úteis</strong>. O prazo para o
            valor aparecer no seu extrato pode variar de acordo com a instituição
            financeira ou meio de pagamento utilizado.
          </p>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            7. Cancelamento de Assinatura
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
            Não realizamos cobrança recorrente automática. Como cada plano é um
            pagamento único referente ao período contratado (1, 3, 6 ou 12 meses), o
            cancelamento ocorre simplesmente ao optar por não renovar o plano ao final
            da vigência, sem necessidade de qualquer solicitação formal.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">8. Contato</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
            Para solicitar um reembolso ou tirar dúvidas sobre esta política, entre em
            contato pelo WhatsApp {WHATSAPP_DISPLAY} ou pelo e-mail {SUPPORT_EMAIL}.
          </p>
          <a
            href={WHATSAPP_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
