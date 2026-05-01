import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getBrandAssets } from "@/lib/public-assets";
import { contactInfo, navItems } from "@/lib/data";

const footerServices = [
  "Marketing digital",
  "Diseño web",
  "SEO local",
  "Automatización",
  "Inteligencia artificial"
];

export function Footer() {
  const assets = getBrandAssets();

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="premium-grid absolute inset-0 opacity-35" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-md">
            <span className="relative h-14 w-14 overflow-hidden rounded-full bg-white ring-1 ring-white/30">
              <Image
                src={assets.logoCircle}
                alt="AV SmartTech"
                fill
                sizes="56px"
                className="rounded-full object-cover"
              />
            </span>
            <span className="font-display text-lg font-semibold">AV SmartTech</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/72">
            Marketing digital, diseño web, SEO local y automatización para conseguir más clientes, ahorrar tiempo y reducir costes.
          </p>
          <div className="mt-6 grid gap-3 text-sm font-semibold text-white/80">
            <a className="inline-flex items-center gap-3 transition hover:text-cyan" href={`tel:${contactInfo.phone}`}>
              <Phone className="h-4 w-4 text-cyan" />
              {contactInfo.phoneLabel}
            </a>
            <a className="inline-flex items-center gap-3 break-all transition hover:text-cyan" href={`mailto:${contactInfo.email}`}>
              <Mail className="h-4 w-4 flex-none text-cyan" />
              {contactInfo.email}
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold">Navegación</h2>
          <ul className="mt-5 grid gap-3 text-sm text-white/72">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold">Servicios</h2>
          <ul className="mt-5 grid gap-3 text-sm text-white/72">
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold">Diagnóstico</h2>
          <p className="mt-5 text-sm leading-7 text-white/72">
            Detectamos oportunidades reales para conseguir más clientes, ahorrar tiempo y reducir costes operativos.
          </p>
          <Link
            href="/contacto"
            className="focus-ring subtle-sheen mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-cyan hover:text-white"
          >
            Solicitar diagnóstico gratuito
          </Link>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/56 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} AV SmartTech. Todos los derechos reservados.</p>
          <p>Servicios digitales inteligentes para empresas con ambición de crecer.</p>
        </div>
      </div>
    </footer>
  );
}
