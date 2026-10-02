import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { WHATSAPP_TRIAL, SITE_URL, SITE_NAME } from '@/lib/constants'
import { BLOG_POSTS } from '@/lib/data'
import type { BlogPost } from '@/lib/data'

function isHeading(text: string) {
  return text.length < 80 && !/[.!:;]$/.test(text.trim())
}

/** Convert Brazilian date string to ISO format for schema */
function toISODate(dateStr: string): string {
  const months: Record<string, string> = {
    'Janeiro': '01', 'Fevereiro': '02', 'Março': '03', 'Marco': '03',
    'Abril': '04', 'Maio': '05', 'Junho': '06',
    'Julho': '07', 'Agosto': '08', 'Setembro': '09',
    'Outubro': '10', 'Novembro': '11', 'Dezembro': '12',
  }
  const match = dateStr.match(/(\d+)\s+de\s+(\w+)\s+de\s+(\d+)/)
  if (!match) return '2026-01-01'
  const [, day, monthName, year] = match
  const month = months[monthName] || '01'
  return `${year}-${month}-${day.padStart(2, '0')}`
}

function getRelatedPosts(currentSlug: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 3)
}

function buildBlogPostingSchema(post: BlogPost) {
  const isoDate = toISODate(post.date)
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": isoDate,
    "dateModified": isoDate,
    "author": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}/`,
    },
    "image": `${SITE_URL}/og-image-webcsgo.png`,
    "wordCount": post.content.join(' ').split(/\s+/).length,
    "inLanguage": "pt-BR",
  }
}

export default function BlogArticle({ post }: { post: BlogPost }) {
  const relatedPosts = getRelatedPosts(post.slug)

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBlogPostingSchema(post)) }}
      />

      <Breadcrumb
        items={[
          { label: 'Início', href: '/' },
          { label: 'Blog', href: '/blog/' },
          { label: post.title },
        ]}
      />

      <article>
        <header>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Blog
            </span>
            <time dateTime={toISODate(post.date)}>{post.date}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-400">{post.excerpt}</p>
        </header>

        <div className="mt-10 space-y-5 border-t border-white/10 pt-10">
          {post.content.map((block, i) =>
            isHeading(block) ? (
              <h2 key={i} className="pt-5 text-xl font-bold text-white sm:text-2xl">
                {block}
              </h2>
            ) : (
              <p key={i} className="text-sm leading-relaxed text-gray-400 sm:text-base">
                {block}
              </p>
            )
          )}
        </div>
      </article>

      <section className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#0d0d14] to-[#111827] p-10 text-center sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"
        />
        <div className="relative">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Teste Grátis IPTV WebCSGO</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-400">
            Experimente 6 horas grátis com acesso a 150.000+ canais em HD e 4K.
          </p>
          <a
            href={WHATSAPP_TRIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-200 hover:scale-105"
          >
            Solicitar Teste Grátis
          </a>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="mb-4 text-lg font-bold text-white">Continue Explorando</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/precos/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-purple-500/30 hover:text-white">
            Planos e Preços IPTV
          </Link>
          <Link href="/teste-gratis/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-purple-500/30 hover:text-white">
            Teste Grátis de 6 Horas
          </Link>
          <Link href="/canais/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-purple-500/30 hover:text-white">
            Lista de 150.000+ Canais
          </Link>
          <Link href="/faq/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-purple-500/30 hover:text-white">
            Perguntas Frequentes
          </Link>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-lg font-bold text-white">Artigos Relacionados</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}/`}
                className="rounded-xl border border-white/10 bg-[#111827] p-5 transition-colors hover:border-purple-500/30"
              >
                <h3 className="text-sm font-semibold leading-snug text-white">
                  {related.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs text-gray-500">
                  {related.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <p className="mt-10 text-center">
        <Link
          href="/blog/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
          </svg>
          Voltar para o blog
        </Link>
      </p>
    </div>
  )
}
