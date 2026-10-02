import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = BLOG_POSTS[5]

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/iptv-futebol-ao-vivo/',
})

export default function IptvFutebolAoVivoPage() {
  return <BlogArticle post={post} />
}
