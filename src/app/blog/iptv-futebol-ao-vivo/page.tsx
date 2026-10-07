import { buildMetadata } from '@/lib/seo'
import { getPost } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = getPost('iptv-futebol-ao-vivo')

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/iptv-futebol-ao-vivo/',
})

export default function IptvFutebolAoVivoPage() {
  return <BlogArticle post={post} />
}
