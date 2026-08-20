import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnnouncementBar from "@/components/AnnouncementBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IPTV Brasil | +150.000 Canais HD, Full HD e 4K | WebCSGO IPTV",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Melhor IPTV do Brasil com +150.000 canais ao vivo, filmes e séries. Qualidade 4K, sem travamentos. Teste grátis 24h. Planos a partir de R$24,99/mes.",
  applicationName: SITE_NAME,
  keywords: [
    "IPTV Brasil",
    "IPTV",
    "canais ao vivo",
    "filmes online",
    "séries online",
    "TV por internet",
    "IPTV 4K",
    "melhor IPTV",
    "lista IPTV",
    "WebCSGO IPTV",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    title: "IPTV Brasil | +150.000 Canais HD, Full HD e 4K | WebCSGO IPTV",
    description:
      "Melhor IPTV do Brasil com +150.000 canais ao vivo, filmes e séries. Qualidade 4K, sem travamentos. Teste grátis 24h.",
    images: [
      {
        url: "/og-image-webcsgo.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Brasil | +150.000 Canais HD, Full HD e 4K | WebCSGO IPTV",
    description:
      "Melhor IPTV do Brasil com +150.000 canais ao vivo, filmes e séries. Qualidade 4K, sem travamentos. Teste grátis 24h.",
    images: ["/og-image-webcsgo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  { "@type": "Organization", name: "{SITE_NAME}", url: SITE_URL, description: "Melhor IPTV do Brasil com +150.000 canais em 4K." },
                  { "@type": "WebSite", name: "{SITE_NAME}", url: SITE_URL }
                ]
              })
            }}
          />
      <body className="flex min-h-full flex-col bg-[#0a0a0a] text-gray-100">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z0RWXPWSLX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z0RWXPWSLX');
          `}
        </Script>
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
