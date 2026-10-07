import { buildMetadata } from '@/lib/seo'
import { WHATSAPP_GENERIC, WHATSAPP_DISPLAY, SUPPORT_EMAIL } from '@/lib/constants'
import { FAQ_EXTRA, RESPONSE_TIMES } from '@/lib/data'
import Breadcrumb from '@/components/Breadcrumb'
import FaqAccordion from '@/components/FaqAccordion'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'Contato IPTV WebCSGO | Suporte via WhatsApp e E-mail',
  description:
    'Fale com a equipe IPTV WebCSGO pelo WhatsApp ou pelo e-mail suporte@iptvwebcsgo.com para tirar dúvidas, pedir teste grátis ou ajuda com a instalação.',
  path: '/contato/',
})

export default function ContatoPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Contato' }]} />

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Entre em Contato
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            Nossa equipe está pronta para ajudar você com qualquer dúvida sobre nossos
            planos, instalação ou suporte técnico. Entre em contato pelo canal de sua
            preferência.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8 text-center">
            <span className="text-4xl">💬</span>
            <h2 className="mt-4 text-xl font-bold text-white">WhatsApp</h2>
            <p className="mt-2 text-lg font-semibold text-green-400">
              {WHATSAPP_DISPLAY}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Canal principal de atendimento para dúvidas, teste grátis, compra e
              instalação.
            </p>
            <a
              href={WHATSAPP_GENERIC}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Chamar no WhatsApp
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111827] p-8 text-center">
            <span className="text-4xl">✉️</span>
            <h2 className="mt-4 text-xl font-bold text-white">E-mail</h2>
            <p className="mt-2 text-lg font-semibold text-blue-400">{SUPPORT_EMAIL}</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Envie sua dúvida por e-mail e nossa equipe responderá assim que possível.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Enviar E-mail
            </a>
          </div>
        </div>

        {/* Hours + response time */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center sm:col-span-1">
            <span className="text-3xl">🕒</span>
            <h3 className="mt-3 text-base font-bold text-white">Como Falar com a Equipe</h3>
            <p className="mt-2 text-sm text-gray-400">
              Envie uma mensagem com o seu aparelho e o problema, para agilizar o atendimento.
            </p>
          </div>
          {RESPONSE_TIMES.map((item) => (
            <div
              key={item.channel}
              className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center sm:col-span-1"
            >
              <span className="text-3xl">⚡</span>
              <h3 className="mt-3 text-base font-bold text-white">
                Atendimento — {item.channel}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{item.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="bg-[#0d0d14] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Dúvidas Frequentes
            </h2>
          </div>
          <div className="mt-12">
            <FaqAccordion items={FAQ_EXTRA} />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ainda Tem Dúvidas?"
        subtitle="Fale agora mesmo com a nossa equipe pelo WhatsApp e tire a sua dúvida."
        buttonLabel="Falar no WhatsApp"
        message="Olá! Estou na página de contato do site e gostaria de tirar uma dúvida."
      />
    </>
  )
}
