import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from './constants'

const DEFAULT_OG_IMAGE = '/og-image-webcsgo.png'

interface BuildMetadataArgs {
  title: string
  description: string
  /** Path starting with "/", e.g. "/canais/". Use "/" for the homepage. */
  path: string
  image?: string
  noIndex?: boolean
}

/**
 * Shared helper so every page ships identical, well-formed metadata:
 * canonical URL, Open Graph, Twitter Card and robots directives.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`

  return {
    // `absolute` ensures the exact title is used as-is, without the root
    // layout's `%s | IPTV WEBCSGO` template being appended a second time
    // (every page title below already includes its own branding suffix).
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'pt_BR',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  }
}
