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
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Organization", "name": SITE_NAME, "url": SITE_URL, "description": "Melhor IPTV do Brasil com +150.000 canais em 4K." },
            { "@type": "WebSite", "name": SITE_NAME, "url": SITE_URL }
          ]
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "WebCSGO IPTV - Assinatura Premium",
          "description": "Servi\u00e7o de IPTV premium com +150.000 canais em HD, Full HD e 4K. Tecnologia anti-freeze, suporte 24/7.",
          "brand": {"@type": "Brand", "name": "WebCSGO IPTV"},
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "BRL",
            "lowPrice": "12.50",
            "highPrice": "75.00",
            "offerCount": "4",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "2847"
          }
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {"@type": "Question", "name": "O que \u00e9 IPTV?", "acceptedAnswer": {"@type": "Answer", "text": "IPTV (Internet Protocol Television) \u00e9 uma tecnologia que permite assistir a canais de TV, filmes e s\u00e9ries atrav\u00e9s da internet, sem necessidade de antena ou TV a cabo tradicional."}},
            {"@type": "Question", "name": "Em quais dispositivos posso usar?", "acceptedAnswer": {"@type": "Answer", "text": "Nossa IPTV funciona em Smart TVs, Android, iOS, Fire Stick, MAG Box, computadores, notebooks e tablets. Basta ter uma conex\u00e3o de internet est\u00e1vel."}},
            {"@type": "Question", "name": "Como funciona o teste gr\u00e1tis?", "acceptedAnswer": {"@type": "Answer", "text": "Oferecemos um teste gr\u00e1tis de 6 horas para voc\u00ea experimentar a qualidade do nosso servi\u00e7o antes de assinar um plano, sem compromisso."}},
            {"@type": "Question", "name": "Como fa\u00e7o a instala\u00e7\u00e3o?", "acceptedAnswer": {"@type": "Answer", "text": "A instala\u00e7\u00e3o \u00e9 simples e leva poucos minutos. Enviamos um passo a passo completo e nossa equipe de suporte ajuda em todo o processo pelo WhatsApp."}},
            {"@type": "Question", "name": "O servi\u00e7o \u00e9 est\u00e1vel, sem travamentos?", "acceptedAnswer": {"@type": "Answer", "text": "Sim! Utilizamos tecnologia anti-freeze e servidores de alta performance para garantir uma transmiss\u00e3o est\u00e1vel 24 horas por dia, 7 dias por semana."}}
          ]
        })}} />
      </head>
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
