import { buildMetadata } from '@/lib/seo'
import { SUPPORT_EMAIL, WHATSAPP_DISPLAY } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = buildMetadata({
  title: 'Política de Privacidade - IPTV WEBCSGO',
  description:
    'Política de Privacidade da IPTV WebCSGO: como coletamos, usamos, armazenamos e protegemos os seus dados pessoais.',
  path: '/politica-de-privacidade/',
})

const SECTIONS = [
  {
    title: '1. Introdução',
    paragraphs: [
      'A IPTV WebCSGO ("nós", "nosso" ou "WebCSGO") respeita a sua privacidade e está comprometida em proteger os dados pessoais dos visitantes do nosso site e dos nossos clientes. Esta Política de Privacidade explica quais informações coletamos, como as utilizamos, com quem podemos compartilhá-las e quais são os seus direitos em relação a esses dados.',
      'Ao utilizar o nosso site ou contratar os nossos serviços, você concorda com as práticas descritas nesta Política de Privacidade.',
    ],
  },
  {
    title: '2. Informações que Coletamos',
    paragraphs: [
      'Podemos coletar as seguintes categorias de informações:',
    ],
    list: [
      'Dados de contato: nome, número de telefone/WhatsApp e e-mail, fornecidos quando você entra em contato conosco ou contrata um plano.',
      'Dados de pagamento: informações necessárias para processar pagamentos via PIX, cartão de crédito ou boleto bancário, processadas por parceiros de pagamento seguros.',
      'Dados de uso: informações técnicas sobre como você acessa e utiliza o nosso site, como endereço IP, tipo de dispositivo, navegador e páginas visitadas.',
      'Comunicações: registros de conversas realizadas com a nossa equipe de suporte via WhatsApp ou e-mail, para fins de qualidade e histórico de atendimento.',
    ],
  },
  {
    title: '3. Como Usamos Suas Informações',
    paragraphs: ['Utilizamos os dados coletados para as seguintes finalidades:'],
    list: [
      'Fornecer, ativar e manter o acesso ao serviço de IPTV contratado.',
      'Processar pagamentos e emitir confirmações de compra.',
      'Prestar suporte técnico e responder a dúvidas e solicitações.',
      'Enviar comunicações relacionadas ao serviço, como avisos de renovação ou manutenção.',
      'Melhorar a experiência do usuário em nosso site e nos nossos serviços.',
      'Cumprir obrigações legais e regulatórias aplicáveis.',
    ],
  },
  {
    title: '4. Compartilhamento de Dados',
    paragraphs: [
      'Não vendemos os seus dados pessoais a terceiros. Podemos compartilhar informações limitadas com prestadores de serviços que nos auxiliam na operação do negócio, como processadores de pagamento e ferramentas de comunicação (por exemplo, WhatsApp Business), sempre com o objetivo de viabilizar o serviço contratado.',
      'Também podemos divulgar informações quando exigido por lei, ordem judicial ou por autoridade governamental competente.',
    ],
  },
  {
    title: '5. Cookies e Tecnologias Semelhantes',
    paragraphs: [
      'O nosso site pode utilizar cookies e tecnologias semelhantes para melhorar a navegação, entender como os visitantes utilizam o site e personalizar conteúdos. Você pode configurar o seu navegador para recusar cookies, embora isso possa afetar algumas funcionalidades do site.',
    ],
  },
  {
    title: '6. Segurança dos Dados',
    paragraphs: [
      'Adotamos medidas técnicas e organizacionais razoáveis para proteger os seus dados pessoais contra acesso não autorizado, perda, alteração ou divulgação indevida. Apesar dos nossos esforços, nenhum sistema de transmissão ou armazenamento de dados é 100% seguro, e não podemos garantir segurança absoluta.',
    ],
  },
  {
    title: '7. Seus Direitos (LGPD)',
    paragraphs: [
      'De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:',
    ],
    list: [
      'Confirmar a existência de tratamento dos seus dados pessoais.',
      'Acessar os seus dados pessoais que mantemos.',
      'Corrigir dados incompletos, inexatos ou desatualizados.',
      'Solicitar a exclusão dos seus dados pessoais, quando aplicável.',
      'Revogar o consentimento fornecido anteriormente.',
      'Solicitar a portabilidade dos seus dados a outro fornecedor de serviço, quando aplicável.',
    ],
  },
  {
    title: '8. Retenção de Dados',
    paragraphs: [
      'Mantemos os seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, incluindo obrigações legais, contratuais ou de prestação de contas.',
    ],
  },
  {
    title: '9. Alterações a Esta Política',
    paragraphs: [
      'Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por exigências legais. Recomendamos que você revise esta página regularmente. A data da última atualização está indicada no topo desta página.',
    ],
  },
  {
    title: '10. Contato',
    paragraphs: [
      `Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato conosco pelo e-mail ${SUPPORT_EMAIL} ou pelo WhatsApp ${WHATSAPP_DISPLAY}.`,
    ],
  },
]

export default function PoliticaDePrivacidadePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[{ label: 'Início', href: '/' }, { label: 'Política de Privacidade' }]}
      />

      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
        Política de Privacidade
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
