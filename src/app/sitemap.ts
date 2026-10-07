import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { BLOG_POSTS } from '@/lib/data'

export const dynamic = 'force-static'

/** Convert Brazilian date string "17 de Agosto de 2026" to Date */
function parseBrazilianDate(dateStr: string): Date {
  const months: Record<string, number> = {
    'Janeiro': 0, 'Fevereiro': 1, 'Março': 2, 'Marco': 2,
    'Abril': 3, 'Maio': 4, 'Junho': 5,
    'Julho': 6, 'Agosto': 7, 'Setembro': 8,
    'Outubro': 9, 'Novembro': 10, 'Dezembro': 11,
  }
  const match = dateStr.match(/(\d+)\s+de\s+(\w+)\s+de\s+(\d+)/)
  if (!match) return new Date('2026-08-17')
  const [, day, monthName, year] = match
  return new Date(Date.UTC(Number(year), months[monthName] ?? 7, Number(day)))
}

export default function sitemap(): MetadataRoute.Sitemap {
  /* Static pages carry fixed "last edited" dates (never build-time `now`).
     Update a page's date only when its content actually changes. */
  const staticRoutes: { path: string; lastEdited: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '/', lastEdited: '2026-10-07', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/precos/', lastEdited: '2026-10-02', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/canais/', lastEdited: '2026-10-07', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/sobre/', lastEdited: '2026-10-07', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/faq/', lastEdited: '2026-10-02', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contato/', lastEdited: '2026-08-11', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/guia-de-instalacao/', lastEdited: '2026-08-11', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/teste-gratis/', lastEdited: '2026-08-11', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/programa-de-revendedor/', lastEdited: '2026-08-11', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/blog/', lastEdited: '2026-10-02', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/politica-de-privacidade/', lastEdited: '2026-08-11', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/termos-de-servico/', lastEdited: '2026-08-11', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/politica-de-reembolso/', lastEdited: '2026-08-11', priority: 0.4, changeFrequency: 'yearly' },
  ]

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: new Date(route.lastEdited),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: parseBrazilianDate(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]
}
