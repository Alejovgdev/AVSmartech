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
    default: "Marketing digital y automatización para empresas | AV Smartech",
    template: "%s | AV Smartech"
  },
  description:
    "AV Smartech ayuda a empresas a conseguir más clientes, ahorrar tiempo y reducir costes mediante marketing digital, diseño web, SEO local, automatización e inteligencia artificial.",
  applicationName: "AV Smartech",
  keywords: [
    "digitalización de negocios",
    "automatización con IA",
    "inteligencia artificial para empresas",
    "SEO local",
    "automatización de procesos",
    "consultoría tecnológica"
  ],
  openGraph: {
    title: "Marketing digital y automatización para empresas | AV Smartech",
    description:
      "AV Smartech ayuda a empresas a conseguir más clientes, ahorrar tiempo y reducir costes mediante marketing digital, diseño web, SEO local, automatización e inteligencia artificial.",
    url: "https://avsmartech.com",
    siteName: "AV Smartech",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/avsmartech-logo.png",
        width: 1200,
        height: 630,
        alt: "AV Smartech"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing digital y automatización para empresas | AV Smartech",
    description:
      "AV Smartech ayuda a empresas a conseguir más clientes, ahorrar tiempo y reducir costes mediante marketing digital, diseño web, SEO local, automatización e inteligencia artificial.",
    images: ["/avsmartech-logo.png"]
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
