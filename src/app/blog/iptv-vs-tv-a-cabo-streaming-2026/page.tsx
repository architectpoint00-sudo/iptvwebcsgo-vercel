import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = BLOG_POSTS[6]

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/iptv-vs-tv-a-cabo-streaming-2026/',
})

export default function IptvVsTvACaboStreaming2026Page() {
  return <BlogArticle post={post} />
}
