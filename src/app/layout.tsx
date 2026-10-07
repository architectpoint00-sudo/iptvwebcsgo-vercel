import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "@/lib/constants";
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
  verification: {
    google: "TN4bplf7oXkIk1h9SGezxu4XJ6c-y2tNOjSPXutGAiI",
  },
  title: {
    default: "IPTV Brasil: Teste Grátis de 6 Horas e Planos | WebCSGO IPTV",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "IPTV com canais ao vivo, filmes e séries em HD e 4K. Peça o teste grátis de 6 horas e veja os planos a partir de R$10/mês, com guias de instalação.",
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    title: "IPTV Brasil: Teste Grátis de 6 Horas e Planos | WebCSGO IPTV",
    description:
      "IPTV com canais ao vivo, filmes e séries em HD e 4K. Peça o teste grátis de 6 horas e veja os planos a partir de R$10/mês.",
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
    title: "IPTV Brasil: Teste Grátis de 6 Horas e Planos | WebCSGO IPTV",
    description:
      "IPTV com canais ao vivo, filmes e séries em HD e 4K. Peça o teste grátis de 6 horas e veja os planos a partir de R$10/mês.",
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

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              "name": SITE_NAME,
              "url": SITE_URL,
              "description": "Serviço de IPTV para o Brasil com canais ao vivo, filmes e séries sob demanda, teste grátis de 6 horas e suporte por WhatsApp.",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": SUPPORT_EMAIL,
                "telephone": "+17185864134",
                "availableLanguage": "pt-BR"
              }
            },
            { "@type": "WebSite", "@id": `${SITE_URL}/#website`, "name": SITE_NAME, "url": SITE_URL, "inLanguage": "pt-BR", "publisher": { "@id": `${SITE_URL}/#organization` } }
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
