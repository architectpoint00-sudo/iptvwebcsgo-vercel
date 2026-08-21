import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = BLOG_POSTS[3]

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/configurar-iptv-android-ios-2026/',
})

export default function ConfigurarIptvAndroidIos2026Page() {
  return <BlogArticle post={post} />
}
