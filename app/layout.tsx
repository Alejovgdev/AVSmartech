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

export const metadata: Metadata = {
  metadataBase: new URL("https://avsmartech.com"),
  title: {
    default: "AV SmartTech | Soluciones digitales inteligentes",
    template: "%s | AV SmartTech"
  },
  description:
    "Digitalización, automatización e inteligencia artificial para empresas que quieren vender más y reducir costes.",
  applicationName: "AV SmartTech",
  keywords: [
    "digitalización de negocios",
    "automatización con IA",
    "inteligencia artificial para empresas",
    "SEO local",
    "automatización de procesos",
    "consultoría tecnológica"
  ],
  openGraph: {
    title: "AV SmartTech | Soluciones digitales inteligentes",
    description:
      "Digitalización, automatización e inteligencia artificial para empresas que quieren vender más y reducir costes.",
    url: "https://avsmartech.com",
    siteName: "AV SmartTech",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/avsmartech-logo.png",
        width: 1200,
        height: 630,
        alt: "AV SmartTech"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AV SmartTech | Soluciones digitales inteligentes",
    description:
      "Digitalización, automatización e inteligencia artificial para empresas que quieren vender más y reducir costes.",
    images: ["/avsmartech-logo.png"]
  },
  icons: {
    icon: assets.logoCircle,
    shortcut: assets.logoCircle,
    apple: assets.logoCircle
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
