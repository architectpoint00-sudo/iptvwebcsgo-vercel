import { buildMetadata } from '@/lib/seo'
import { getPost } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = getPost('como-resolver-buffering-iptv')

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/como-resolver-buffering-iptv/',
})

export default function ComoResolverBufferingIptvPage() {
  return <BlogArticle post={post} />
}
