import { Award, Code2, GraduationCap, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

interface ICredential {
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  type: string;
  link?: string;
  isNow?: boolean;
}

const list: ICredential[] = [
  {
    title: "Producción Web",
    description:
      "Certificación en diseño, desarrollo de plataformas web. Valida la maquetación responsive y buenas prácticas para la puesta en proyectos digitales.",
    date: "2025",
    type: "Certificado",
    icon: <Award className="w-5 h-5" />,
    link: "https://drive.google.com/file/d/11P-RI5u8tFMallxmoMoSKg3w1IiI5ZNg/view?usp=sharing",
  },
  {
    title: "Programa Full Stack Developer ITBA",
    description:
      "Formación intensiva en el ITBA abarcando tecnologías modernas de frontend y backend.",
    date: "2026",
    type: "Curso",
    icon: <Code2 className="w-5 h-5" />,
    isNow: true,
  },
  {
    title: "Tecnicatura en Análisis de Sistemas",
    description:
      "Formación superior enfocada en el ciclo de vida del software y modelado de datos. Me ayudó en la documentación, análisis de requerimientos y el desarrollo de software.",
    date: "2026",
    type: "Tecnicatura",
    icon: <GraduationCap className="w-5 h-5" />,
    isNow: true,
  },
  {
    title: "Promedio general",
    description:
      "Calificación promedio demostrada en la carrera de Analista de Sistemas. Promedio: 9,34.",
    date: "2026",
    type: "Promedio",
    icon: <TrendingUp className="w-5 h-5" />,
  },
];

export default function Credentials() {
  return (
    <motion.section
      id="Credentials"
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="px-6 px-[5vw] md:px-[6vw] py-[10vh] lg:py-[20vh] flex flex-col gap-2"
    >
      <span className="text-6 dark:text-2/50 uppercase tracking-widest font-mono text-xs">
        Credenciales
      </span>
      <h2 className="font-black text-4 dark:text-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter italic">
        Cursos y certificaciones
      </h2>
      <p className="text-base md:text-lg italic text-5/70">
        Un conjunto seleccionado de diferentes cursos y certificaciones que he
        obtenido durante estos últimos años.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-12 gap-3 mt-12">
        {list.map((item, idx) => {
          const Tag = item.link ? "a" : "div";

          return (
            <Tag
              key={idx}
              {...(item.link && {
                title: "Ver documento",
                href: item.link,
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className={`flex flex-col gap-4 justify-between col-span-1 lg:col-span-3 p-6 border border-6/70 rounded-[5px] hover:bg-6/20 hover:border-6 transition-all duration-200 ${
                item.link && "cursor-pointer"
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2 justify-between uppercase tracking-widest font-mono text-[10px]">
                  <span className="text-5/90 dark:text-2/50">{item.date}</span>
                  <div className="h-px w-full bg-gray-300" />
                  <span className="text-5/90 dark:text-2/50">{item.type}</span>
                </div>

                <div className="p-2 border border-6/70 flex items-center justify-start w-max rounded-[5px]">
                  {item.icon}
                </div>

                <h2 className="font-black text-4 dark:text-1 text-2xl uppercase tracking-tighter leading-7">
                  {item.title}
                </h2>
                <p className="text-base font-light italic text-5/90 dark:text-2/70">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-row items-center gap-2">
                {item.isNow && (
                  <div className="flex flex-row items-center gap-2">
                    <div className="p-1 bg-orange-500 rounded-full" />
                    <span className="text-5/90 dark:text-2/70 font-mono text-[11px] uppercase tracking-widest">
                      En progreso
                    </span>
                  </div>
                )}
              </div>
            </Tag>
          );
        })}
      </div>
    </motion.section>
  );
}
