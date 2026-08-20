import Link from 'next/link'
import { WHATSAPP_SUPPORT } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-7xl font-extrabold text-transparent sm:text-8xl">
        404
      </p>

      <h1 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">
        Página Não Encontrada
      </h1>

      <p className="mt-4 max-w-md text-base text-gray-400">
        A página que você procura pode ter sido movida ou removida.
        Use os links abaixo para continuar navegando.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
        >
          Voltar ao Início
        </Link>
        <a
          href={WHATSAPP_SUPPORT}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-700 px-8 py-3 text-sm font-semibold text-gray-300 transition hover:border-gray-500 hover:text-white"
        >
          Falar com Suporte
        </a>
      </div>

      <nav className="mt-16 grid grid-cols-2 gap-x-12 gap-y-4 text-sm sm:grid-cols-4">
        <Link href="/precos" className="text-gray-500 transition hover:text-white">Preços</Link>
        <Link href="/canais" className="text-gray-500 transition hover:text-white">Canais</Link>
        <Link href="/faq" className="text-gray-500 transition hover:text-white">FAQ</Link>
        <Link href="/contato" className="text-gray-500 transition hover:text-white">Contato</Link>
      </nav>
    </div>
  )
}

