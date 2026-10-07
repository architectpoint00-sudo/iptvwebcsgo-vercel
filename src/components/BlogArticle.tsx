import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { WHATSAPP_TRIAL, SITE_URL, SITE_NAME } from '@/lib/constants'
import { BLOG_POSTS } from '@/lib/data'
import type { BlogPost } from '@/lib/data'
import { brDateToISO } from '@/lib/dates'

type Block =
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'p'; text: string }

/** "## " = H2, "### " = H3, anything else = paragraph. */
function parseBlock(raw: string): Block {
  if (raw.startsWith('### ')) return { kind: 'h3', text: raw.slice(4).trim() }
  if (raw.startsWith('## ')) return { kind: 'h2', text: raw.slice(3).trim() }
  return { kind: 'p', text: raw }
}

/** FAQ pairs = every H3 question followed by its answer paragraph. */
function extractFaq(blocks: Block[]): { question: string; answer: string }[] {
  const out: { question: string; answer: string }[] = []
  blocks.forEach((b, i) => {
    const next = blocks[i + 1]
    if (b.kind === 'h3' && b.text.endsWith('?') && next && next.kind === 'p') {
      out.push({ question: b.text, answer: stripLinks(next.text) })
    }
  })
  return out
}

const toISODate = brDateToISO

function getRelatedPosts(post: BlogPost): BlogPost[] {
  const chosen = (post.related ?? [])
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => Boolean(p) && p!.slug !== post.slug)
  if (chosen.length > 0) return chosen.slice(0, 3)
  return BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)
}

const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g

/** Remove [text](url) markup, keeping the text (used for word counts). */
function stripLinks(text: string): string {
  return text.replace(LINK_PATTERN, '$1')
}

const LINK_CLASS = 'text-purple-400 underline underline-offset-2 transition-colors hover:text-purple-300'

/** Render a paragraph, turning [text](url) markup into real links. */
function renderRichText(text: string) {
  const nodes: React.ReactNode[] = []
  let last = 0
  let n = 0
  for (const m of text.matchAll(LINK_PATTERN)) {
    const start = m.index ?? 0
    if (start > last) nodes.push(text.slice(last, start))
    const [, label, href] = m
    nodes.push(
      href.startsWith('/') ? (
        <Link key={n++} href={href} className={LINK_CLASS}>
          {label}
        </Link>
      ) : (
        <a key={n++} href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
          {label}
        </a>
      )
    )
    last = start + m[0].length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

function buildBlogPostingSchema(post: BlogPost) {
  const isoDate = toISODate(post.date)
  const modified = post.modified ?? isoDate
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": isoDate,
    "dateModified": modified,
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
    "wordCount": stripLinks(post.content.map((c) => c.replace(/^#+ /, '')).join(' ')).split(/\s+/).length,
    "inLanguage": "pt-BR",
  }
}

export default function BlogArticle({ post }: { post: BlogPost }) {
  const relatedPosts = getRelatedPosts(post)
  const blocks = post.content.map(parseBlock)
  const faq = extractFaq(blocks)
  const faqSchema = faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBlogPostingSchema(post)) }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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
          {blocks.map((block, i) =>
            block.kind === 'h2' ? (
              <h2 key={i} className="pt-5 text-xl font-bold text-white sm:text-2xl">
                {block.text}
              </h2>
            ) : block.kind === 'h3' ? (
              <h3 key={i} className="pt-2 text-lg font-semibold text-white">
                {block.text}
              </h3>
            ) : (
              <p key={i} className="text-sm leading-relaxed text-gray-400 sm:text-base">
                {renderRichText(block.text)}
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
            Peça 6 horas grátis pelo WhatsApp e confira o serviço na sua TV, com a sua internet.
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
            Categorias de Canais
          </Link>
          <Link href="/guia-de-instalacao/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-purple-500/30 hover:text-white">
            Guia de Instalação por Aparelho
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
