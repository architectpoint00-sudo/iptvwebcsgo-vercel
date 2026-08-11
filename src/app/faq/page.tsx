import { buildMetadata } from '@/lib/seo'
import { FAQ_ALL } from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'
import FaqAccordion from '@/components/FaqAccordion'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'Perguntas Frequentes (FAQ) | IPTV WebCSGO',
  description:
    'Tire suas dúvidas sobre a IPTV WebCSGO: o que é IPTV, dispositivos compatíveis, teste grátis, instalação, estabilidade, formas de pagamento e suporte.',
  path: '/faq/',
})

export default function FaqPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'FAQ' }]} />

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Perguntas Frequentes
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            Reunimos as dúvidas mais comuns sobre a IPTV WebCSGO. Não encontrou o que
            procurava? Fale com a gente pelo WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <FaqAccordion items={FAQ_ALL} />
      </section>

      <CtaSection
        title="Ainda Tem Dúvidas?"
        subtitle="Nossa equipe está pronta para te ajudar 24 horas por dia, 7 dias por semana."
        buttonLabel="Falar no WhatsApp"
        message="Olá! Vi o FAQ no site, mas ainda tenho uma dúvida."
      />
    </>
  )
}
