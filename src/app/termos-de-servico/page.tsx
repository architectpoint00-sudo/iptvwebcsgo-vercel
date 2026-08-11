import { buildMetadata } from '@/lib/seo'
import { SUPPORT_EMAIL, WHATSAPP_DISPLAY } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = buildMetadata({
  title: 'Termos de Serviço - IPTV WEBCSGO',
  description:
    'Termos de Serviço da IPTV WebCSGO: condições de uso, pagamentos, cancelamento e responsabilidades para a utilização dos nossos serviços de IPTV.',
  path: '/termos-de-servico/',
})

const SECTIONS = [
  {
    title: '1. Aceitação dos Termos',
    paragraphs: [
      'Ao acessar o site da IPTV WebCSGO ou contratar os nossos serviços, você concorda em cumprir estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deverá utilizar o nosso site ou os nossos serviços.',
    ],
  },
  {
    title: '2. Descrição do Serviço',
    paragraphs: [
      'A IPTV WebCSGO fornece acesso a um serviço de streaming de canais de TV, filmes e séries via internet (IPTV), mediante a contratação de um plano de assinatura. O acesso é disponibilizado através de credenciais próprias (usuário e senha ou lista M3U), para uso em dispositivos compatíveis.',
      'O conteúdo, a disponibilidade de canais e a grade de programação podem sofrer alterações a qualquer momento, sem aviso prévio, de acordo com a disponibilidade das fontes de conteúdo.',
    ],
  },
  {
    title: '3. Elegibilidade e Cadastro',
    paragraphs: [
      'Para contratar os nossos serviços, você deve ser maior de 18 anos ou ter autorização de um responsável legal. As informações fornecidas no momento da contratação devem ser verdadeiras, completas e atualizadas.',
    ],
  },
  {
    title: '4. Uso Aceitável',
    paragraphs: ['Ao utilizar o nosso serviço, você concorda em não:'],
    list: [
      'Compartilhar, revender ou ceder as suas credenciais de acesso sem autorização prévia, exceto por meio do Programa de Revendedor.',
      'Utilizar o serviço para fins ilegais ou não autorizados.',
      'Tentar acessar áreas restritas dos nossos sistemas ou interferir na infraestrutura do serviço.',
      'Realizar engenharia reversa, cópia ou redistribuição não autorizada do conteúdo transmitido.',
    ],
  },
  {
    title: '5. Pagamentos e Renovação',
    paragraphs: [
      'Os planos são cobrados de forma antecipada, conforme a duração escolhida (1, 3, 6 ou 12 meses). Aceitamos pagamentos via PIX, cartão de crédito e boleto bancário.',
      'A renovação do plano não é automática: você será avisado próximo ao vencimento para renovar o seu acesso pelo canal de sua preferência (WhatsApp).',
    ],
  },
  {
    title: '6. Cancelamento',
    paragraphs: [
      'Como não trabalhamos com cobrança recorrente automática, o cancelamento ocorre naturalmente ao final do período contratado, bastando não renovar o plano. Solicitações de reembolso são tratadas conforme a nossa Política de Reembolso.',
    ],
  },
  {
    title: '7. Propriedade Intelectual',
    paragraphs: [
      'Todo o conteúdo do site da IPTV WebCSGO — incluindo textos, logotipos, imagens e design — é de propriedade da WebCSGO ou de seus licenciadores, sendo protegido por leis de propriedade intelectual. É proibida a reprodução total ou parcial sem autorização prévia por escrito.',
    ],
  },
  {
    title: '8. Isenção de Garantias',
    paragraphs: [
      'Empregamos os melhores esforços para manter o serviço estável e disponível 24 horas por dia, utilizando servidores redundantes e tecnologia anti-freeze. No entanto, o serviço é fornecido "como está", e não garantimos que estará livre de interrupções eventuais causadas por fatores fora do nosso controle, como instabilidades de internet do usuário ou de terceiros.',
    ],
  },
  {
    title: '9. Limitação de Responsabilidade',
    paragraphs: [
      'Na máxima extensão permitida pela lei, a IPTV WebCSGO não será responsável por danos indiretos, incidentais ou consequenciais decorrentes do uso ou da impossibilidade de uso do serviço.',
    ],
  },
  {
    title: '10. Alterações aos Termos',
    paragraphs: [
      'Podemos atualizar estes Termos de Serviço periodicamente. Alterações relevantes serão comunicadas por meio do nosso site. O uso contínuo do serviço após as alterações implica na aceitação dos novos termos.',
    ],
  },
  {
    title: '11. Lei Aplicável',
    paragraphs: [
      'Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil, sem prejuízo das normas de proteção ao consumidor aplicáveis.',
    ],
  },
  {
    title: '12. Contato',
    paragraphs: [
      `Em caso de dúvidas sobre estes Termos de Serviço, entre em contato conosco pelo e-mail ${SUPPORT_EMAIL} ou pelo WhatsApp ${WHATSAPP_DISPLAY}.`,
    ],
  },
]

export default function TermosDeServicoPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[{ label: 'Início', href: '/' }, { label: 'Termos de Serviço' }]}
      />

      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
        Termos de Serviço
      </h1>
      <p className="mt-3 text-sm text-gray-500">Última atualização: 10 de julho de 2026</p>

      <div className="mt-10 flex flex-col gap-10">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-bold text-white sm:text-2xl">{section.title}</h2>
            <div className="mt-3 flex flex-col gap-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-gray-300 sm:text-base">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="ml-1 flex flex-col gap-2">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
