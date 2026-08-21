import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = BLOG_POSTS[7]

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/melhor-iptv-smart-tv-samsung-lg/',
})

export default function MelhorIptvSmartTvSamsungLgPage() {
  return <BlogArticle post={post} />
}
