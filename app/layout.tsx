import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/core/PageTransition";
import { ScrollProgress } from "@/components/core/ScrollProgress";
import { SmoothScroll } from "@/components/core/SmoothScroll";
import { getBrandAssets } from "@/lib/public-assets";

const assets = getBrandAssets();

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

const siteUrl = "https://www.avsmartech.com";
const seoTitle = "Marketing Digital y Tecnología para Empresas | AV Smartech";
const seoDescription =
  "Impulsa tu negocio con marketing digital, diseño web, SEO local, automatización e IA aplicada a ventas y procesos.";
const ogImage = assets.hook;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: "%s | AV Smartech"
  },
  description: seoDescription,
  applicationName: "AV Smartech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  keywords: [
    "digitalización de negocios",
    "automatización con IA",
    "inteligencia artificial para empresas",
    "marketing digital",
    "tecnología para empresas",
    "SEO local",
    "automatización de procesos",
    "consultoría tecnológica"
  ],
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: "AV Smartech",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1728,
        height: 910,
        alt: "AV Smartech: marketing digital y tecnología para empresas"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [ogImage]
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-144x144.png", sizes: "144x144", type: "image/png" }
    ],
    shortcut: "/icon.png",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export const viewport: Viewport = {
  themeColor: "#001B3F",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll />
        <ScrollProgress />
        <div className="page-shell min-h-screen">
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
