export type IconName =
  | "bot"
  | "chart"
  | "check"
  | "clock"
  | "database"
  | "globe"
  | "mail"
  | "map"
  | "megaphone"
  | "network"
  | "play"
  | "shield"
  | "sparkles"
  | "target"
  | "workflow";

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Digitalización", href: "/digitalizacion-negocios" },
  { label: "Automatización IA", href: "/automatizacion-ia" },
  { label: "Sectores", href: "/sectores" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" }
];

export const contactInfo = {
  phone: "+34664855649",
  phoneLabel: "+34 664 855 649",
  email: "avsmartechnology@gmail.com"
};

export const serviceGroups = [
  {
    title: "Web y branding digital",
    description:
      "Presencia digital completa, diseño web orientado a conversión y una marca online que genera confianza desde el primer contacto.",
    outcome: "Más confianza. Más ventas.",
    icon: "globe" as IconName,
    points: ["Web corporativa premium", "Marca digital consistente", "Arquitectura CRO"]
  },
  {
    title: "SEO local",
    description:
      "Posicionamos tu negocio donde tus clientes ya están buscando: Google, mapas y resultados locales de alta intención.",
    outcome: "Más visibilidad cerca de ti.",
    icon: "map" as IconName,
    points: ["Google Business Profile", "Apple Business Connect", "Optimización local"]
  },
  {
    title: "Captación online",
    description:
      "Diseñamos campañas, funnels y recorridos de conversión para convertir visitas dispersas en oportunidades comerciales.",
    outcome: "Más leads cualificados.",
    icon: "target" as IconName,
    points: ["Funnels de captación", "Campañas digitales", "Landing pages"]
  },
  {
    title: "Redes sociales",
    description:
      "Contenido, calendario y ejecución para sostener una presencia profesional sin consumir el tiempo de tu equipo.",
    outcome: "Más consistencia. Menos improvisación.",
    icon: "megaphone" as IconName,
    points: ["Gestión de redes", "Contenido B2B", "Optimización de marca online"]
  },
  {
    title: "Vídeo",
    description:
      "Grabación, edición y piezas comerciales que explican mejor lo que vendes y aceleran la confianza.",
    outcome: "Más claridad para vender.",
    icon: "play" as IconName,
    points: ["Vídeos corporativos", "Piezas para redes", "Contenido de autoridad"]
  },
  {
    title: "Automatización operativa",
    description:
      "Convertimos tareas repetitivas en flujos automáticos que reducen errores, tiempos muertos y dependencia manual.",
    outcome: "Menos horas. Más margen.",
    icon: "workflow" as IconName,
    points: ["Procesos administrativos", "Facturación", "Seguimiento comercial"]
  },
  {
    title: "IA empresarial",
    description:
      "Implementamos inteligencia artificial útil para atención, análisis, contenido, predicción y soporte operativo.",
    outcome: "IA aplicada a negocio real.",
    icon: "bot" as IconName,
    points: ["Bots IA", "Generación de contenido", "Predicciones"]
  },
  {
    title: "Integraciones",
    description:
      "Conectamos tus herramientas para que la información fluya entre ventas, operaciones, finanzas y dirección.",
    outcome: "Datos claros. Decisiones rápidas.",
    icon: "network" as IconName,
    points: ["CRM", "Dashboards", "Reportes automáticos"]
  },
  {
    title: "Consultoría estratégica",
    description:
      "Detectamos oportunidades de mejora y priorizamos sistemas digitales con impacto directo en ventas, costes y productividad.",
    outcome: "Tecnología con foco financiero.",
    icon: "chart" as IconName,
    points: ["Diagnóstico digital", "Mapa de automatización", "Roadmap ejecutivo"]
  }
];

export const sectors = [
  {
    name: "Clínicas",
    digitalize: "Web clara, SEO local, reservas y perfiles en mapas.",
    automate: "Recordatorios, captación de pacientes y seguimiento postconsulta.",
    improve: "Más citas, menos ausencias y una agenda mejor organizada."
  },
  {
    name: "Restaurantes",
    digitalize: "Menú online, reseñas, reservas y presencia local optimizada.",
    automate: "Confirmaciones, campañas recurrentes y gestión de clientes.",
    improve: "Más reservas, mejor reputación y menos llamadas repetitivas."
  },
  {
    name: "Inmobiliarias",
    digitalize: "Captación de propietarios, fichas de inmuebles y autoridad local.",
    automate: "CRM, alertas de leads, seguimiento comercial y reportes.",
    improve: "Menos oportunidades perdidas y ciclos de venta más controlados."
  },
  {
    name: "Gestorías",
    digitalize: "Posicionamiento por servicios, confianza online y captación B2B.",
    automate: "Documentación, avisos, facturación y flujos administrativos.",
    improve: "Menos tareas manuales y más capacidad por profesional."
  },
  {
    name: "Talleres",
    digitalize: "Google Business, reseñas, campañas locales y web de servicios.",
    automate: "Citas, presupuestos, avisos y seguimiento de clientes.",
    improve: "Más clientes locales y operaciones diarias con menos fricción."
  },
  {
    name: "Academias",
    digitalize: "Captación de alumnos, páginas por curso y funnels de inscripción.",
    automate: "Emails, matrículas, recordatorios y reportes de asistencia.",
    improve: "Más matriculaciones y mejor control del ciclo académico."
  },
  {
    name: "Comercios locales",
    digitalize: "Catálogo online, mapas, reseñas y campañas de proximidad.",
    automate: "Promociones, inventario ligero y comunicaciones recurrentes.",
    improve: "Más visitas, más recurrencia y mejor lectura del cliente."
  },
  {
    name: "Empresas de servicios",
    digitalize: "Web comercial, autoridad sectorial y captación de solicitudes.",
    automate: "Presupuestos, asignaciones, reportes y seguimiento de clientes.",
    improve: "Más solicitudes cualificadas y procesos escalables."
  }
];

export const blogPosts = [
  {
    title: "Cómo automatizar una pyme sin perder control",
    description:
      "Un enfoque práctico para empezar por tareas repetitivas, medir ahorro real y escalar automatizaciones con criterio.",
    category: "Automatización",
    readTime: "7 min"
  },
  {
    title: "Cómo conseguir clientes con Google Business",
    description:
      "Qué optimizar en tu perfil, cómo trabajar reseñas y por qué la búsqueda local sigue siendo uno de los canales más rentables.",
    category: "Digitalización",
    readTime: "6 min"
  },
  {
    title: "IA útil para negocios reales",
    description:
      "Casos donde la inteligencia artificial impacta en ventas, atención, reportes y productividad sin convertir la empresa en un laboratorio.",
    category: "IA empresarial",
    readTime: "8 min"
  },
  {
    title: "Errores digitales que frenan ventas",
    description:
      "Señales de que tu presencia online está generando fricción, desconfianza o pérdidas silenciosas de oportunidades.",
    category: "CRO",
    readTime: "5 min"
  }
];
