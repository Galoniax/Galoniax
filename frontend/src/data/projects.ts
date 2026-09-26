type GithubRepo = {
  name?: string;
  url: string;
};

type Image = {
  url: string;
  type: "main" | "web" | "mobile";
};

export type Proyect = {
  slug: string;
  title: string;
  introduction: string;

  year: string;

  images: Image[];

  highlights: readonly string[];
  tech: readonly string[];
  github: GithubRepo[];
  live?: string;
};

export const projectList: readonly Proyect[] = [
  {
    slug: "Dual-Eat",
    title: "DualEat",
    introduction:
      "Durante un año, me dediqué a desarrollar la tesis de la carrera, DualEat, un ecosistema gastronómico multiplataforma. El objetivo fue crear una herramienta única que elimine la necesidad de múltiples aplicaciones, conectando a los usuarios con establecimientos locales y, simultáneamente, asistiendo en la gestión culinaria del hogar. Este proyecto me permitió integrar tecnologías de IA, sistemas de pago y arquitecturas escalables, consolidando mis habilidades en el desarrollo de software de punta a punta.",
    year: "2026",

    images: [
      {
        url: "https://ilozjawukjoolmfdqwjn.supabase.co/storage/v1/object/public/images/DualEat/Background-Main.jpg",
        type: "main",
      },
    ],
    highlights: [
      "Ecosistema multiplataforma completo que integra una App Web (React), App Móvil (React Native/Expo) y una API RESTful centralizada.",
      "Comunicación bidireccional en tiempo real con WebSockets (Socket.IO) y Redis para mensajería instantánea y seguimiento en vivo de entregas a domicilio.",
      "Integración de Inteligencia Artificial mediante Groq SDK (LLMs) y reconocimiento óptico de caracteres (OCR) con Google Cloud Vision API para escanear tickets e ingredientes.",
      "Pasarela de pagos implementado con Mercado Pago, gestionando compras y suscripciones.",
      "Arquitectura de almacenamiento y caché de alto rendimiento optimizada con Redis (ioredis) y persistencia de assets multimedia en Supabase.",
      "Estrategia de despliegue contenerizada con Docker y Docker Compose para asegurar consistencia entre entornos de desarrollo y producción.",
      "Sistema de seguridad robusto con autenticación federada (Google OAuth 2.0), JSON Web Tokens (JWT) y encriptación de datos sensibles con bcrypt.",
    ],
    tech: [
      "React (Web)",
      "React Native / Expo (Mobile)",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Socket.IO",
      "Groq SDK",
      "Google Cloud Vision API",
      "Supabase",
      "Docker",
      "TailwindCSS",
    ],
    github: [
      {
        name: "Backend",
        url: "https://github.com/Galoniax/DualEat-Backend",
      },
      {
        name: "Frontend",
        url: "https://github.com/Galoniax/DualEat-Frontend",
      },
      {
        name: "Mobile",
        url: "https://github.com/Galoniax/DualEat-Mobile",
      },
    ],
    live: "https://dualeat.vercel.app/",
  },
];

export function getBySlug(slug: string) {
  return projectList.find((p) => p.slug === slug) || null;
}
