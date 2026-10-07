import { buildMetadata } from '@/lib/seo'
import { getPost } from '@/lib/data'
import BlogArticle from '@/components/BlogArticle'

const post = getPost('configurar-iptv-android-ios-2026')

export const metadata = buildMetadata({
  title: post.title,
  description: post.excerpt,
  path: '/blog/configurar-iptv-android-ios-2026/',
})

export default function ConfigurarIptvAndroidIos2026Page() {
  return <BlogArticle post={post} />
}
