import Link from 'next/link'
import { WHATSAPP_GENERIC } from '@/lib/constants'

const PAGES_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/precos/', label: 'Preços' },
  { href: '/canais/', label: 'Canais' },
  { href: '/sobre/', label: 'Sobre Nós' },
]

const SUPPORT_LINKS = [
  { href: '/faq/', label: 'FAQ' },
  { href: '/contato/', label: 'Contato' },
  { href: '/guia-de-instalacao/', label: 'Guia de Instalação' },
]

const SUBSCRIPTION_LINKS = [
  { href: '/teste-gratis/', label: 'Teste Grátis' },
  { href: '/programa-de-revendedor/', label: 'Programa de Revendedor' },
  { href: '/politica-de-reembolso/', label: 'Política de Reembolso' },
]

export default function Footer() {
  const year = 2026

  return (
    <footer className="border-t border-white/10 bg-[#08080c]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-extrabold tracking-tight text-white">
              IPTV{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                WEBCSGO
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              O provedor de IPTV mais confiável do Brasil, com mais de 150.000 canais,
              qualidade 4K e suporte 24 horas por dia via WhatsApp.
            </p>
            <a
              href={WHATSAPP_GENERIC}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.33 5L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.2h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.09.81.82-3.01-.2-.31a8.2 8.2 0 0 1-1.26-4.4c0-4.55 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.23-8.26 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.36-.77-1.86-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28Z" />
              </svg>
              Fale no WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Páginas
            </h3>
            <ul className="mt-4 space-y-3">
              {PAGES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Suporte
            </h3>
            <ul className="mt-4 space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Assinatura
            </h3>
            <ul className="mt-4 space-y-3">
              {SUBSCRIPTION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            © {year} WebCSGO IPTV. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/politica-de-privacidade/" className="transition-colors hover:text-white">
              Política de Privacidade
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/termos-de-servico/" className="transition-colors hover:text-white">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
