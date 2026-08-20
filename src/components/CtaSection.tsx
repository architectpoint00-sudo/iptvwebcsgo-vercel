import Link from 'next/link'
import { whatsappLink } from '@/lib/constants'

export default function CtaSection({
  title,
  subtitle,
  buttonLabel = 'Falar no WhatsApp',
  message,
}: {
  title: string
  subtitle: string
  buttonLabel?: string
  message: string
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950 via-[#0e0e1a] to-purple-950 px-6 py-16 text-center sm:px-16">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">{subtitle}</p>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-600/30 transition-transform hover:scale-105"
          >
            {buttonLabel}
          </a>
        </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/precos/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-gray-300 transition hover:border-emerald-500/30 hover:text-white">
            Planos e Precos
          </Link>
          <Link href="/canais/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-gray-300 transition hover:border-emerald-500/30 hover:text-white">
            Lista de Canais
          </Link>
          <Link href="/teste-gratis/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-gray-300 transition hover:border-emerald-500/30 hover:text-white">
            Teste Gratis
          </Link>
          <Link href="/faq/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-gray-300 transition hover:border-emerald-500/30 hover:text-white">
            Perguntas Frequentes
          </Link>
        </div>
      </div>
    </section>
  )
}
