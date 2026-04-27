# AV SmartTech

Web corporativa multipagina para AV SmartTech, creada con Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis y React Three Fiber.

## Desarrollo

```bash
npm install
npm run dev
```

La web se abre en:

```txt
http://localhost:3000
```

## Variables de entorno

Copia `.env.local.example` a `.env.local` y rellena las credenciales SMTP para activar el formulario de contacto.

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=avsmartechnology@gmail.com
SMTP_PASS=tu_contrasena_de_aplicacion_de_gmail
SMTP_FROM="AV SmartTech <avsmartechnology@gmail.com>"
CONTACT_TO=contact@avsmartech.com
```

No subas `.env.local` al repositorio.

## Scripts

```bash
npm run typecheck
npm run build
npm run start
```
