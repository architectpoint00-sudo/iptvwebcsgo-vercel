import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { BLOG_POSTS } from '@/lib/data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: { path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/precos/', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/canais/', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/sobre/', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/faq/', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contato/', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/guia-de-instalacao/', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/teste-gratis/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/programa-de-revendedor/', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/blog/', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/politica-de-privacidade/', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/termos-de-servico/', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/politica-de-reembolso/', priority: 0.4, changeFrequency: 'yearly' },
  ]

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]
}
