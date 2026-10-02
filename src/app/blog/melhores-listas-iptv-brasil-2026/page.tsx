import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = BLOG_POSTS[0]

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/melhores-listas-iptv-brasil-2026/',
})

export default function MelhoresListasIptvBrasil2026Page() {
  return <BlogArticle post={post} />
}
