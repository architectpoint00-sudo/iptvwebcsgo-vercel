import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = BLOG_POSTS[4]

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/guia-canais-iptv-hd-4k/',
})

export default function GuiaCanaisIptvHd4kPage() {
  return <BlogArticle post={post} />
}
