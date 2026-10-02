import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = BLOG_POSTS[2]

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/como-instalar-iptv-fire-stick-2026/',
})

export default function ComoInstalarIptvFireStick2026Page() {
  return <BlogArticle post={post} />
}
